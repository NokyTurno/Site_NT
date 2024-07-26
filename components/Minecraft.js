// components/Minecraft.js
const Minecraft = ({ visible }) => (
    <div className={`Minecraft ${visible ? 'visible' : 'hidden'}`}>
        <nav className="navbar">
            <ul>
                <li>Mundo</li>
                <li>Regras</li>
                {/* <li>Projetos</li>
                <li>Missões e eventos</li>
                <li>Classe</li>
                <li>Participantes</li> */}
            </ul>
        </nav>
        <div className="Mundo">

        </div>
        <div className="Regras">
            
        </div>

        <style jsx>{`
            .Minecraft {
                color: #ffffff;
                background-color: #a0a0a042;
                border: .3rem solid #fff;
                border-radius: 20px;
                width: 45%;
                height: 70%;
                font-size: 18px;
                position: absolute;
                display: flex;
                flex-direction: column;
                align-items: center;
                top: 50%;
                left: 40%;
                transform: translate(-50%, -50%);
                z-index: 2; /* Para garantir que fique à frente da imagem */
            }

            .navbar {
                width: 100%;
                background-color: #282c34a3;
                padding: 1rem 0;
                border-bottom: .3rem solid #fff;
                border-radius: 20px 20px 0 0;
            }

            .navbar ul {
                display: flex;
                justify-content: space-around;
                list-style: none;
                padding: 0;
                margin: 0;
            }

            .navbar ul li {
                color: #fff;
                cursor: pointer;
                font-size: 1rem;
                font-family: 'Chewy, Arial, sans-serif';
            }

            .navbar ul li:hover {
                text-shadow: 
                    0 0 5px #0075ff, 
                    0 0 10px #0075ff, 
                    0 0 15px #0075ff, 
                    0 0 35px #0075ff;
            }
        `}</style>
    </div>
);

export default Minecraft;
