import React from 'react';
import Menu from '../../Components/Menu';
import dadosIniciais from '../../data/dados_iniciais.json';
import BannerMain from '../../Components/BannerMain';
import Carousel from '../../Components/Carousel';
import Footer from '../../Components/Footer';

function Home() {
  return (
    <div style={{background: "#141414"}}>
     <Menu />

    <BannerMain
      videoTitle={dadosIniciais.categorias[0].videos[0].titulo}
      url={dadosIniciais.categorias[0].videos[0].url}
      videoDescription={dadosIniciais.categorias[0].videos[0].videoDescription}
    />

    <Carousel ignoreFistVideo category={dadosIniciais.categorias[0]}/>
    <Carousel category={dadosIniciais.categorias[1]}/>
    
    <Footer/>
    </div>
  );
}

export default Home;