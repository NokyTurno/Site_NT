// pages/index.js
import Head from 'next/head';
import { useState } from 'react';
import Menu from '../components/Menu';
import Barra from '../components/Barra';
import Horarios from '../components/Horarios';
import Home from '../components/Home';
import Minecraft from '../components/Minecraft';

export default function HomePage() {
  const [activeComponent, setActiveComponent] = useState('home');

  const toggleBarra = () => {
    setActiveComponent(prev => prev === 'barra' ? 'home' : 'barra');
  };

  const CalendarOpen = () => {
    setActiveComponent('horarios');
  };

  const HomeOpen = () => {
    setActiveComponent('home');
  };

  const MineOpen = () => {
    setActiveComponent('minecraft');
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
      {activeComponent === 'barra' && <Barra visible={true} MineOpen={MineOpen} />}
      {activeComponent === 'horarios' && <Horarios visible={true} />}
      {activeComponent === 'home' && <Home visible={true} />}
      {activeComponent === 'minecraft' && <Minecraft visible={true} />}
    </>
  );
}
