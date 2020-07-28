import React from 'react';

import Header from './components/Header';
import BannerMain from './components/BannerMain';
import Carousel from './components/Carousel';
import Footer from './components/Footer';

import dados from './data/dados_iniciais.json';


function App() {
  return (
    <div style={{ background: "#141414"}}>
      <Header />

      <BannerMain 
        videoTitle={dados.categorias[0].videos[0].titulo}
        url={dados.categorias[0].videos[0].url}
        videoDescription={"O que e Front end? Trabalhando na area"}
      />

      {
        dados.categorias.map(categorias => (
          <Carousel 
            category={categorias}
          />
        ))
      }

      <Footer />
    </div>
  );
}

export default App;
