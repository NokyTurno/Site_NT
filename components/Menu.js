import Link from "next/link";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarAlt } from '@fortawesome/free-solid-svg-icons';

const linkStyle = {
    color: '#fff',
    textDecoration: 'none'
};

const Menu = ({ toggleBarra, HomeOpen, CalendarOpen }) => (
    <header>
        <div className="botaobarra" onClick={toggleBarra}>
            <div className="line-horizontal1"></div>
            <div className="line-horizontal1"></div>
            <div className="line-horizontal1"></div>
        </div>
        <div>
            <Link href="/" style={linkStyle} onClick={HomeOpen}>
                <h1 className="home" style={{ fontFamily: 'WCManoNegraBta, Arial, sans-serif' }}>NokyTurno</h1>
            </Link>
        </div>
        <div className="calendar" onClick={CalendarOpen}>
            <a style={{ fontFamily: 'ModularFontFamily, Arial, sans-serif' }}>Lives</a>
            <FontAwesomeIcon icon={faCalendarAlt} size="lg" />
        </div>

        <style jsx>{`
            header {
                background-color: #ffffff24;
                color: #fff;
                width: auto;
                padding: 0rem 1rem;
                display: flex;
                height: 4rem;
                align-items: center;
                justify-content: space-between;
                position: relative;
                z-index: 3;
            }

            .home {
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

            header nav ul { 
                display: flex;
                align-items: center;
                justify-content: space-between;
                width: auto;
                list-style: none;
                margin: 0;
                padding: 0;
            }

            header nav ul li {
                display: inline;
                margin-right: 15px;
                cursor: pointer;
            }

            .botaobarra {
                cursor: pointer;
            }

            header .line-horizontal1 {
                border-radius: 20px;
                display: block;
                background-color: #fff;
                height: 3px;
                width: 1.5rem;
                margin-bottom: 3px;
            }

            .calendar {
                display: flex;
                align-items: center;
                cursor: pointer;
            }

            .calendar:hover {
                display: flex;
                align-items: center;
                cursor: pointer;
                color: #fff; /* Cor do texto */
                text-shadow: 
                    0 0 5px #0075ff, /* Primeira camada de sombra (neon mais próximo) */
                    0 0 10px #0075ff, /* Segunda camada de sombra */
                    0 0 15px #0075ff, /* Terceira camada de sombra */
                    0 0 35px #0075ff; /* Sétima camada de sombra (neon mais distante) */
                }
            }
        `}</style>
    </header>
);

export default Menu;