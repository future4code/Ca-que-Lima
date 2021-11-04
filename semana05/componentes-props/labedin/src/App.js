import React from 'react';
import './App.css';
import CardGrande from './components/CardGrande';
import ImagemButton from './components/ImagemButton';
import CardPequeno from './components/CardPequeno';
import fotoPerfil from './img/foto-perfil.jpg';
import logoEscola from './img/logo-escola.jfif';
import logoHaa from './img/logo-haa.jfif';

function App() {
  return (
    <div className="App">
      <div className="page-section-container">
        <h2>Dados pessoais</h2>
        <CardGrande 
          imagem={fotoPerfil} 
          nome="Caíque Lima" 
          descricao1="Oi, eu sou o Caíque. Sou estudante Web Full-Stack da turma Lovelace na Labenu. Estou agora aprendendo React e como montar um site usando essa biblioteca."
        />
        
        <ImagemButton 
          imagem="https://image.flaticon.com/icons/png/512/117/117472.png" 
          texto="Ver mais"
        />
      </div>

      <div>
        <CardPequeno 
          imagem="https://e7.pngegg.com/pngimages/664/253/png-clipart-email-logo-outlook-com-graphics-email-miscellaneous-angle.png"
          titulo="Email:"
          texto="astronauta@hotmail.com"
        />
      </div>

      <div>
        <CardPequeno 
          imagem="https://img2.gratispng.com/20180830/bww/kisspng-the-daily-dot-internet-logo-online-newspaper-5b8824be044753.2560879215356489580175.jpg"
          titulo="Endereço:"
          texto="Rua 228, Goiânia"
        />
      </div>

      <div className="page-section-container">
        <h2>Experiências profissionais</h2>
        <CardGrande 
          imagem={logoEscola} 
          nome="Sky Escola de Aeronáutica" 
          descricao1="Instrutor de voo prático" 
        />
        
        <CardGrande 
          imagem={logoHaa}
          nome="Hillsboro Aero Academy" 
          descricao1="Flight Dispatcher" 
        />
      </div>

      <div className="page-section-container">
        <h2>Conquistas</h2>
        <CardGrande 
          imagem="https://icon-library.com/images/course-icon/course-icon-8.jpg"
          nome="Cursos"
          descricao1="Jet Trainning B-737"
          descricao2="Curso de Primeiros Socorros e Sobrevivência na Selva para Pilotos"
        />

        <CardGrande 
          imagem="https://icon-library.com/images/languages-icon-png/languages-icon-png-7.jpg"
          nome="Línguas"
          descricao1="Português Nativo"
          descricao2="Inglês Fluente"        
        />
      </div>
      
      <div className="page-section-container">
        <h2>Minhas redes sociais</h2>
        <ImagemButton 
          imagem="https://d2v9ipibika81v.cloudfront.net/uploads/sites/261/2017/01/facebook-logo-3.png" 
          texto="Facebook" 
        />        

        <ImagemButton 
          imagem="https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-1-1.png" 
          texto="Twitter" 
        />        
      </div>

    </div>
  );
}

export default App;