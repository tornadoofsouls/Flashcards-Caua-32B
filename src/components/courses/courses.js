// Importando o React
import React from "react";
// Importando os components necessários da lib react-materialize
import { Row } from 'react-materialize';

import { NavLink} from 'react-router-dom'

import Card_reveal from "./card_reveal";


const Course = (props) => {
  return (
    <div>
      <Row>
        <div class="row">
          <div class="rowc">
            <h5>Courses</h5>
            <NavLink to="/forms">
              <a class="grey waves-effect waves-light btn">Add</a>
            </NavLink>
          </div>
            {props.DataCourses.map(courses => (
              <Card_reveal 
                titl={courses.nome}
                desc={courses.descricao} 
              />
            ))};
          </div>
      </Row>
    </div>
  )
};

export default Course;