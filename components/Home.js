import { useEffect, useRef } from 'react';
import classNames from 'classnames';

const Home = ({ visible }) => {
    const textareaRef = useRef(null);

    useEffect(() => {
        const textarea = textareaRef.current;

        if (textarea) {
            const adjustHeight = () => {
                textarea.style.height = 'auto';
                textarea.style.height = `${textarea.scrollHeight}px`;
            };

            adjustHeight();
            textarea.addEventListener('input', adjustHeight);

            return () => {
                textarea.removeEventListener('input', adjustHeight);
            };
        }
    }, []);

    return (
        <div className={classNames('container', { visible })}>
            <div className={classNames('horarios', { visible })}>
                <label className="titulo">Bem Vindo</label>
                <a className="live" href="https://twitch.tv/nokyturno" target="_blank" rel="noopener noreferrer">Lives NokyTurno</a>
                <div className="texto">
                    <textarea
                        ref={textareaRef}
                        readOnly
                        defaultValue="Gosto de jogos no estilo, historia, ação, aventura, RPG e sobrevivência, e sou péssimo em jogos de FPS. Espero poder conversar e dar altas gargalhadas juntos, mas se assustar e ficar triste tbm, é claro espero que essa ultima parte seja só com as histórias dos jogos, mas se não, vamos nos ajudar."
                    />
                </div>
                <nav className="linkredes">
                    <ul>
                        <li>
                            <a className="Redes" href="https://www.tiktok.com/@nokyturno" target="_blank" rel="noopener noreferrer">TikTok</a>
                            <a className="Redes" href="https://x.com/NokyTurno" target="_blank" rel="noopener noreferrer">Twitter</a>
                            <a className="Redes" href="https://discord.gg/xz9KDPZnz6" target="_blank" rel="noopener noreferrer">Instagram</a>
                            <a className="Redes" href="https://www.youtube.com/@NokyTurno" target="_blank" rel="noopener noreferrer">YouTube</a>
                            <a className="Redes" href="https://discord.gg/xz9KDPZnz6" target="_blank" rel="noopener noreferrer">Discord</a>
                        </li>
                    </ul>
                </nav>
                <nav className="finalsemana">
                    <ul>
                        <li className="redes-donate">
                            <button className="donate">
                                <a href="https://livepix.gg/nokyturno" target="_blank" rel="noopener noreferrer">Donate</a>
                                <br />
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
                    height: 100vh;
                    width: 100vw;
                    background-color: #00000080;
                }

                .horarios {
                    color: #ffffff;
                    background-color: #a0a0a042;
                    border: .3rem solid #fff;
                    border-radius: 20px;
                    width: 45%;
                    height: 70%;
                    font-size: 18px;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    padding: 2rem;
                    z-index: 2;
                    text-align: center;
                }

                .titulo {
                    padding: .5rem;
                    font-size: 4rem;
                    color: #fff;
                    text-shadow: 0 0 5px #0075ff, 0 0 10px #0075ff, 0 0 15px #0075ff, 0 0 35px #0075ff;
                }

                .live {
                    padding: .5rem;
                    font-size: 2.5rem;
                    color: #fff;
                    text-decoration: none;
                    text-shadow: 0 0 5px #0075ff, 0 0 10px #0075ff, 0 0 15px #0075ff, 0 0 35px #0075ff;
                }

                .texto {
                    width: 80%;
                }

                textarea {
                    width: 100%;
                    height: auto;
                    resize: none;
                    overflow: hidden;
                    background: transparent;
                    border: transparent;
                    color: #fff;
                    font-size: 1rem;
                    text-align: center;
                    padding: 0;
                    margin: 0;
                }

                .linkredes, .finalsemana {
                    margin: 1rem 0;
                }

                .Redes {
                    display: block;
                    padding: .5rem;
                    font-size: 1rem;
                    color: #fff;
                    text-decoration: none;
                }

                .Redes:hover {
                    text-shadow: 0 0 5px #0075ff, 0 0 10px #0075ff, 0 0 15px #0075ff, 0 0 35px #0075ff;
                }

                .redes-donate {
                    display: flex;
                    justify-content: space-between;
                    width: 100%;
                }

                .finalsemana button {
                    background-color: #0000;
                    width: 100%;
                }

                .finalsemana button:hover {
                    background-color: #0000;
                    text-shadow: 0 0 5px #0075ff, 0 0 10px #0075ff, 0 0 15px #0075ff, 0 0 35px #0075ff;
                }

                .donate {
                    background-color: #7b03d824;
                    border: .3rem solid #fff;
                    border-radius: 20px;
                    margin: 0;
                }

                .donate a {
                    color: #fff;
                    text-decoration: none;
                }

                .donate2 {
                    font-size: 4rem;
                }

                @media (max-width: 1200px) {
                    .horarios {
                        width: 70%;
                        height: 80%;
                        padding: 1rem;
                    }

                    .texto textarea {
                        font-size: 1rem;
                    }

                    .live, .titulo {
                        font-size: 1.5rem;
                    }

                    .donate, .donate2 {
                        font-size: 1.5rem;
                    }

                    .Redes {
                        font-size: 1rem;
                    }

                    .linkredes {
                        flex-direction: row;
                        flex-wrap: wrap;
                        justify-content: center;
                    }

                    .redes-donate {
                        flex-direction: column;
                        align-items: center;
                    }
                }

                @media (max-width: 600px) {
                    .container {
                        background-color: #00000080;
                    }

                    .horarios {
                        width: 60%;
                        height: 70%;
                        padding: 2rem;
                    }

                    .texto textarea {
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
                }
            `}</style>
        </div>
    );
}

export default Home;
