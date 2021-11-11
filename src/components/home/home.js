// Importando o React
import React from "react";
// Importando os components necessários da lib react-materialize
import { Row, Col, Card } from 'react-materialize';

const Home = () => (
  <Row>
    <Col m={11} s={11}>
        <Card>
          <h5><b>Estudo por Flashcards</b></h5>
          <br/>
          <div>
            <p>Através do curso, o aluno irá utilizar de flashcards para aprimorar seus conhecimentos na 
              matéria desejada, tendo destaque nas áreas de Física e Química. Com isso, buscamos tornar o 
              aprendizado mais dinâmico e divertido, auxiliando nossos alunso em sua jornada por conhecimento.
            </p>
            <br/>
          </div>
        </Card>
    </Col>
  </Row>
);

export default Home;