import React from 'react'
import { Container, Row, Col } from 'react-bootstrap' 

const Skills = () => {
    return (
        <Container>
            <div className="entry">
                <Row>
                    <Col xs={12} sm={4} md={3}><h4 className="skillLevel">Proficient: </h4></Col>
                    <Col xs={12} sm={8} md={9}>
                        <i class="skillIcon devicon-java-plain colored" />
                        <i class="skillIcon devicon-javascript-plain colored" />
                        <i class="skillIcon devicon-html5-plain colored" />
                        <i class="skillIcon devicon-c-plain colored" />
                        <i class="skillIcon devicon-react-original colored" />
                        <i class="skillIcon devicon-nodejs-plain colored" />
                        <i class="skillIcon devicon-express-original colored" />
                        <i class="skillIcon devicon-mongodb-plain colored" />
                        <i class="skillIcon devicon-git-plain colored" />
                        <i class="skillIcon devicon-ubuntu-plain colored" />
                        <i class="skillIcon devicon-windows8-original colored" />
                    </Col>
                </Row>
            </div>
            <div className="entry">
                <Row>
                    <Col xs={12} sm={4} md={3}><h4 className="skillLevel">Familiar: </h4></Col>
                    <Col xs={12} sm={8} md={9}>
                        <i class="skillIcon devicon-css3-plain colored" />
                        <i class="skillIcon devicon-python-plain colored" />
                        <i class="skillIcon devicon-bootstrap-plain colored" />
                        <i class="skillIcon devicon-jquery-plain colored" />
                        <i class="skillIcon devicon-apple-original colored" />
                    </Col>
                </Row>
            </div>
        </Container>
    )
}

export default Skills