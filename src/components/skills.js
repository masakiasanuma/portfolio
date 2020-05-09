import React from 'react'
import { Container, Row, Col } from 'react-bootstrap' 

const Skills = () => {
    return (
        <Container>
            <div className="entry">
                <Row>
                    <Col xs={12} sm={4} md={3}><h4 className="skillLevel">Proficient: </h4></Col>
                    <Col xs={12} sm={8} md={9}>
                        <i title="Java" class="skillIcon devicon-java-plain colored" />
                        <i title="Javascript" class="skillIcon devicon-javascript-plain colored" />
                        <i title="HTML5" class="skillIcon devicon-html5-plain colored" />
                        <i title="C" class="skillIcon devicon-c-plain colored" />
                        <i title="React.js" class="skillIcon devicon-react-original colored" />
                        <i title="Node.js" class="skillIcon devicon-nodejs-plain colored" />
                        <i title="Express.js" class="skillIcon devicon-express-original colored" />
                        <i title="MongoDB" class="skillIcon devicon-mongodb-plain colored" />
                        <i title="Git" class="skillIcon devicon-git-plain colored" />
                        <i title="Ubuntu" class="skillIcon devicon-ubuntu-plain colored" />
                        <i title="Windows" class="skillIcon devicon-windows8-original colored" />
                    </Col>
                </Row>
            </div>
            <div className="entry">
                <Row>
                    <Col xs={12} sm={4} md={3}><h4 className="skillLevel">Familiar: </h4></Col>
                    <Col xs={12} sm={8} md={9}>
                        <i title="CSS3" class="skillIcon devicon-css3-plain colored" />
                        <i title="Python" class="skillIcon devicon-python-plain colored" />
                        <i title="Bootstrap" class="skillIcon devicon-bootstrap-plain colored" />
                        <i title="jQuery" class="skillIcon devicon-jquery-plain colored" />
                        <i title="MacOS" class="skillIcon devicon-apple-original colored" />
                    </Col>
                </Row>
            </div>
        </Container>
    )
}

export default Skills