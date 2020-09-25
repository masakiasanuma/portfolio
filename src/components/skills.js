import React from 'react'
import { Container, Row, Col, Image } from 'react-bootstrap' 

const Skills = () => {
    return (
        <Container>
            <div className="entry">
                <Row>
                    <Col xs={12} sm={4} md={3}><h4 className="skillLevel">Proficient: </h4></Col>
                    <Col xs={12} sm={8} md={9}>
                        <i title="Java" className="skillIcon devicon-java-plain colored" />
                        <i title="Javascript" className="skillIcon devicon-javascript-plain colored" />
                        <i title="Docker" className="skillIcon devicon-docker-plain colored" />
                        <i title="HTML5" className="skillIcon devicon-html5-plain colored" />
                        <i title="CSS3" className="skillIcon devicon-css3-plain colored" />
                        <i title="React.js" className="skillIcon devicon-react-original colored" />
                        <i title="Node.js" className="skillIcon devicon-nodejs-plain colored" />
                        <i title="Express.js" className="skillIcon devicon-express-original colored" />
                        <i title="MongoDB" className="skillIcon devicon-mongodb-plain colored" />
                        <i title="MySQL" className="skillIcon devicon-mysql-plain colored" />
                        <i title="Git" className="skillIcon devicon-git-plain colored" />
                        <i title="Ubuntu" className="skillIcon devicon-ubuntu-plain colored" />
                        <Image title="PowerShell" className="skillIcon imageIcon" src={require("../images/powershell.jpg")} />
                        <Image title="Microsoft SQL Server" className="skillIcon imageIcon" src={require("../images/mssql.png")} />
                        <Image title="SQL Change Automation" className="skillIcon imageIcon" src={require("../images/SCA.png")} />
                    </Col>
                </Row>
            </div>
            <div className="entry">
                <Row>
                    <Col xs={12} sm={4} md={3}><h4 className="skillLevel">Familiar: </h4></Col>
                    <Col xs={12} sm={8} md={9}>
                        <i title="C" className="skillIcon devicon-c-plain colored" />
                        <i title="Python" className="skillIcon devicon-python-plain colored" />
                        <i title="Bootstrap" className="skillIcon devicon-bootstrap-plain colored" />
                        <i title="jQuery" className="skillIcon devicon-jquery-plain colored" />
                    </Col>
                </Row>
            </div>
        </Container>
    )
}

export default Skills