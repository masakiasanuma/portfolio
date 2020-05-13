import React from 'react'
import { Card, Button, Container, Row, Col } from 'react-bootstrap' 

const Projects = () => {
    return (
        <div>
            <Container>
                <Row>
                    <Col className="projCard" sm={12} md={6} lg={4}>
                        <Card border="dark" bg="light">
                            <Card.Img variant="top" src={require("../images/mangadexterity.png")} />
                            <Card.Body>
                                <Card.Title>Mangadexterity</Card.Title>
                                <Card.Text>
                                    A web-app that allows the users to read any manga (Japanese comics) series from an online manga reader called Mangadex. 
                                    All the information and the pages of the manga series are retrieved from the Mangadex API.
                                </Card.Text>
                                <Button variant="success"><a className="projectLink" href="https://github.com/Masasasaki/Mangadexterity" target="_blank" rel="noopener noreferrer">Github Repo</a></Button>
                            </Card.Body>
                            <Card.Footer>
                                <i title="React.js" class="projectSkill devicon-react-original colored" />
                                <i title="Node.js" class="projectSkill devicon-nodejs-plain colored" />
                                <i title="Express.js" class="projectSkill devicon-express-original colored" />
                                <i title="Bootstrap" class="projectSkill devicon-bootstrap-plain colored" />
                            </Card.Footer>
                        </Card>
                    </Col>
                    <Col className="projCard" sm={12} md={6} lg={4}>
                        <Card border="dark" bg="light">
                            <Card.Img variant="top" src={require("../images/phonebook.jpg")} />
                            <Card.Body>
                                <Card.Title>Phonebook</Card.Title>
                                <Card.Text>
                                    A web-app simulating a phone book. As I was learning how to implement both 
                                    the frontend and the backend of web applications using popular technologies, I decided to start
                                    this project to practice integrating both components into one full-stack application.
                                </Card.Text>
                                <Button variant="success"><a className="projectLink" href="https://github.com/Masasasaki/Phonebook" target="_blank" rel="noopener noreferrer">Github Repo</a></Button>
                            </Card.Body>
                            <Card.Footer>
                                <i title="React.js" class="projectSkill devicon-react-original colored" />
                                <i title="Node.js" class="projectSkill devicon-nodejs-plain colored" />
                                <i title="Express.js" class="projectSkill devicon-express-original colored" />
                                <i title="MongoDB" class="projectSkill devicon-mongodb-plain colored" />
                            </Card.Footer>
                        </Card>
                    </Col>
                    <Col className="projCard" sm={12} md={6} lg={4}>
                        <Card border="dark" bg="light">
                            <Card.Img variant="top" src={require("../images/portfolio.png")} />
                            <Card.Body>
                                <Card.Title>Portfolio</Card.Title>
                                <Card.Text>
                                    The website that you are on right now! 
                                    Made from the ground-up using React and Bootstrap.
                                </Card.Text>
                                <Button variant="success"><a className="projectLink" href="https://github.com/Masasasaki/portfolio" target="_blank" rel="noopener noreferrer">Github Repo</a></Button>
                            </Card.Body>
                            <Card.Footer>
                                <i title="React.js" class="projectSkill devicon-react-original colored" />
                                <i title="Bootstrap" class="projectSkill devicon-bootstrap-plain colored" />
                            </Card.Footer>
                        </Card>
                    </Col>
                    <Col className="projCard" sm={12} md={6} lg={4}>
                        <Card border="dark" bg="light">
                            <Card.Img variant="top" src={require("../images/zappay.png")} />
                            <Card.Body>
                                <Card.Title>Zap Pay</Card.Title>
                                <Card.Text>
                                    For HackGT 2019, my team created a mobile application and an iMessage extension that provides a secure peer-to-peer banking experience. 
                                    Inspired from platforms like Venmo and Apple Pay, we explored new ways to make easy, quick, and secure transfers.
                                </Card.Text>
                                <Button variant="success"><a className="projectLink" href="https://devpost.com/software/zap-pay" target="_blank" rel="noopener noreferrer">Devpost</a></Button>
                            </Card.Body>
                            <Card.Footer>
                                <i title="Python" class="projectSkill devicon-python-plain colored" />
                                <i title="Swift" class="projectSkill devicon-swift-plain colored" />
                            </Card.Footer>
                        </Card>
                    </Col>
                    <Col className="projCard" sm={12} md={6} lg={4}>
                        <Card border="dark" bg="light">
                            <Card.Img className="projectImg" variant="top" src={require("../images/rgb.png")} />
                            <Card.Body>
                                <Card.Title>RGB Color Guessing Game</Card.Title>
                                <Card.Text>
                                    A simple web-based game where the user guesses the color based on the given RGB. 
                                    With two difficulties to play with, this game will test your perception of color
                                    through the RGB system!
                                </Card.Text>
                                <Button variant="success"><a className="projectLink" href="https://github.com/Masasasaki/RGB-Game" target="_blank" rel="noopener noreferrer">Github Repo</a></Button>
                            </Card.Body>
                            <Card.Footer>
                                <i title="HTML5" class="projectSkill devicon-html5-plain colored" />
                                <i title="CSS3" class="projectSkill devicon-css3-plain colored" />
                                <i title="Javascript" class="projectSkill devicon-javascript-plain colored" />
                            </Card.Footer>
                        </Card>
                    </Col>
                    <Col className="projCard" sm={12} md={6} lg={4}>
                        <Card border="dark" bg="light">
                            <Card.Img className="projectImg" variant="top" src={require("../images/tetris.jpg")} />
                            <Card.Body>
                            <Card.Title>GBA Tetris</Card.Title>
                                <Card.Text>
                                    The C implementation of the classic game of Tetris for the Gameboy Advance.
                                </Card.Text>
                                <Button variant="success"><a className="projectLink" href="https://github.com/Masasasaki/GBA-Tetris" target="_blank" rel="noopener noreferrer">Github Repo</a></Button>
                            </Card.Body>
                            <Card.Footer>
                                <i title="C" class="projectSkill devicon-c-plain colored" />
                            </Card.Footer>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Projects