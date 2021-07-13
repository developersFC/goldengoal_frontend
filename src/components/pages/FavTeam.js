import React, { Component } from 'react'
import "../../App.css";
import "./FavTeam.css";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  Grid,
  Typography,
} from "@material-ui/core";
import { Modal } from 'react-bootstrap'
// import BootstrapTable from 'react-bootstrap-table-next';
import { Table } from "react-bootstrap";

class FavTeam extends Component {
  constructor(props) {
    super(props)
    this.state = {
      show: false,
      showRank: false,
    }
  }

  handleModal = () => {
    this.setState({ show: !this.state.show })
  }
  handleRanking = () => {
    this.setState({ showRank: !this.state.showRank })
  }

  render() {
    return (
      <div>
        <Card
          style={{
            marginTop: 15,
          }}
        >
          <CardContent>
            <Grid container justify="center" alignItems="center" spacing={4}>
              <Grid item>
                <img
                  style={{ width: 85 }}
                  src="https://www.realmadrid.com/img/horizontal_940px/comunicado-oficial_20201229035034.jpg"
                  alt=""
                />
              </Grid>
              <Grid item>
                <Typography variant="h5">Real Madrid</Typography>
              </Grid>
            </Grid>
          </CardContent>

          <CardActions>
            <Grid container justify="center">
              <Button
                onClick={this.handleModal}
                variant="outlined"
                color="secondary"
              >
                Recent match
              </Button>
              <Button
              onClick={this.handleRanking}
                style={{ marginLeft: 5 }}
                variant="outlined"
                color="primary"
              >
                Ranking
              </Button>
              <Button
                style={{ marginLeft: 5 }}
                variant="outlined"
                color="primary"
              >
                Delete
              </Button>
            </Grid>
          </CardActions>

          <Modal className="style" show={this.state.show} >
            <Modal.Header  onClick={() => { this.handleModal() }}>
              <Modal.Title>
                Recent Match
              </Modal.Title>

            </Modal.Header>
            <Modal.Body>
              <br></br>
            Realmadrid    4   -   4     Realmadrid    
            <br></br>
            <br></br>
            </Modal.Body>
            <Modal.Footer>
              <Button    variant="outlined" color="primary" onClick={() => {this.handleModal()}}>
                Close
              </Button>

            </Modal.Footer>
          </Modal>


          <Modal className="style" show={this.state.showRank} >
            <Modal.Header  onClick={() => { this.handleRanking() }}>
              <Modal.Title>
              Ranking
              </Modal.Title>

            </Modal.Header>
            <Modal.Body>
           
              <Table className="table" responsive="sm">
          <div className='desForm'>Football / Soccer Club World Ranking</div>
          <thead>
            <tr>
              <th>#</th>
              <th>Table heading</th>
              <th>Table heading</th>
              <th>Table heading</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Table cell</td>
              <td>Table cell</td>
              <td>Table cell</td>
            </tr>
            <tr>
              <td>2</td>
              <td>Table cell</td>
              <td>Table cell</td>
              <td>Table cell</td>
            </tr>
            <tr>
              <td>3</td>
              <td>Table cell</td>
              <td>Table cell</td>
              <td>Table cell</td>
            </tr>

            <tr>
              <td>4</td>
              <td>Table cell</td>
              <td>Table cell</td>
              <td>Table cell</td>
            </tr>

            <tr>
              <td>5</td>
              <td>Table cell</td>
              <td>Table cell</td>
              <td>Table cell</td>
            </tr>
            <tr>
              <td>6</td>
              <td>Table cell</td>
              <td>Table cell</td>
              <td>Table cell</td>
            </tr>
            <tr>
              <td>7</td>
              <td>Table cell</td>
              <td>Table cell</td>
              <td>Table cell</td>
            </tr>
          </tbody>
        </Table>
    

            </Modal.Body>
            <Modal.Footer>
              <Button    variant="outlined" color="primary" onClick={() => {this.handleRanking()}}>
                Close
              </Button>

            </Modal.Footer>
          </Modal>


        </Card>
      </div>
    )
  }
}

export default FavTeam








