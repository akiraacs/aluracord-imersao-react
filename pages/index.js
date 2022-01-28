import { Box, Button, Text, TextField, Image } from '@skynexui/components';
import React from 'react';
import { useRouter } from 'next/router';
import appConfig from './config.json';

function Titulo(props) {
    console.log(props);
    const Tag = props.tag || 'h1';
    return (
        <>
            <Tag>{props.children}</Tag>
            <style jsx>{`
                ${Tag} {
                    color: ${appConfig.theme.colors.neutrals['100']};
                    font-size: 24px;
                    font-weight: 600;
                }
                `}</style>
        </>
    );

}

//componente react
//function HomePage() {
//    // JSX
//    return (
//        <div>
//            <GlobalStyle />
//            <Titulo tag="h2">Boas vindas de volta!</Titulo>
//            <h2>Discord - Alura Matrix</h2>
//        </div>
//    )
//}
//export default HomePage

export default function PaginaInicial() {
    // const username = 'akiraacs';
    const [username, setUsername] = React.useState('akiraacs');
    const roteamento = useRouter();


    return (
        <>
            <Box
                styleSheet={{
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    backgroundColor: appConfig.theme.colors.primary[0],
                    backgroundImage: 'url(https://a-static.besthdwallpaper.com/itachi-uchiha-papel-de-parede-2160x1440-2372_40.jpg)',
                    backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundBlendMode: 'multiply',
                }}
            >
                <Box
                    styleSheet={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        flexDirection: {
                            xs: 'column',
                            sm: 'row',
                        },
                        width: '100%', maxWidth: '700px',
                        borderRadius: '5px', padding: '32px', margin: '16px',
                        boxShadow: '0 2px 10px 0 rgb(0 0 0 / 20%)',
                        backgroundColor: appConfig.theme.colors.primary[900],
                    }}
                >
                    {/* Formulário */}
                    <Box
                        as="form"
                        onSubmit={function (infosDoEvento) {
                            infosDoEvento.preventDefault();
                            console.log('Alguém submeteu o form');
                            roteamento.push('/chat');
                            // window.location.href = '/chat';
                          }}
                        styleSheet={{
                            display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
                            width: { xs: '100%', sm: '50%' }, textAlign: 'center', marginBottom: '32px',
                        }}
                    >
                        <Titulo tag="h1">Que bom ver você por aqui!</Titulo>
                        <Text variant="body3" styleSheet={{ marginBottom: '32px', color: appConfig.theme.colors.neutrals[100] }}>
                            {appConfig.name}
                        </Text>

                        {/* <input
                                    type="text"
                                    value={username}
                                    onChange={function (event) {
                                        console.log('usuario digitou', event.target.value);
                                        // Onde ta o valor?
                                        const valor = event.target.value;
                                        // Trocar o valor da variavel
                                        // através do React e avise quem precisa
                                        setUsername(valor);
                                    }}
                                /> */}

                        <TextField
                            value={username}
                            onChange={function (event) {
                            console.log('usuario digitou', event.target.value);
                            // Onde ta o valor?
                            const valor = event.target.value;
                            // Trocar o valor da variavel
                            // através do React e avise quem precisa
                            setUsername(valor);
                            }}
                            fullWidth
                            textFieldColors={{
                                neutral: {
                                    textColor: appConfig.theme.colors.neutrals[200],
                                    mainColor: appConfig.theme.colors.neutrals[900],
                                    mainColorHighlight: appConfig.theme.colors.primary[600],
                                    backgroundColor: appConfig.theme.colors.neutrals[800],
                                },
                            }}
                        />
                        <Button
                            type='submit'
                            label='Entrar'
                            fullWidth
                            buttonColors={{
                                contrastColor: appConfig.theme.colors.neutrals[900],
                                mainColor: appConfig.theme.colors.primary[600],
                                mainColorLight: appConfig.theme.colors.primary[700],
                                mainColorStrong: appConfig.theme.colors.primary[700],
                            }}
                        />
                    </Box>
                    {/* Formulário */}


                    {/* Photo Area */}
                    <Box
                        styleSheet={{
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            maxWidth: '200px',
                            padding: '16px',
                            backgroundColor: appConfig.theme.colors.neutrals[800],
                            border: '6px solid',
                            borderColor: appConfig.theme.colors.neutrals["050"],
                            borderRadius: '10px',
                            flex: 1,
                            minHeight: '240px',
                        }}
                    >
                        <Image
                            styleSheet={{
                                borderRadius: '50%',
                                marginBottom: '16px',
                            }}
                            src={`https://github.com/${username}.png`}
                        />
                        <Text
                            variant="body4"
                            styleSheet={{
                                color: appConfig.theme.colors.neutrals[200],
                                backgroundColor: appConfig.theme.colors.neutrals[900],
                                padding: '3px 10px',
                                borderRadius: '1000px'
                            }}
                        >
                            {username}
                        </Text>
                    </Box>
                    {/* Photo Area */}
                </Box>
            </Box>
        </>
    );
}
