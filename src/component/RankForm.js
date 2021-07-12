import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Form, Button, Jumbotron, DropdownButton, Dropdown } from 'react-bootstrap'
import './FavTeam.css'
import axios from 'axios'


export class RankForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            codeId: "",
            data: [],
        }
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    codeIdChange = (e) => {
        this.setState({
            codeId: e.target.value
        })
    }

    handleSubmit(e) {
        e.preventDefault();
        const config = {
            method: 'GET',
            baseURL: "http://localhost:8000/",
            url: `/leagues?code=${this.state.codeId}`
        };
        axios(config)
            .then((axiosResults) => {
                console.log(axiosResults);
                let leagues = axiosResults.data;
                leagues = leagues.map((item) => {
                    return [item.name, item.id];
                });
                console.log(this);
                //   console.log(this.state.codeId);
                  console.log(leagues);
                  this.setState({
                    data: leagues,

                  });
            })
            .catch((err) => console.error(err));

    }

    render() {
        return (
          <div>
            <Jumbotron className="cont">
              <Form
                className="login-form"
                onSubmit={this.handleSubmit}
                style={{ marginTop:10}}
              >
                <legend>Pick the league you want to see the ranking for</legend>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label> Enter the country code </Form.Label>
                  <Form.Control
                    size="lg"
                    type="text"
                    placeholder="your team"
                    className="text-center"
                    onChange={this.codeIdChange}
                  />
                  <DropdownButton className="btn-dark" title="leagues">
                    {/* {for (let i = 0; i < array.length; i++) {
                                   
                                   
                         
                                <Dropdown.Item value="h">Action</Dropdown.Item>
                               }
                               } */}
                  </DropdownButton>
                </Form.Group>
                <Button className="btn-dark" type="submit">
                  Submit
                </Button>
              </Form>
            </Jumbotron>
            {console.log(this.state.codeId)}
          </div>
        );
    }
}

export default RankForm
