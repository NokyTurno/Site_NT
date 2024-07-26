<<<<<<< HEAD
import { useEffect, useRef } from 'react';

const Home = ({ visible }) => {
    const textareaRef = useRef(null);

    useEffect(() => {
        const textarea = textareaRef.current;

        if (textarea) {
            // Função para ajustar a altura do textarea
            const adjustHeight = () => {
                textarea.style.height = 'auto'; // Redefine a altura para auto
                textarea.style.height = `${textarea.scrollHeight}px`; // Ajusta a altura para a altura do conteúdo
            };

            adjustHeight(); // Ajusta a altura na inicialização

            // Ajusta a altura sempre que o conteúdo mudar
            textarea.addEventListener('input', adjustHeight);

            return () => {
                textarea.removeEventListener('input', adjustHeight);
            };
        }
    }, []);

    return (
        <div className={`container ${visible ? 'visible' : 'hidden'}`}>
            <div className={`horarios ${visible ? 'visible' : 'hidden'}`}>
                <label className="titulo" style={{ fontFamily: 'Chewy, Arial, sans-serif' }}>Bem Vindo</label>
                <a className="live" href="https://twitch.tv/nokyturno" target="_blank" rel="noopener noreferrer" style={{ fontFamily: 'WCManoNegraBta, Arial, sans-serif' }}>Lives NokyTurno</a>
                <div className="texto">
                    <textarea
                        ref={textareaRef}
                        readOnly
                        defaultValue="Gosto de jogos no estilo, historia, ação, aventura, RPG e sobrevivência, e sou péssimo em jogos de FPS. Espero poder conversar e dar altas gargalhadas juntos, mas se assustar e ficar triste tbm, é claro espero que essa ultima parte seja só com as histórias dos jogos, mas se não, vamos nos ajudar."
                        style={{ fontFamily: 'Chewy, Arial, sans-serif' }}
                    />
                </div>
                <nav className="linkredes">
                    <ul>
                        <li>
                            <a className="Redes" href="https://www.tiktok.com/@nokyturno" target="_blank" rel="noopener noreferrer" style={{ fontFamily: 'Chewy, Arial, sans-serif' }}>TikTok</a>
                            <a className="Redes" href="https://x.com/NokyTurno" target="_blank" rel="noopener noreferrer" style={{ fontFamily: 'Chewy, Arial, sans-serif' }}>Twitter</a>
                            <a className="Redes" href="https://discord.gg/xz9KDPZnz6" target="_blank" rel="noopener noreferrer" style={{ fontFamily: 'Chewy, Arial, sans-serif' }}>Instagram</a>
                            <a className="Redes" href="https://www.youtube.com/@NokyTurno" target="_blank" rel="noopener noreferrer" style={{ fontFamily: 'Chewy, Arial, sans-serif' }}>YouTube</a>
                            <a className="Redes" href="https://discord.gg/xz9KDPZnz6" target="_blank" rel="noopener noreferrer" style={{ fontFamily: 'Chewy, Arial, sans-serif' }}>Discord</a>
                        </li>
                    </ul>
                </nav>
                <nav className="finalsemana">
                    <ul>
                        <li className="redes-donate">
                            <button className="donate" style={{ fontFamily: 'Chewy, Arial, sans-serif' }}>
                                <a href="https://livepix.gg/nokyturno" target="_blank" rel="noopener noreferrer">
                                    Donate
                                </a><br />
                                <a href="https://livepix.gg/nokyturno" target="_blank" rel="noopener noreferrer" className="donate2">$</a>
                            </button>
                        </li>
                    </ul>
                </nav>
            </div>
            <style jsx>{`
            .container {
                display: flex;
                justify-content: center;
                align-items: center;
                height: 100vh; /* Garante que o container ocupe a altura total da tela */
                width: 100vw; /* Garante que o container ocupe a largura total da tela */
                background-color: #00000080; /* Adiciona um fundo semi-transparente para o container */
            }

=======
// components/Horarios.js
const Home = ({ visible }) => (
    <div className={`horarios ${visible ? 'visible' : 'hidden'}`}>
        <label className="titulo" style={{ fontFamily: 'Chewy, Arial, sans-serif' }}>Bem Vindo</label>
        <a className="live" href="https://twitch.tv/nokyturno" target="_blank" rel="noopener noreferrer"  style={{ fontFamily: 'WCManoNegraBta, Arial, sans-serif' }}>Lives NokyTurno</a>
        <div className="texto">
            <textarea readOnly defaultValue="Gosto de jogos no estilo, historia, ação, aventura, RPG e sobrevivência, e sou péssimo em jogos de FPS. Espero poder conversar e dar altas gargalhadas juntos, mas se assustar e ficar triste tbm, é claro espero que essa ultima parte seja só com as histórias dos jogos, mas se não, vamos nos ajudar." style={{ fontFamily: 'Chewy, Arial, sans-serif' }} />

        </div>
        <nav className="finalsemana">
            <ul>
                <li>
                    <nav className="linkredes">
                        <ul>
                            <li>
                                <a className="Redes" href="https://www.tiktok.com/@nokyturno" target="_blank" rel="noopener noreferrer" style={{ fontFamily: 'Chewy, Arial, sans-serif' }}>TikTok</a>
                                <a className="Redes" href="https://x.com/NokyTurno" target="_blank" rel="noopener noreferrer" style={{ fontFamily: 'Chewy, Arial, sans-serif' }}>Twitter</a>
                            </li>
                            <li>
                                <a className="Redes" href="https://discord.gg/xz9KDPZnz6" target="_blank" rel="noopener noreferrer" style={{ fontFamily: 'Chewy, Arial, sans-serif' }}>Instagram</a>
                                <a className="Redes" href="https://www.youtube.com/@NokyTurno" target="_blank" rel="noopener noreferrer" style={{ fontFamily: 'Chewy, Arial, sans-serif' }}>YouTube</a>
                            </li>
                            <li>
                                <a className="Redes" href="https://discord.gg/xz9KDPZnz6" target="_blank" rel="noopener noreferrer" style={{ fontFamily: 'Chewy, Arial, sans-serif' }}>Discord</a>
                            </li>
                        </ul>
                    </nav>
                </li>
                <li className="finalsemana">
                </li>
                <li>
                    <button className="donate" style={{ fontFamily: 'Chewy, Arial, sans-serif' }}>
                        <a href="https://livepix.gg/nokyturno" target="_blank" rel="noopener noreferrer">
                            Donate
                        </a><br />
                        <a href="https://livepix.gg/nokyturno" target="_blank" rel="noopener noreferrer" className="donate2">$</a>
                    </button>
                </li>
            </ul>
        </nav>

        <style jsx>{`
>>>>>>> ce8c3c32ff2e7eeafd67fc735bd5af7f5c68cff9
            .horarios {
                color: #ffffff;
                background-color: #a0a0a042;
                border: .3rem solid #fff;
                border-radius: 20px;
                width: 45%;
                height: 70%;
                font-size: 18px;
<<<<<<< HEAD
                display: flex;
                flex-direction: column;
                align-items: center;
                padding: 2rem;
                z-index: 2;
                text-align: center; /* Centraliza o texto dentro do elemento */
            }

            @media (max-width: 1200px) {
                .horarios {
                    width: 70%;
                    height: 80%;
                    top: auto;
                    left: auto;
                    transform: none;
                    position: relative;
                    padding: 1rem;
                }

                .texto {
                    width: 100%;
                    height: auto;
                }

                textarea {
                    width: 100%;
                    height: auto;
                    font-size: 1rem;
                }

                .live, .titulo {
                    font-size: 1.5rem;
                }

                .finalsemana {
                    margin: 1rem 0;
                }

                .donate {
                    height: auto;
                    width: 100%;
                    margin: 1rem 0;
                    font-size: 1.5rem;
                }

                .donate2 {
                    font-size: 2rem;
                }

                .Redes {
                    font-size: 1rem;
                }

                .linkredes {
                flex-direction: row; /* Alinha os itens lado a lado em telas grandes */
                flex-wrap: wrap; /* Permite que os itens se movam para a linha seguinte se necessário */
                justify-content: center; /* Centraliza os itens horizontalmente */
            }

            .linkredes ul {
                flex-direction: row; /* Alinha os itens lado a lado em telas grandes */
            }

            .linkredes li {
                margin-right: .1rem; /* Espaço entre os links em tela grande */
                margin-bottom: 0; /* Remove o espaço inferior em tela grande */
            }

                .redes-donate {
                    flex-direction: column; /* Exibir um abaixo do outro */
                    align-items: center;
                }
            }

            @media (min-width: 1201px) {
                .horarios {
                    width: 45%;
                    height: 70%;
                    padding: 2rem;
                }

                .texto {
                    width: 80%;
                    height: auto;
                }

                textarea {
                    width: 100%;
                    height: auto;
                    resize: none;
                    overflow: hidden;
                }

                .live, .titulo {
                    font-size: 2.5rem;
                }

                .donate {
                    width: 10rem;
                    height: 10rem;
                    font-size: 2rem;
                }

                .donate2 {
                    font-size: 4rem;
                }

                .Redes {
                    font-size: 1rem;
                }
            }

            .redes-donate {
                display: flex;
                justify-content: space-between;
                width: 100%;
=======
                position: absolute;
                display: flex; /* Alterado para flex */
                flex-direction: column;
                align-items: center;
                top: 50%;
                left: 40%;
                transform: translate(-50%, -50%);
                z-index: 2; /* Para garantir que fique à frente da imagem */
>>>>>>> ce8c3c32ff2e7eeafd67fc735bd5af7f5c68cff9
            }

            .diasemana {
                border: .3rem solid #fff;
                border-radius: 20px;
                margin: 1rem;
            }

            .finalsemana {
                border-radius: 20px;
<<<<<<< HEAD
                width: 80%;
                margin: 0;
            }

            .finalsemana button {
                background-color: #0000;
                width: 100%;
            }

            .finalsemana button:hover {
                background-color: #0000;
                text-shadow: 
                    0 0 5px #0075ff, 
                    0 0 10px #0075ff, 
                    0 0 15px #0075ff, 
                    0 0 35px #0075ff;
            }

            .donate {
                background-color: #7b03d824;
                border: .3rem solid #fff;
                border-radius: 20px;
                margin: 0;
            }

            .donate a {
                color: #fff;
=======
                margin: .5rem 2rem 2rem 2rem;
            }

            .finalsemana button{
                background-color: #0000;
            }

            .finalsemana button:hover{
                background-color: #0000;
                text-shadow: 
                    0 0 5px #0075ff, /* Primeira camada de sombra (neon mais próximo) */
                    0 0 10px #0075ff, /* Segunda camada de sombra */
                    0 0 15px #0075ff, /* Terceira camada de sombra */
                    0 0 35px #0075ff; /* Sétima camada de sombra (neon mais distante) */
            }

            .donate {
                height: 10rem;
                width: 10rem;
                background-color: #7b03d824;
                border: .3rem solid #fff;
                border-radius: 20px;
                font-size: 2rem;
                margin: .5rem 2rem 2rem 2rem;
            }

            .donate a{
                color: #fff; /* Cor do texto */
>>>>>>> ce8c3c32ff2e7eeafd67fc735bd5af7f5c68cff9
                text-decoration: none;
            }

            .donate2 {
                font-size: 4rem;
            }

            .titulo {
                padding-top: .5rem;
                padding-bottom: .5rem;
                font-size: 4rem;
<<<<<<< HEAD
                color: #fff;
                text-shadow: 
                    0 0 5px #0075ff, 
                    0 0 10px #0075ff, 
                    0 0 15px #0075ff, 
                    0 0 35px #0075ff;
=======
                color: #fff; /* Cor do texto */
                text-shadow: 
                    0 0 5px #0075ff, /* Primeira camada de sombra (neon mais próximo) */
                    0 0 10px #0075ff, /* Segunda camada de sombra */
                    0 0 15px #0075ff, /* Terceira camada de sombra */
                    0 0 35px #0075ff; /* Sétima camada de sombra (neon mais distante) */
>>>>>>> ce8c3c32ff2e7eeafd67fc735bd5af7f5c68cff9
            }

            .texto {
                width: 80%;
<<<<<<< HEAD
                height: auto;
=======
                height: 20%;
>>>>>>> ce8c3c32ff2e7eeafd67fc735bd5af7f5c68cff9
            }

            textarea {
                width: 100%;
<<<<<<< HEAD
                height: auto; /* Deixe a altura ajustar automaticamente */
                resize: none; /* Desativa a opção de redimensionar */
                overflow: hidden; /* Oculta as barras de rolagem */
=======
                height: 80%;
                resize: none;
>>>>>>> ce8c3c32ff2e7eeafd67fc735bd5af7f5c68cff9
                background: transparent;
                border: transparent;
                color: #fff;
                font-size: 1rem;
<<<<<<< HEAD
                text-align: center;
                display: block; /* Permite que o textarea ajuste sua altura */
                padding: 0;
                margin: 0;
=======
                text-align: center; /* Alinha o texto horizontalmente no centro */
                display: flex;
                justify-content: center; /* Alinha o texto verticalmente no centro */
                align-items: center; /* Alinha o texto verticalmente no centro */
                padding: 0; /* Remove o padding padrão */
                margin: 0; /* Remove o margin padrão */
>>>>>>> ce8c3c32ff2e7eeafd67fc735bd5af7f5c68cff9
            }

            .live {
                padding-top: .5rem;
                padding-bottom: .5rem;
                font-size: 2.5rem;
<<<<<<< HEAD
                color: #fff;
                text-decoration: none;
                text-shadow: 
                    0 0 5px #0075ff, 
                    0 0 10px #0075ff, 
                    0 0 15px #0075ff, 
                    0 0 35px #0075ff;
=======
                color: #fff; /* Cor do texto */
                text-decoration: none;
                text-shadow: 
                    0 0 5px #0075ff, /* Primeira camada de sombra (neon mais próximo) */
                    0 0 10px #0075ff, /* Segunda camada de sombra */
                    0 0 15px #0075ff, /* Terceira camada de sombra */
                    0 0 35px #0075ff; /* Sétima camada de sombra (neon mais distante) */
>>>>>>> ce8c3c32ff2e7eeafd67fc735bd5af7f5c68cff9
            }
            
            .Redes {
                display: block;
                padding: .5rem;
                font-size: 1rem;
<<<<<<< HEAD
                color: #fff;
                text-decoration: none;
            }

            .Redes:hover {
                text-shadow: 
                    0 0 5px #0075ff, 
                    0 0 10px #0075ff, 
                    0 0 15px #0075ff, 
                    0 0 35px #0075ff;
            }

            ul {
                list-style: none;
                padding: 0;
            }

            ul li {
                display: flex;
                justify-content: space-between;
                align-items: center;
            }

            ul li ul {
                display: flex;
                justify-content: space-between;
                width: 100%;
            }

            /* Ajuste específico para dispositivos móveis */
            @media (max-width: 600px) {
                .container {
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    height: 100vh; /* Garante que o container ocupe a altura total da tela */
                    width: 100vw; /* Garante que o container ocupe a largura total da tela */
                    background-color: #00000080; /* Adiciona um fundo semi-transparente para o container */
                }

                .horarios {
                    width: 60%; /* Ajuste a largura conforme necessário */
                    height: 70%; /* Ajuste a altura conforme necessário */
                    display: flex;
                    flex-direction: column;
                    justify-content: center; /* Centraliza verticalmente */
                    align-items: center; /* Centraliza horizontalmente */
                    padding: 2rem;
                    text-align: center; /* Centraliza o texto dentro do elemento */
                }

                /* Outras regras específicas para dispositivos móveis */
                .texto {
                    width: 100%;
                }

                textarea {
                    width: 100%;
                    font-size: 0.9rem;
                }

                .live, .titulo {
                    font-size: 1.5rem;
                }

                .donate {
                    font-size: 1.5rem;
                }

                .donate2 {
                    font-size: 2.5rem;
                }

                .Redes {
                    font-size: 0.8rem;
                }
        `}</style>
        </div>
    );
}
=======
                color: #fff; /* Cor do texto */
                text-decoration: none;
            }
            .Redes:hover {
                display: block;
                padding: .5rem;
                font-size: 1rem;
                color: #fff; /* Cor do texto */
                text-decoration: none;
                text-shadow: 
                    0 0 5px #0075ff, /* Primeira camada de sombra (neon mais próximo) */
                    0 0 10px #0075ff, /* Segunda camada de sombra */
                    0 0 15px #0075ff, /* Terceira camada de sombra */
                    0 0 35px #0075ff; /* Sétima camada de sombra (neon mais distante) */
            }

            .linkredes {
                margin-left:2rem;
            }

            .linkredes ul {
                list-style: none;
                padding: 0;
                margin: 0;
                display: flex;
                flex-direction: column;
                align-items: center;
            }

            .linkredes ul li {
                margin: 0.5rem 0;
                display: flex;
                justify-content: center;
                gap: 1rem; /* Espaçamento entre os links */
            }

            .semana {
                border-bottom: .3rem solid #fff;
                padding-top: .5rem;
                padding-bottom: .5rem;
                font-size: 2.5rem;
                color: #fff; /* Cor do texto */
                text-shadow: 
                    0 0 5px #0075ff, /* Primeira camada de sombra (neon mais próximo) */
                    0 0 10px #0075ff, /* Segunda camada de sombra */
                    0 0 15px #0075ff, /* Terceira camada de sombra */
                    0 0 35px #0075ff; /* Sétima camada de sombra (neon mais distante) */
            }

            .hora {
                padding-top: .5rem;
                padding-bottom: .5rem;
            }

            nav {
                width: 100%;
                display: flex;
                flex-direction: column;
                align-items: center;
            }
            
            nav ul {
                display: flex;
                list-style: none;
                margin: 0;
                padding: 0;
                width: 100%;
                justify-content: space-around;
            }

            nav ul li {
                display: inline-block;
                cursor: pointer;
                flex: 1;
                text-align: center;
            }

            nav ul li label,
            nav ul li input {
                display: block;
                width: 100%;
            }

            .dias-semana {
                margin-top: 1rem;
                width: 100%;
                border-collapse: collapse;
                text-align: center;
            }

            .dias-semana th, .dias-semana td {
                border: 1px solid #fff;
                padding: 0.5rem;
            }

            button {
                margin-top: 1rem;
                padding: 0.5rem 1rem;
                font-size: 18px;
                color: #fff;
                background-color: #454545;
                border: none;
                border-radius: 5px;
                cursor: pointer;
            }

            button:hover {
                background-color: #555555;
            }
        `}</style>
    </div>
);
>>>>>>> ce8c3c32ff2e7eeafd67fc735bd5af7f5c68cff9
export default Home;
