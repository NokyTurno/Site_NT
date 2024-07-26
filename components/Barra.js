import { useState } from 'react';

const Barra = ({ visible, MineOpen }) => {
    const [openSection, setOpenSection] = useState(null);

    const toggleSection = (section) => {
        setOpenSection(openSection === section ? null : section);
    };

    return (
        <aside style={{ display: visible ? 'flex' : 'none' }}>
            <div className="NavHorarios">
                <nav className="accordion-container">
                    <div className="main-item" onClick={() => toggleSection('Jogos')}>
                        Jogos
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="expand-icon" width="44" height="44">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                            <path d="M9 6l6 6-6 6" />
                        </svg>
                    </div>
                    <ul className={openSection === 'Jogos' ? 'open' : ''}>
                        <li>
                            <div className="line-vertical"></div>
                            <div className="line-horizontal"></div>
                            <a title="Incore" onClick={MineOpen}>Minecraft Server</a>
                        </li>
                    </ul>
                </nav>
            </div>

            <style jsx>{`
                aside {
                    background-color: #0000008a;
                    color: #000000;
                    width: 20%;
                    padding: 20px;
                    box-sizing: border-box;
                    flex-direction: column;
                    height: 98vh;
                    position: fixed; 
                    z-index: 9999; 
                }

                :root {
                    --primary-item: #6c6c6c;
                    --background-item: #000000;
                    --gray: #D5D4D5;
                    --background: #2c2c2c;
                    --item-non-hover: #ffffff;
                }

                .accordion-container {
                    min-width: 200px;
                    padding: 0px 5px;
                    overflow: hidden;
                    background-color: #fcfcfc00;
                }

                .main-item {
                    border: .1rem solid #fff;
                    border-radius: 8px;
                    background-color: #5b5b5b;
                    margin-top: .5rem;
                    padding: 12px;
                    display: flex;
                    cursor: pointer;
                    align-items: center;
                    justify-content: start;
                    gap: 8px;
                    transition: all ease-in-out 0.25s;
                    color: #fff;
                }

                .main-item:hover {
                    background-color: #fff;
                    color: var(--primary-item);
                }

                .main-item svg {
                    transition: all ease-in-out 0.25s;
                    stroke: #8d8d8d;
                }

                .main-item:hover svg {
                    stroke: var(--primary-item);
                }

                .main-item--open {
                    border-radius: 8px;
                    background-color: #fff;
                    transition: all 200ms;
                    color: var(--primary-item);
                }

                .main-item--open:hover {
                    color: #fff;
                    border-radius: 8px;
                    background-color: #000;
                }

                .main-item--open svg {
                    stroke: var(--primary-item);
                }

                .main-item--open:hover svg {
                    stroke: #fff;
                }

                .accordion-container > ul {
                    max-height: 0px;
                    list-style-type: none;
                    margin: 0px;
                    padding-left: 14px;
                    font-size: smaller;
                    visibility: hidden;
                    transition: all ease-in-out 0.2s;
                }

                .accordion-container > ul.open {
                    visibility: visible;
                    max-height: 400px;
                    padding-left: 22px;
                    opacity: 1;
                    display: flex;
                    align-items: center;
                    flex-direction: column;
                }

                .accordion-container > ul > li {
                    height: 48px;
                    display: flex;
                    width: 100%;
                    align-items: center;
                }

                .accordion-container > ul > li > a {
                    color: #fff;
                    padding: 5px 8px;
                    height: 20px;
                    width: 80%;
                    justify-content: center;
                    border: .1rem solid #fff;
                    line-height: 38px;
                    background-color: #828282;
                    display: flex;
                    align-items: center;
                    text-decoration: none;
                    border-radius: 8px;
                }

                .accordion-container > ul > li:hover {
                    color: var(--primary-item);
                    cursor: pointer;
                    font-weight: 700;
                }

                .accordion-container > ul > li:hover > a {
                    color: var(--primary-item);
                    background-color: #fff;
                    width: 100%;
                }

                .expand-icon {
                    width: 24px;
                    height: 24px;
                    margin-left: auto;
                    transition: transform 0.25s;
                }

                .main-item--open > .expand-icon {
                    transform: rotate(-90deg);
                }

                .line-vertical {
                    display: block;
                    background-color: #fff;
                    width: 2px;
                    height: 48px;
                }

                .accordion-container > ul > li:last-child > .line-vertical {
                    height: 25px;
                    align-self: flex-start;
                }

                .line-horizontal {
                    display: block;
                    background-color: #fff;
                    height: 2px;
                    min-width: 12px;
                }

                @media (max-width: 1200px) {
                    aside {
                        width: 30%;
                    }

                    .accordion-container > ul > li > a {
                        width: 90%;
                    }
                }

                @media (max-width: 768px) {
                    aside {
                        width: 40%;
                        padding: 15px;
                    }

                    .accordion-container {
                        min-width: 150px;
                    }

                    .main-item {
                        padding: 10px;
                    }

                    .accordion-container > ul > li > a {
                        width: 100%;
                    }
                }

                @media (max-width: 480px) {
                    aside {
                        width: 60%;
                        padding: 10px;
                    }

                    .accordion-container {
                        min-width: 120px;
                    }

                    .main-item {
                        padding: 8px;
                    }

                    .accordion-container > ul > li > a {
                        width: 100%;
                    }
                }
            `}</style>
        </aside>
    );
};

export default Barra;
