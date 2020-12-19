import React from 'react'
import ReactPlayer from 'react-player'
import { Image, Container, Row, Col } from 'react-bootstrap' 

const Hobbies = () => {
    return (
        <Container>
            <Row className="hobbyDesc">
                <p>
                    In my free time, you can find me playing the guitar, practicing latte art, or browsing reddit and youtube.
                    I also post fingerstyle guitar videos on <a href="https://www.youtube.com/channel/UCth0pz1bQjWFVoX422pMypQ" target="_blank" rel="noopener noreferrer">Youtube</a> and <a href="https://www.instagram.com/yuru_guitar/" target="_blank" rel="noopener noreferrer">Instagram</a>!
                </p>
            </Row>
            <Row>
                <Col className="hobbyImages" sm={12} md={8}>
                    <ReactPlayer url="https://youtu.be/OMAyOiLmnmY" width='100%' />
                </Col>
                <Col className="hobbyImages" sm={12} md={4}>
                    <Image src={require("../images/latte.jpg")} fluid />
                </Col>
            </Row>
        </Container>
    )
}

export default Hobbies