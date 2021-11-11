import React from "react";

import Home from "./components/home/home";

import Courses from "./components/courses/courses";

import Forms from './components/courses/forms'

import { Container } from 'react-materialize';

import { Routes, Route } from 'react-router-dom'

const Main = (props) => (
  <main>
    <Container>
      <Routes>
        <Route exact path='/' element={ <Home/> }/>
        <Route path='/courses' element={ <Courses DataCourses={props.DataCourses}/> }/>
        <Route path='/forms' element={ <Forms /> }/>
      </Routes>
    </Container>
  </main>  
);

export default Main;