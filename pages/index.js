import Head from 'next/head';
import { useState } from 'react';
import Menu from '../components/Menu';
import Barra from '../components/Barra';
import Horarios from '../components/Horarios';
import Home from '../components/Home';
import Minecraft from '../components/Minecraft';

export default function HomePage() {
  const [barraVisible, setBarraVisible] = useState(false);
  const [horariosVisible, setHorariosVisible] = useState(false);
  const [homeVisible, setHomeVisible] = useState(true);
  const [mineVisible, setMineVisible] = useState(false);

  const toggleBarra = () => {
    setBarraVisible(!barraVisible);
  };

  const CalendarOpen = () => {
    setBarraVisible(false); // Oculta Barra
    setHorariosVisible(true); // Exibe Horarios
    setHomeVisible(false); // Oculta Home
    setMineVisible(false); // Oculta Home
  };

  const HomeOpen = () => {
    setBarraVisible(false); // Oculta Barra
    setHorariosVisible(false); // Oculta Horarios
    setHomeVisible(true); // Exibe Home
    setMineVisible(false); // Oculta Home
  };

  const MineOpen = () => {
    setBarraVisible(false); // Oculta Barra
    setHorariosVisible(false); // Oculta Horarios
    setHomeVisible(false); // Oculta Home
    setMineVisible(true); // Exibe Home
  };

  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta name="robots" content="index, follow" />
        <meta name="description" content="NokyTurno" />
        <meta name="author" content="Noky" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="icon" href="/Imagens/Perfil-semfundo.png" />
        <link rel="stylesheet" href="/styles/globals.css" />
        <title>NT</title>
      </Head>
      <Menu toggleBarra={toggleBarra} CalendarOpen={CalendarOpen} HomeOpen={HomeOpen} />
      <Barra visible={barraVisible} MineOpen={MineOpen} />
      <div>
        <main>
          <div className="image-container" />
          <div className="image-container2">
            <img src="/Imagens/Perfil-semfundo.png" alt="Imagem" />
          </div>
          <Home visible={homeVisible} />
          <Horarios visible={horariosVisible} />
          <Minecraft visible={mineVisible} />
        </main>
      </div>
    </>
  );
}
