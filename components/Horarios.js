// components/Horarios.js
const Horarios = ({ visible }) => (
    <div className={`horarios ${visible ? 'visible' : 'hidden'}`}>
        <label className="titulo">Calendario da semana</label>
        <a className="live" href="https://twitch.tv/nokyturno" style={{ fontFamily: 'WCManoNegraBta, Arial, sans-serif' }}>twitch.tv/nokyturno</a>
        <nav>
            <ul>
                <li className="diasemana">
                    <label className="semana" style={{ fontFamily: 'Chewy, Arial, sans-serif' }}>SEG</label>
                    <label className="hora" style={{ fontFamily: 'ModularFontFamily, Arial, sans-serif' }}></label>
                    <label className="hora" style={{ fontFamily: 'ModularFontFamily, Arial, sans-serif' }}></label>
                </li>
                <li className="diasemana">
                    <label className="semana" style={{ fontFamily: 'Chewy, Arial, sans-serif' }}>TER</label>
                    <label className="hora" style={{ fontFamily: 'ModularFontFamily, Arial, sans-serif' }}></label>
                    <label className="hora" style={{ fontFamily: 'ModularFontFamily, Arial, sans-serif' }}></label>
                </li>
                <li className="diasemana">
                    <label className="semana" style={{ fontFamily: 'Chewy, Arial, sans-serif' }}>QUA</label>
                    <label className="hora" style={{ fontFamily: 'ModularFontFamily, Arial, sans-serif' }}></label>
                    <label className="hora" style={{ fontFamily: 'ModularFontFamily, Arial, sans-serif' }}></label>
                </li>
                <li className="diasemana">
                    <label className="semana" style={{ fontFamily: 'Chewy, Arial, sans-serif' }}>QUI</label>
                    <label className="hora" style={{ fontFamily: 'ModularFontFamily, Arial, sans-serif' }}></label>
                    <label className="hora" style={{ fontFamily: 'ModularFontFamily, Arial, sans-serif' }}></label>
                </li>
            </ul>
        </nav>
        <nav>
            <ul>
                <li className="finalsemana">
                    <label className="semana" style={{ fontFamily: 'Chewy, Arial, sans-serif' }}>SEX</label>
                    <label className="hora" style={{ fontFamily: 'ModularFontFamily, Arial, sans-serif' }}></label>
                    <label className="hora" style={{ fontFamily: 'ModularFontFamily, Arial, sans-serif' }}></label>
                </li>
                <li className="finalsemana">
                    <label className="semana" style={{ fontFamily: 'Chewy, Arial, sans-serif' }}>SAB</label>
                    <label className="hora" style={{ fontFamily: 'ModularFontFamily, Arial, sans-serif' }}>HORARIO A</label>
                    <label className="hora" style={{ fontFamily: 'ModularFontFamily, Arial, sans-serif' }}>DEFINIR</label>
                </li>
                <li className="finalsemana">
                    <label className="semana" style={{ fontFamily: 'Chewy, Arial, sans-serif' }}>DOM</label>
                    <label className="hora" style={{ fontFamily: 'ModularFontFamily, Arial, sans-serif' }}>HORARIO A</label>
                    <label className="hora" style={{ fontFamily: 'ModularFontFamily, Arial, sans-serif' }}>DEFINIR</label>
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
                    border: .3rem solid #fff;
                    border-radius: 20px;
                    margin: .5rem 2rem 2rem 2rem;
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
    </div>
);
export default Horarios;
