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
            .horarios {
                color: #ffffff;
                background-color: #a0a0a042;
                border: .3rem solid #fff;
                border-radius: 20px;
                width: 45%;
                height: 70%;
                font-size: 18px;
                position: absolute;
                display: flex; /* Alterado para flex */
                flex-direction: column;
                align-items: center;
                top: 50%;
                left: 40%;
                transform: translate(-50%, -50%);
                z-index: 2; /* Para garantir que fique à frente da imagem */
            }

            .diasemana {
                border: .3rem solid #fff;
                border-radius: 20px;
                margin: 1rem;
            }

            .finalsemana {
                border-radius: 20px;
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
                text-decoration: none;
            }

            .donate2 {
                font-size: 4rem;
            }

            .titulo {
                padding-top: .5rem;
                padding-bottom: .5rem;
                font-size: 4rem;
                color: #fff; /* Cor do texto */
                text-shadow: 
                    0 0 5px #0075ff, /* Primeira camada de sombra (neon mais próximo) */
                    0 0 10px #0075ff, /* Segunda camada de sombra */
                    0 0 15px #0075ff, /* Terceira camada de sombra */
                    0 0 35px #0075ff; /* Sétima camada de sombra (neon mais distante) */
            }

            .texto {
                width: 80%;
                height: 20%;
            }

            textarea {
                width: 100%;
                height: 80%;
                resize: none;
                background: transparent;
                border: transparent;
                color: #fff;
                font-size: 1rem;
                text-align: center; /* Alinha o texto horizontalmente no centro */
                display: flex;
                justify-content: center; /* Alinha o texto verticalmente no centro */
                align-items: center; /* Alinha o texto verticalmente no centro */
                padding: 0; /* Remove o padding padrão */
                margin: 0; /* Remove o margin padrão */
            }

            .live {
                padding-top: .5rem;
                padding-bottom: .5rem;
                font-size: 2.5rem;
                color: #fff; /* Cor do texto */
                text-decoration: none;
                text-shadow: 
                    0 0 5px #0075ff, /* Primeira camada de sombra (neon mais próximo) */
                    0 0 10px #0075ff, /* Segunda camada de sombra */
                    0 0 15px #0075ff, /* Terceira camada de sombra */
                    0 0 35px #0075ff; /* Sétima camada de sombra (neon mais distante) */
            }
            
            .Redes {
                display: block;
                padding: .5rem;
                font-size: 1rem;
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
export default Home;
