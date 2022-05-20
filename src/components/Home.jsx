import React, { Component } from 'react';
import {Container, Row, Col, Image, Button, Card, CardGroup } from 'react-bootstrap';

class Home extends Component {
    render() {
        return (
            <div>
                <main>
                    <Container>
                        <Row className="px-4 my-5">
                            <Col sm={7}>

                                <Image
                                    src='https://picsum.photos/id/297/900/400'
                                    fluid
                                />

                            </Col>
                            <Col sm={5}>

                                <h1 class="font-weight-light"> Halaman Utama</h1>
                                <p className="mt-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit laborum accusamus corporis praesentium? Inventore at distinctio perferendis. Consectetur quae delectus deserunt ipsam, ad ipsa soluta possimus, id eligendi facere at.</p>
                                <Button variant="primary">Learn more</Button>

                            </Col>
                        </Row>

                        <Row>
                            <Card className="text-center bg-secondary text-white rounded py-3 my-4">
                                <Card.Body>This is some text within a card body.</Card.Body>
                            </Card>
                        </Row>

                        <Row>
                            <Col>
                                <CardGroup>
                                    <Card>
                                        <Card.Img variant="top" src="https://picsum.photos/id/100/253/160" />
                                        <Card.Body>
                                            <Card.Title>Card title</Card.Title>
                                            <Card.Text>
                                                This is a wider card with supporting text below as a natural lead-in to
                                                additional content. This content is a little bit longer.
                                            </Card.Text>
                                        </Card.Body>
                                        <Card.Footer>
                                            <small className="text-muted">Last updated 3 mins ago</small>
                                        </Card.Footer>
                                    </Card>
                                    <Card>
                                        <Card.Img variant="top" src="https://picsum.photos/id/102/253/160" />
                                        <Card.Body>
                                            <Card.Title>Card title</Card.Title>
                                            <Card.Text>
                                                This card has supporting text below as a natural lead-in to additional
                                                content.{' '}
                                            </Card.Text>
                                        </Card.Body>
                                        <Card.Footer>
                                            <small className="text-muted">Last updated 3 mins ago</small>
                                        </Card.Footer>
                                    </Card>
                                    <Card>
                                        <Card.Img variant="top" src="https://picsum.photos/id/103/253/160" />
                                        <Card.Body>
                                            <Card.Title>Card title</Card.Title>
                                            <Card.Text>
                                                This is a wider card with supporting text below as a natural lead-in to
                                                additional content. This card has even longer content than the first to
                                                show that equal height action.
                                            </Card.Text>
                                        </Card.Body>
                                        <Card.Footer>
                                            <small className="text-muted">Last updated 3 mins ago</small>
                                        </Card.Footer>
                                    </Card>
                                </CardGroup>
                            </Col>
                        </Row>
                    </Container>
                </main>
            </div>
        );
    }
}

export default Home;