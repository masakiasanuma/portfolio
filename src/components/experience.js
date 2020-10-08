import React from 'react'
import { Image, Container, Row, Col } from 'react-bootstrap' 

const Experience = () => {
    const containerStyle = {
        padding: '10px 0px 10px 0px',
    }

    return (
        <Container style={containerStyle}>
            <div className="entry">
                <Row>
                    <Col xs={5} sm={4} md={2}>
                        <Image className="logo" src={require("../images/KPMG.jpg")} fluid />
                    </Col>
                    <Col className="adjust" xs={7} sm={8} md={10} fluid>
                        <h3>Software Engineering Intern <span className="date">Jan 2021 - Jul 2021</span></h3>
                        <h4><span className="light"><a href="https://home.kpmg/jp/en/home/about/kit.html" target="_blank" rel="noopener noreferrer">KPMG Ignition Tokyo</a></span> <span className="date">Tokyo, Japan</span></h4>
                    </Col>
                </Row>
                <Row className="desc">
                    <p>
                        Incoming intern.
                    </p>
                </Row>
            </div>
            <div className="entry">
                <Row>
                    <Col xs={5} sm={4} md={2}>
                        <Image className="logo" src={require("../images/ukkkggg.jpg")} fluid />
                    </Col>
                    <Col className="adjust" xs={7} sm={8} md={10}>
                        <h3>Software Engineering Intern <span className="date">Sep 2020 - Dec 2020</span></h3>
                        <h4><span className="light"><a href="https://www.ukg.com/" target="_blank" rel="noopener noreferrer">UKG (Ultimate Kronos Group)</a></span> <span className="date">Weston, FL</span></h4>
                    </Col>
                </Row>
                <Row className="desc">
                    <p>
                        Current intern in the Data Warehouse team.
                    </p>
                </Row>
            </div>
            <div className="entry">
                <Row>
                    <Col xs={5} sm={4} md={2}>
                        <Image className="logo" src={require("../images/CoC.jpeg")} fluid />
                    </Col>
                    <Col className="adjust" xs={7} sm={8} md={10}>
                        <h3>IT Support Assistant <span className="date">Oct 2018 - Apr 2020</span></h3>
                        <h4><span className="light"><a href="https://support.cc.gatech.edu/" target="_blank" rel="noopener noreferrer">Technology Services Organization</a></span> <span className="date">Atlanta, GA</span></h4>
                    </Col>
                </Row>
                <Row className="desc">
                    <p>
                        I assisted in resolving over 200 tickets of hardware/software issues for the students, faculty, and staff of the College of Computing.
                        I worked closely with other assistants and IT Support Professionals to document the troubleshooting process of common issues.
                    </p>
                </Row>
            </div>
            <div className="entry">
                <Row>
                    <Col xs={5} sm={4} md={2}>
                        <Image className="logo" src={require("../images/jubilate.jpg")} fluid />
                    </Col>
                    <Col className="adjust" xs={7} sm={8} md={10}>
                        <h3>Computer Science Teacher <span className="date">May 2019 - Aug 2019</span></h3>
                        <h4><span className="light"><a href="https://jubilateacademy.com/" target="_blank" rel="noopener noreferrer">Jubilate Academy</a></span> <span className="date">Torrance, CA</span></h4>
                    </Col>
                </Row>
                <Row className="desc">
                    <p>
                        I created and organized the first computer science course offered at Jubilate Academy aimed for middle and high school students.
                        The course was separated into two levels: one taught in Scratch for complete beginners and one taught in Java for those with
                        a bit of experience.
                    </p>
                </Row>
            </div>
            <div className="entry">
                <Row>
                    <Col xs={5} sm={4} md={2}>
                        <Image className="logo" src={require("../images/torrance.png")} fluid />
                    </Col>
                    <Col className="adjust" xs={7} sm={8} md={10}>
                        <h3>AP Computer Science A Tutor <span className="date">May 2019 - Aug 2019</span></h3>
                        <h4><span className="light">A Plus Academy</span> <span className="date">Torrance, CA</span></h4>
                    </Col>
                </Row>
                <Row className="desc">
                    <p>
                        I conducted 1-on-1 tutoring with high school students to prepare them for the <a href="https://apcentral.collegeboard.org/courses/ap-computer-science-a/course?course=ap-computer-science-a" target="_blank" rel="noopener noreferrer">AP Computer Science A </a> 
                        course/test. I created over 100 customized coding problems on <a href="https://repl.it/" target="_blank" rel="noopener noreferrer">Repl.it</a> for students to gain hands-on experience 
                        and instant feedback on their solutions.
                    </p>
                </Row>
            </div>
            <div className="entry">
                <Row>
                    <Col xs={5} sm={4} md={2}>
                        <Image className="logo" src={require("../images/boeing.jpg")} fluid />
                    </Col>
                    <Col className="adjust" xs={7} sm={8} md={10}>
                        <h3>Software Engineering Intern <span className="date">Jun 2017 - Aug 2017</span></h3>
                        <h4><span className="light"><a href="https://www.boeing.com/space/boeing-satellite-family/" target="_blank" rel="noopener noreferrer">The Boeing Company</a></span> <span className="date">El Segundo, CA</span></h4>
                    </Col>
                </Row>
                <Row className="desc">
                    <p>
                        I worked in the Electronics Products department with two other interns. Under the guidance of a mentor, we designed and 
                        developed a Python application that allows employees to easily navigate through the EPAR (Electronic Product Assurance Record) database. 
                        As I was not familiar with the language, I learned the basics of Python, Tkinter, and SQL in 2 weeks to swiftly implement and deploy the product.
                    </p>
                </Row>
            </div>
        </Container>
    )
}

export default Experience