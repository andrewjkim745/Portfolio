import React from 'react'
import './styles/About.css'
import Typing from 'react-typing-animation'


class About extends React.Component {
    state = {
        finished: false
    }

    renderComponents = () => {
        return (
            <div>
                <img className='pic' src='https://i.imgur.com/zNqZ3oU.jpg'/>
                <div className='first-box'>
                    <h3>
                        My Journey as a Developer

                    </h3>
                    <div className='paragraph'>
                        <p >
                            I started using computers at a very young age and was always curious about the nuances of the web. About a year ago I decided to finally pursue my interest in computers and learn in a structured environment. I attended a 12 week software engineering immersive at General Assembly a rigorous bootcamp which tested my ability to learn, adapt, and deal with stressful situations.

                            
                        </p>
                        <p>
                        Although the bootcamp was tough and very time consuming it helped me realize that I had finally found something that I could see myself doing for the rest of my life. I am still passionate to this day and am always willing to learn and face many different challenges.
                        </p>
                    </div>
                </div>

                <div className='second-box'>
                    <h3>
                        Programming
                    </h3>
                    <div className='paragraph'>
                        <p>
                            I became passionate about Software Engineering/Web Development after attending school at Stony Brook University for 4 years as an economics major. I spent a lot of time aimlessly working not knowing what I truly could see myself doing for the rest of my life until of course I stumbled upon programming. After realizing that I could make all these applications/websites that I use daily myself, I embarked on my journey to learn how to code!
                        </p>
                        <p>
                            For about a month I studied alogrithims and Web Development in Ruby and Javascript until a friend recommended me to a bootcamp. It was a perfect environment for me in which I made many deep connections and learned so much about myself and this field. I can confidently say that I have knowledge in NodeJs, ExpressJS, jQuery, React, React Native, Bootstrap, SQL, Ruby on Rails, HTML, CSS, and more! I still enjoy coding to this day and spend an average of 7-10 hours each day working on my own passion projects and learning new things! Most recently I learned how to implement user authentication with Rails and I'm still hungry for more.
                        </p>
                    </div>
                </div>
            </div>
        )
    }
    render() {
        return (
            <div className='about-container'>
                <div className='first-container'>
                    <Typing speed={10} >
                        <h2>
                            Hi there!
                        <br></br>
                            If you want to learn more about me 
                        <br></br>
                            Look no further!
                    </h2>
                    </Typing>


                </div>
                <div className='second-container'>
                    {this.renderComponents()}

                </div>
            </div>
        )
    }
}

export default About