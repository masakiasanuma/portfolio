import React from 'react'
import { Image, Button } from 'react-bootstrap' 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons'
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'
import { StickyContainer, Sticky } from 'react-sticky'

const Side = () => {
    return (
        <div>
            <Image className="profile" src={require("../images/profile.jpg")} fluid />
            <StickyContainer>
                <Sticky>
                    {({style}) => (
                        <div style={style}>
                            <h2 className="name"><span className="firstName">Masaki</span> Asanuma</h2>
                            <hr className="bar" />
                            <div className="center">
                                <h5><FontAwesomeIcon icon={faEnvelope} /> - masakiasanuma@outlook.com</h5>
                                <h5><FontAwesomeIcon icon={faPhone} /> - (310) 710-0790</h5>
                                <Button className="button" href="https://www.linkedin.com/in/masakiasanuma/" size="lg"><FontAwesomeIcon icon={faLinkedin} /></Button>
                                <Button className="button" href="https://github.com/Masasasaki" size="lg"><FontAwesomeIcon icon={faGithub} /></Button>
                            </div>
                        </div>
                    )}
                </Sticky>
                <div className="temp"> </div>
            </StickyContainer>
        </div>
    )
}

export default Side