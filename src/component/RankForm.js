import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from 'react-bootstrap/Carousel';
import {
  Card,
  Form,
  Button,
  Jumbotron,
  Dropdown,
  DropdownButton,
} from 'react-bootstrap';
import './FavTeam.css';
import axios from 'axios';
import MaterialTable from 'material-table';

export class RankForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      codeId: '',
      leagues: [],
      standing: [],
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleSelect = this.handleSelect.bind(this);
  }

  codeIdChange = (e) => {
    this.setState({
      codeId: e.target.value,
    });
  };

  handleSubmit(e) {
    e.preventDefault();
    const config = {
      method: 'GET',
      baseURL: 'http://localhost:8000/',
      url: `leagues?code=${this.state.codeId}`,
    };
    axios(config)
      .then((axiosResults) => {
        this.setState({
          leagues: axiosResults.data,
        });
      })
      .catch((err) => console.error(err));
  }

  handleSelect(e) {
    const config = {
      method: 'GET',
      baseURL: 'http://localhost:8000/',
      url: `/rank?league=${e}`,
    };
    axios(config)
      .then((axiosResults) => {
        this.setState({
          standing: axiosResults.data,
        });
      })
      .catch((err) => console.error(err));
  }

  renderLeagues() {
    return this.state.leagues.map((league) => {
      return (
        <>
          <Dropdown.Item eventKey={league.id}>{league.name}</Dropdown.Item>
        </>
      );
    });
  }

  seedTable() {
    if (this.state === undefined) {
      return [];
    }

    let teams = [];

    this.state.standing.map((team) => {
      teams.push({
        rank: team.rank,
        name: team.name,
        id: team.id,
        logo: team.logo,
        points: team.points,
        description: team.description,
        goalsDiff: team.goalsDiff,
      });
      return null;
    });

    return teams;
  }

  render() {
    return (
      <div>
        <Card
          style={{
            width: '40rem',
            height: '20rem',
            marginLeft: 350,
            marginTop: 20,
          }}
          className="card cardalign w-40 "
        >
          <Carousel fade>
            <Carousel.Item interval={1000}>
              <img
                className="d-block w-100"
                src="https://football-observatory.com/IMG/sites/b5wp/2019/wp299/en/img/wp299.jpg "
                alt="First slide"
                style={{ width: '28rem', height: '20rem' }}
              />

              <Carousel.Caption>
                <p>
                  Nulla vitae elit libero, a pharetra augue mollis interdum.
                </p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={1000}>
              <img
                className="d-block w-100"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTclI5xLQn8bmz64gG5v9NwMwUoYWLReSPvaA&usqp=CAU"
                alt="Second slide"
                style={{ width: '28rem', height: '20rem' }}
              />
              <Carousel.Caption>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={1000}>
              <img
                className="d-block w-100"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMFJKEhRviDm6zbQmbFGcOdYYs6kxMXlu7bQ&usqp=CAU"
                alt="Third slide"
                style={{ width: '28rem', height: '20rem' }}
              />
              <Carousel.Caption>
                <p>
                  Praesent commodo cursus magna, vel scelerisque nisl
                  consectetur.
                </p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </Card>
        <Jumbotron className="cont">
          <Form className="login-form" onSubmit={this.handleSubmit}>
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
            </Form.Group>

            <Form.Group>
              <DropdownButton onSelect={this.handleSelect} title="leagues">
                {this.renderLeagues()}
              </DropdownButton>
            </Form.Group>

            <Button className="btn-dark" type="submit">
              Submit
            </Button>
          </Form>
        </Jumbotron>
        <MaterialTable
          columns={[
            { title: 'Rank', field: 'rank' },
            { title: 'Club', field: 'name' },
            { title: 'Points', field: 'points' },
          ]}
          data={this.seedTable()}
          title="Standing"
        />
      </div>
    );
  }
}

export default RankForm;
