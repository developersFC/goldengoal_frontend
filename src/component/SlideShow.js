import React from 'react';
import Carousel from 'react-bootstrap/Carousel'
import { Card, Table } from 'react-bootstrap';
import Collapse from 'react-bootstrap/Collapse'
class slideShow extends React.Component {

  
   
   

    render() {
        return (
            <div>
                <Card style={{ width: '40rem', height: '20rem', marginLeft: 350, marginTop: 20 }} className="card cardalign w-40 " >
                    <Carousel fade   >
                        <Carousel.Item interval={1000}  >
                     

                            <img
                                className="d-block w-100"
                                src="https://football-observatory.com/IMG/sites/b5wp/2019/wp299/en/img/wp299.jpg "
                                alt="First slide"
                                style={{ width: '28rem', height: '20rem' }}
                            />

                            <Carousel.Caption>
                             
                                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
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
                        
                                <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                    </Carousel>
                </Card>
                <Table responsive="sm" style={{ width: '30rem', marginLeft: 440, marginTop: 20 }}>
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
                            <th>4</th>
                            <th>Table heading</th>
                            <th>Table heading</th>
                            <th>Table heading</th>
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

            </div>
        )
    }
}

export default slideShow
