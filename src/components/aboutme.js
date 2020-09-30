import React from 'react'
import { Jumbotron } from 'react-bootstrap' 

const AboutMe = () => {
    const jumboStyle = {
        borderRadius: '50px',
        border: 'black',
        padding: '40px',
        fontWeight: '300',
        fontSize: '25px',
        backgroundColor: '#6495ED',
        color: 'white',
        boxShadow: '5px 5px rgba(0, 98, 90, 0.4), 10px 10px rgba(0, 98, 90, 0.3), 15px 15px rgba(0, 98, 90, 0.2), 20px 20px rgba(0, 98, 90, 0.1), 25px 25px rgba(0, 98, 90, 0.05)',
    }

    return (
        <div>
            <Jumbotron style={jumboStyle}>
                <h1 className="header">Hey there! <span role="img" aria-label="wave">👋</span></h1>
                <hr className="my-2" />
                <p>
                    I am a third-year Computer Science undergraduate student at 
                    Georgia Tech interested in full-stack web development and CI/CD pipelines. 
                    I am a fingerstyle guitarist, a coffee enthusiast, and a lover of
                    anything cyberpunk related!
                </p>
            </Jumbotron>
        </div>
    )
}

export default AboutMe