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
        color: 'white'
    }

    return (
        <div>
            <Jumbotron style={jumboStyle}>
                <h1 className="header">Hey there! <span role="img" aria-label="wave">👋</span></h1>
                <hr className="my-2" />
                <p>
                    I am a third-year Computer Science undergraduate student at 
                    Georgia Tech interested in full-stack web development. 
                    I am a fingerstyle guitarist, a coffee enthusiast, and a lover of
                    anything cyberpunk related!
                </p>
            </Jumbotron>
        </div>
    )
}

export default AboutMe