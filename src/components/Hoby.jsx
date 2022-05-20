import React, { Component } from 'react';
import {Container, Row, Col, Card, CardGroup } from 'react-bootstrap';

class Hoby extends Component {
    render() {
        return (
            <div>
                <main>
                    <Container>
                        <Row>
                            <Col>
                            <h1>ini halaman hobi</h1>
                            <p class="pt-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis architecto odit debitis in dolores porro nam ducimus corporis, temporibus magni quia perferendis impedit? Accusantium aut distinctio, labore sint doloremque unde nisi ex officiis quia, minus tempore ducimus natus. Sunt, non?. Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores officia tempore dolorem explicabo nesciunt optio. Aperiam aspernatur saepe ab harum ipsa odit vitae eveniet debitis qui facilis. Cum eius voluptatum alias pariatur blanditiis repudiandae labore distinctio, tempora, deserunt minima autem!</p>
                            </Col>
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

export default Hoby;