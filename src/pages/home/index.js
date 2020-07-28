import React from 'react';
import Menu from '../../Components/Menu';
import dados from '../../data/dados_iniciais.json';
import BannerMain from '../../Components/BannerMain';
import Carousel from '../../Components/Carousel';
import Footer from '../../Components/Footer';

function Home() {
  return (
    <div>
     <Menu />

    <BannerMain
      videoTitle={dados.categorias[0].videos[0].titulo}
      url={dados.categorias[0].videos[0].url}
      videoDescription={dados.categorias[0].videos[0].videoDescription}
    />
    <Carousel category={dados.categorias[1]}/>
    <Footer/>
    </div>
  );
}

export default Home;
