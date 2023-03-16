import React from 'react';
//import './App.css';
import { Container, Head, Titulo, BenVindo} from './styles';

function App() {
  return (
    <Container>
        <Head>
            <Titulo>Projeto Styled</Titulo>
        </Head>   

        <BenVindo cor="0000FF" tamanho={35}>
          Bem vindo ao sistema!
        </BenVindo>

    </Container>
  );
}

export default App;









/*
  <div className="container">
    <header className="header">
      <a className="titulo">Projeto Styled</a>
    </header>     
    <h1>Bem vindo ao sistema!</h1>
  </div>
 */




