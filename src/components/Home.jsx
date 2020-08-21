import React from 'react'
import './styles/Home.css'
import TextLoop from 'react-text-loop'



const Home = () => {
    return (
        <div className= 'landing-page-container'>
            <h1>
                Hello World.
                <br></br>
                My name is Andrew Kim
                <br></br>
                <TextLoop children={["I am a FullStack Developer", "I am a Gaming Addict", "I am a Dog Lover", "I am a Basketball Fanatic"]} />
                <br></br>
                from Long Island
            </h1>
            <div className='contact-container'>
                <p>Contact Me
                    <br></br>
                     Check out the code for this page</p>
                <div className='icons'>
                    <a className='linkedin-link' href='https://www.linkedin.com/in/andrew-kim-0705/'>
                        <img className='linkedin' src='https://i.imgur.com/PGt3ToU.png'></img>
                    </a>
                    <a className='github-link' href='https://github.com/andrewjkim745'>
                        <img className='github' src='https://i.imgur.com/vLtlcYc.png'></img>
                    </a>
                    <a className='mail-link' href='mailto:andrewk745@gmail.com?subject=Business proposal'>
                        <img className='mail' src='https://i.imgur.com/yU5hoyX.png'></img>
                    </a>
                </div>
            </div>

        </div>

        
    )
}

export default Home


