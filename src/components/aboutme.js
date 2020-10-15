import React from 'react'
import { Jumbotron } from 'react-bootstrap' 

const AboutMe = () => {
    const jumboStyle = {
        borderRadius: '50px',
        border: 'black',
        padding: '40px',
        fontWeight: '300',
        fontSize: '25px',
        backgroundColor: 'navy',
        color: 'white',
        boxShadow: '0 30px 70px rgba(46, 179, 240, 0.7)',
    }

    return (
        <div>
            <Jumbotron style={jumboStyle}>
                <h1 className="headerJumbo neon"><span className="flicker-fast">W</span>e<span className="flicker-slow">lc</span>o<span className="flicker-fast">m</span>e<span className="flicker-slow">!!</span><span role="img" aria-label="wave">👋</span></h1>
                <hr className="my-2" />
                <p className="neon">
                    I am a third-year Computer Science undergraduate student at 
                    Georgia Tech interested in exploring the different fields of software development. 
                    I am a fingerstyle guitarist, a coffee enthusiast, and a lover of
                    anything cyberpunk related! Scroll down for more info <span role="img" aria-label="down">👇</span>
                </p>
            </Jumbotron>
        </div>
    )
}

export default AboutMe