import React from 'react'
import './styles/Portfolio.css'



const Portfolio = () => {
    return (
        <div className='portfolio-container'>
            <div className='top-container'>
                <h1>Here are my Projects!</h1>
                <p>Contact me at andrewk745@gmail.com</p>

            </div>
            <div className='project-1-container'>
                <main className='project-1'>
                    <div className='gif-container'>
                        <img className='gif1' src='https://media.giphy.com/media/U78QMghyDQ1c6H6UbZ/giphy.gif'></img>
                    </div>

                </main>
                <div>
                    <h1>Korean Menu Website</h1>
                    <div>
                        <img className='js' src='https://i.imgur.com/bQCEpUI.png'></img>
                        <img src='https://i.imgur.com/nT545Wr.png'></img>
                        <img src='https://i.imgur.com/ShzYJGK.png'></img>
                    </div>
                    <div className='project-1-description'>
                        <p>This is a Korean restaurant menu that is responsive for both desktop and mobile layouts in which I managed to implement CSS, JavaScript, and HTML. This project helped me learn and practice version control</p>
                    </div>
                    <div className='buttons'>
                        <a className='button' href='https://github.com/andrewjkim745/project-1'>
                            <button>View Project</button>
                        </a>
                    </div>
                </div>
            </div>
            <div className='project-1-container'>
                <main className='project-1'>
                    <div className='gif-container'>
                        <img className='gif2' src='https://media.giphy.com/media/KDami0r5MKZ6mAOEw0/giphy.gif'></img>
                    </div>

                </main>
                <div>
                    <h1>Movie Application</h1>
                    <div>
                        <img className='js' src='https://i.imgur.com/bQCEpUI.png'></img>
                        <img className='sql' src='https://i.imgur.com/z7JQPpV.png'></img>
                        <img src='https://i.imgur.com/cyQoj2h.png'></img>
                        <img src='https://i.imgur.com/nT545Wr.png'></img>
                        <img src='https://i.imgur.com/ShzYJGK.png'></img>
                    </div>
                    <div className='project-2-description'>
                        <p>This website was created using React and both a database that I built (a Mock API) and a third party API (themoviedb.org). The purpose of the website is to be an open source application that displays general movie info and images. It displays a widget at the top of the home directory that displays the most popular movie at the moment based on a popularity data point, and the average user rating. It also implements React Router which is used to link to a different page where you can create your own personal movie card.</p>
                    </div>
                    <div className='buttons'>
                        <a className='button' href='https://github.com/andrewjkim745/Movie-Application'>
                            <button>View Project</button>
                        </a>
                    </div>
                </div>
            </div>
            <div className='project-1-container'>
                <main className='project-1'>
                    <div className='gif-container'>
                        <img className='gif3' src='https://media.giphy.com/media/J2TtO1RVadTTSvjALK/giphy.gif'></img>
                    </div>

                </main>
                <div>
                    <h1>Recipe Application</h1>
                    <div>
                        <img className='js' src='https://i.imgur.com/bQCEpUI.png'></img>
                        <img src='https://i.imgur.com/cyQoj2h.png'></img>
                        <img src='https://i.imgur.com/nT545Wr.png'></img>
                        <img src='https://i.imgur.com/ShzYJGK.png'></img>
                    </div>
                    <div className='project-1-description'>
                        <p>This application was aimed at being a quick efficient way to grab a recipe for users. It includes search features, a carousel, expand drop down menus, state practice, and more. This project was special because it was my second project working in a group, where we practiced managing and merging branches together, while also stressing version control. Our group also worked with a team of UX designers whom created a mockup design for us to follow while building the application.</p>
                    </div>
                    <div className='buttons'>
                        <a className='button' href='https://github.com/andrewjkim745/open-fridge'>
                            <button>View Project</button>
                        </a>
                    </div>
                </div>
                
            </div>
            <div className='project-1-container'>
                <main className='project-1'>
                    <div className='gif-container'>
                        <img className='gif1' src='https://media.giphy.com/media/YrqMH8JJwrapudMZOS/giphy.gif'></img>
                    </div>

                </main>
                <div>
                    <h1>Raddit</h1>
                    <div>
                        <img className='js' src='https://i.imgur.com/bQCEpUI.png'></img>
                        <img src='https://i.imgur.com/nT545Wr.png'></img>
                        <img src='https://i.imgur.com/ShzYJGK.png'></img>
                        <img src='https://i.imgur.com/JPNwGUY.png'></img>
                        <img src='https://i.imgur.com/cyQoj2h.png'></img>
                    </div>
                    <div className='project-1-description'>
                        <p>This is a website inspired by Reddit in which I implemented CRUD and successfully linked up front end and backend with the help of Rails and React. It also has Dark Mode! This is my first solo fullstack project and certainly not my last!</p>
                    </div>
                    <div className='buttons'>
                        <a className='button' href='https://github.com/andrewjkim745/Community'>
                            <button>View Project</button>
                        </a>
                    </div>
                </div>
            </div>
            
        </div>


    )
}

export default Portfolio