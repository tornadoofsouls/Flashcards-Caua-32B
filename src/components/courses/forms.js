import React, { useState } from "react";
import { Row, Col, Input, Button } from 'react-materialize'
import {NavLink} from 'react-router-dom'
import api from "../../service/api"

const Formulario = () => {
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');

    const regist = async () =>{
		await api.post("", {nome: name, descricao: description});
	}

    return (
        <Row>
            <Input placeholder="Course name..." label="Name"
            onChange={event => setName(event.target.value)} s={12} />
            <Input placeholder="Course description..." label="Description"
            onChange={event => setDescription(event.target.value)} s={12} />

            <Col s={12} m={12}>
                <NavLink to="/courses" >
                    <Button onClick={regist} waves='light' className="right grey darken-2">Add</Button>
                </NavLink>
            </Col>
        </Row>
    );
}

export default Formulario;