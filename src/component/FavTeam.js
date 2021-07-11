import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Form, Button, Jumbotron } from 'react-bootstrap'
import  './FavTeam.css'

// let axios = require("axios").default;



export class FavForm extends Component {
    constructor() {
        super();
        this.state = {

        }
    }
    render() {
        return (
            <Jumbotron className="cont">
                <Form className="login-form"   >
                    <legend>
                    Favourite team
                    </legend>
                    <Form.Group  className="mb-3" controlId="formBasicPassword">
                        <Form.Label> Pick your favourite team ⚽</Form.Label>
                        <Form.Control size="lg" type="text" placeholder="your team"  className="text-center" required />
                    </Form.Group>
                    <Button className="btn-dark" type="submit">
                        Submit
                    </Button>
                </Form>
            </Jumbotron>
        )
    }
}

export default FavForm