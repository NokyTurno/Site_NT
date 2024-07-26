// components/Horarios.js
const Horarios = ({ visible }) => (
    <div className={`horarios ${visible ? 'visible' : 'hidden'}`}>
        <label className="titulo" style={{ fontFamily: 'Gagalin, Arial, sans-serif' }}>Calendario da semana</label>
<<<<<<< HEAD
<<<<<<< HEAD
        <a className="live" href="https://twitch.tv/nokyturno" target="_blank" rel="noopener noreferrer" style={{ fontFamily: 'WCManoNegraBta, Arial, sans-serif' }}>Lives NokyTurno</a>
        <nav>
            <ul className="diasemana-list">

            </ul>
        </nav>
        <nav>
            <ul className="finalsemana-list">
                <li className="finalsemana">
=======
=======
>>>>>>> ce8c3c32ff2e7eeafd67fc735bd5af7f5c68cff9
        <a className="live" href="https://twitch.tv/nokyturno" target="_blank" rel="noopener noreferrer"  style={{ fontFamily: 'WCManoNegraBta, Arial, sans-serif' }}>Lives NokyTurno</a>
        <nav>
            <ul>
                <li className="diasemana">
<<<<<<< HEAD
>>>>>>> ce8c3c32ff2e7eeafd67fc735bd5af7f5c68cff9
=======
>>>>>>> ce8c3c32ff2e7eeafd67fc735bd5af7f5c68cff9
                    <label className="semana" style={{ fontFamily: 'Chewy, Arial, sans-serif' }}>SEG</label>
                    <label className="hora" style={{ fontFamily: 'ModularFontFamily, Arial, sans-serif' }}></label>
                    <label className="hora" style={{ fontFamily: 'ModularFontFamily, Arial, sans-serif' }}></label>
                </li>
                <li className="diasemana">
                    <label className="semana" style={{ fontFamily: 'Chewy, Arial, sans-serif' }}>TER</label>
                    <label className="hora" style={{ fontFamily: 'ModularFontFamily, Arial, sans-serif' }}></label>
                    <label className="hora" style={{ fontFamily: 'ModularFontFamily, Arial, sans-serif' }}></label>
                </li>
<<<<<<< HEAD
<<<<<<< HEAD
                <li className="finalsemana">
=======
                <li className="diasemana">
>>>>>>> ce8c3c32ff2e7eeafd67fc735bd5af7f5c68cff9
=======
                <li className="diasemana">
>>>>>>> ce8c3c32ff2e7eeafd67fc735bd5af7f5c68cff9
                    <label className="semana" style={{ fontFamily: 'Chewy, Arial, sans-serif' }}>QUA</label>
                    <label className="hora" style={{ fontFamily: 'ModularFontFamily, Arial, sans-serif' }}></label>
                    <label className="hora" style={{ fontFamily: 'ModularFontFamily, Arial, sans-serif' }}></label>
                </li>
<<<<<<< HEAD
<<<<<<< HEAD
                <li className="finalsemana">
=======
                <li className="diasemana">
>>>>>>> ce8c3c32ff2e7eeafd67fc735bd5af7f5c68cff9
=======
                <li className="diasemana">
>>>>>>> ce8c3c32ff2e7eeafd67fc735bd5af7f5c68cff9
                    <label className="semana" style={{ fontFamily: 'Chewy, Arial, sans-serif' }}>QUI</label>
                    <label className="hora" style={{ fontFamily: 'ModularFontFamily, Arial, sans-serif' }}></label>
                    <label className="hora" style={{ fontFamily: 'ModularFontFamily, Arial, sans-serif' }}></label>
                </li>
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> ce8c3c32ff2e7eeafd67fc735bd5af7f5c68cff9
            </ul>
        </nav>
        <nav>
            <ul>
<<<<<<< HEAD
>>>>>>> ce8c3c32ff2e7eeafd67fc735bd5af7f5c68cff9
=======
>>>>>>> ce8c3c32ff2e7eeafd67fc735bd5af7f5c68cff9
                <li className="finalsemana">
                    <label className="semana" style={{ fontFamily: 'Chewy, Arial, sans-serif' }}>SEX</label>
                    <label className="hora" style={{ fontFamily: 'ModularFontFamily, Arial, sans-serif' }}></label>
                    <label className="hora" style={{ fontFamily: 'ModularFontFamily, Arial, sans-serif' }}></label>
                </li>
                <li className="finalsemana">
                    <label className="semana" style={{ fontFamily: 'Chewy, Arial, sans-serif' }}>SAB</label>
<<<<<<< HEAD
<<<<<<< HEAD
                    <label className="hora" style={{ fontFamily: 'ModularFontFamily, Arial, sans-serif' }}>HORARIO A DEFINIR</label>
                </li>
                <li className="finalsemana">
                    <label className="semana" style={{ fontFamily: 'Chewy, Arial, sans-serif' }}>DOM</label>
                    <label className="hora" style={{ fontFamily: 'ModularFontFamily, Arial, sans-serif' }}>HORARIO A DEFINIR</label>
=======
=======
>>>>>>> ce8c3c32ff2e7eeafd67fc735bd5af7f5c68cff9
                    <label className="hora" style={{ fontFamily: 'ModularFontFamily, Arial, sans-serif' }}>HORARIO A</label>
                    <label className="hora" style={{ fontFamily: 'ModularFontFamily, Arial, sans-serif' }}>DEFINIR</label>
                </li>
                <li className="finalsemana">
                    <label className="semana" style={{ fontFamily: 'Chewy, Arial, sans-serif' }}>DOM</label>
                    <label className="hora" style={{ fontFamily: 'ModularFontFamily, Arial, sans-serif' }}>HORARIO A</label>
                    <label className="hora" style={{ fontFamily: 'ModularFontFamily, Arial, sans-serif' }}>DEFINIR</label>
<<<<<<< HEAD
>>>>>>> ce8c3c32ff2e7eeafd67fc735bd5af7f5c68cff9
=======
>>>>>>> ce8c3c32ff2e7eeafd67fc735bd5af7f5c68cff9
                </li>
            </ul>
        </nav>

        <style jsx>{`
<<<<<<< HEAD
<<<<<<< HEAD
            .horarios {
                color: #ffffff;
                background-color: #a0a0a042;
                border: .3rem solid #fff;
                border-radius: 20px;
                width: 80%; /* Ajustado para largura maior em telas pequenas */
                height: auto; /* Ajustado para altura automática */
                font-size: 18px;
                position: absolute;
                display: flex;
                flex-direction: column;
                align-items: center;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
                z-index: 2;
                padding: 1rem; /* Adicionado padding para melhor espaçamento */
            }

            .diasemana, .finalsemana {
                border: .3rem solid #fff;
                border-radius: 20px;
                margin: .5rem;
                padding: 0.5rem;
                width: 100%; /* Ajustado para largura total do container */
            }

            .titulo {
                padding-top: .5rem;
                padding-bottom: .5rem;
                font-size: 3.5rem;
                color: #fff;
                text-shadow: 
                    0 0 5px #0075ff, 
                    0 0 10px #0075ff, 
                    0 0 15px #0075ff, 
                    0 0 35px #0075ff;
                text-align: center; /* Centraliza o texto */
            }

            .live {
                padding-top: .5rem;
                padding-bottom: .5rem;
                font-size: 2.5rem;
                color: #fff;
                text-decoration: none;
                text-shadow: 
                    0 0 5px #0075ff, 
                    0 0 10px #0075ff, 
                    0 0 15px #0075ff, 
                    0 0 35px #0075ff;
                text-align: center; /* Centraliza o texto */
            }

            .semana {
                border-right: .2rem solid #fff;
                font-size: 2.5rem;
                padding-right: 1rem;
                color: #fff;
                text-shadow: 
                    0 0 5px #0075ff, 
                    0 0 10px #0075ff, 
                    0 0 15px #0075ff, 
                    0 0 35px #0075ff;
                text-align: center; /* Centraliza o texto */
            }

            .hora {
                padding: 1rem;
            }

            nav {
                width: 100%;
                display: flex;
                flex-direction: column;
                align-items: center;
            }
            
            .diasemana-list, .finalsemana-list {
                display: flex;
                flex-wrap: wrap; /* Permite que os itens se ajustem em várias linhas */
                justify-content: space-around;
                list-style: none;
                margin: 0;
                padding: 0;
            }

            .diasemana-list li, .finalsemana-list li {
                flex: 1 0 45%; /* Ajusta a largura para que dois itens fiquem por linha */
                box-sizing: border-box;
                display: flex;
                align-items: center;
                justify-content: center;
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

            @media (max-width: 768px) {
                .horarios {
                    width: 70%; /* Ajustado para largura maior em telas pequenas */
                    height: auto; /* Altura automática para melhor ajuste */
                    padding: 1rem;
                }

                .titulo {
                    font-size: 2.5rem; /* Fonte menor em telas menores */
                }

                .live {
                    font-size: 1.5rem; /* Fonte menor em telas menores */
                }

                .semana {
                    font-size: 1.5rem; /* Fonte menor em telas menores */
                }

                .hora {
                    font-size: 1rem; /* Fonte menor em telas menores */
                }

                .diasemana-list li, .finalsemana-list li {
                    flex: 1 0 45%; /* Ajusta a largura para dois itens por linha */
                }
            }

            @media (max-width: 480px) {
                .titulo {
                    font-size: 1.5rem; /* Fonte ainda menor em telas muito pequenas */
                }

                .live {
                    font-size: 1.2rem; /* Fonte ainda menor em telas muito pequenas */
                }

                .semana {
                    font-size: 1.2rem; /* Fonte ainda menor em telas muito pequenas */
                }

                .hora {
                    font-size: 0.8rem; /* Fonte ainda menor em telas muito pequenas */
                }

                .diasemana-list li, .finalsemana-list li {
                    flex: 1 0 100%; /* Cada item ocupa toda a largura disponível em telas muito pequenas */
                }
            }
        `}</style>
=======
=======
>>>>>>> ce8c3c32ff2e7eeafd67fc735bd5af7f5c68cff9
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
                    border: .3rem solid #fff;
                    border-radius: 20px;
                    margin: .5rem 2rem 2rem 2rem;
                }

                .titulo {
                    padding-top: .5rem;
                    padding-bottom: .5rem;
                    font-size: 3.5rem;
                    color: #fff; /* Cor do texto */
                    text-shadow: 
                        0 0 5px #0075ff, /* Primeira camada de sombra (neon mais próximo) */
                        0 0 10px #0075ff, /* Segunda camada de sombra */
                        0 0 15px #0075ff, /* Terceira camada de sombra */
                        0 0 35px #0075ff; /* Sétima camada de sombra (neon mais distante) */
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
<<<<<<< HEAD
>>>>>>> ce8c3c32ff2e7eeafd67fc735bd5af7f5c68cff9
=======
>>>>>>> ce8c3c32ff2e7eeafd67fc735bd5af7f5c68cff9
    </div>
);
export default Horarios;
