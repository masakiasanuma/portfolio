import React from 'react'
import ReactPlayer from 'react-player'
import { Container, Row } from 'react-bootstrap' 

const Hobbies = () => {
    return (
        <Container>
            <Row className="hobbyDesc">
                <p>
                    In my free time, you can find me playing the guitar, practicing latte art, or taking way too many naps.
                    I also post fingerstyle covers of various Japanese songs on <a href="https://www.youtube.com/channel/UCth0pz1bQjWFVoX422pMypQ" target="_blank" rel="noopener noreferrer">Youtube</a> and <a href="https://www.instagram.com/masachanmusic/" target="_blank" rel="noopener noreferrer">Instagram</a>!
                </p>
            </Row>
            <Row className="video">
                <ReactPlayer url="https://www.youtube.com/watch?v=bDJS5U82DhI" />
            </Row>
        </Container>
    )
}

export default Hobbies