import React, { Component } from 'react'
import Carousel from "react-bootstrap/Carousel";
import { Card } from "react-bootstrap";
import Collapse from "react-bootstrap/Collapse";
export class SlideShow extends Component {
    render() {
        return (
          <div>
            <Card className="card cardalign w-40 ">
              {/* style={{ width: '40rem', height: '20rem', marginLeft: 350, marginTop: 20 }} */}
              <Carousel fade>
                <Carousel.Item interval={1000}>
                  <img
                    className="d-block w-100"
                    src="https://football-observatory.com/IMG/sites/b5wp/2019/wp299/en/img/wp299.jpg "
                    alt="First slide"
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
                    src="https://img.olympicchannel.com/images/image/private/t_16-9_360-203_2x/f_auto/v1538355600/primary/djnacbhtd6zvpkdiixah"
                    alt="Second slide"
                  />
                  <Carousel.Caption>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </p>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={1000}>
                  <img
                    className="d-block w-100"
                    src="https://amayei.nyc3.digitaloceanspaces.com/2018/09/salaah.jpg"
                    alt="Third slide"
                  />
                  <Carousel.Caption>
                    <p>
                      Praesent commodo cursus magna, vel scelerisque nisl
                      consectetur.
                    </p>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={1000}>
                  <img
                    className="d-block w-100"
                    src="https://resize.indiatvnews.com/en/resize/newbucket/715_-/2021/05/cristiano-ronaldo-1621913499.jpg"
                    alt="Third slide"
                  />
                  <Carousel.Caption>
                    <h3>forth slide label</h3>
                    <p>
                      Praesent commodo cursus magna, vel scelerisque nisl
                      consectetur.
                    </p>
                  </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item interval={1000}>
                  <img
                    className="d-block w-100"
                    src="https://imagevars.gulfnews.com/2020/12/21/201221-Benzema_176826eda4b_medium.jpg"
                    alt="Third slide"
                  />
                  <Carousel.Caption>
                    <h3>fifth slide label</h3>
                    <p>
                      Praesent commodo cursus magna, vel scelerisque nisl
                      consectetur.
                    </p>
                  </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item interval={1000}>
                  <img
                    className="d-block w-100"
                    src="https://d2x51gyc4ptf2q.cloudfront.net/content/uploads/2021/06/23225015/Benzema-Ronaldo.jpg"
                    alt="Third slide"
                  />
                  <Carousel.Caption>
                    <h3>sixth slide label</h3>
                    <p>
                      Praesent commodo cursus magna, vel scelerisque nisl
                      consectetur.
                    </p>
                  </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item interval={1000}>
                  <img
                    className="d-block w-100"
                    src="https://d3j2s6hdd6a7rg.cloudfront.net/v2/uploads/media/default/0002/16/thumb_115201_default_news_size_5.jpeg"
                    alt="Third slide"
                  />
                  <Carousel.Caption>
                    <h3>seventh slide label</h3>
                    <p>
                      Praesent commodo cursus magna, vel scelerisque nisl
                      consectetur.
                    </p>
                  </Carousel.Caption>
                </Carousel.Item>
              </Carousel>
            </Card>
          </div>
        );
    }
}

export default SlideShow
