import React, { Component } from 'react'
import './styles/Portfolio.css'



class Portfolio2 extends Component {
    constructor(props) {
        super(props);




        this.state = {
            show: false,
            title: 'Click Below To Show Projects',
            folder: 'https://i.imgur.com/eThEl7g.png',
            hide: 'https://i.imgur.com/rrtXd1f.png',
            projects: [
                {
                    id: 1,
                    title: 'Korean Menu',
                    description: 'This is a Korean restaurant menu that is responsive for both desktop and mobile layouts in which I managed to implement CSS, JavaScript, and HTML. This project helped me learn and practice version control',
                    href: 'https://github.com/andrewjkim745/project-1',
                    image: 'https://media.giphy.com/media/U78QMghyDQ1c6H6UbZ/giphy.gif',
                    language1:'https://i.imgur.com/HRz4CW3.png',
                    language2: 'https://i.imgur.com/nT545Wr.png',
                    language3: 'https://i.imgur.com/ShzYJGK.png'


                },
                {
                    id: 2,
                    title: 'Movie Application',
                    description: 'This website was created using React and both a database that I built (a Mock API) and a third party API (themoviedb.org). The purpose of the website is to be an open source application that displays general movie info and images. It displays a widget at the top of the home directory that displays the most popular movie at the moment based on a popularity data point, and the average user rating. It also implements React Router which is used to link to a different page where you can create your own personal movie card.',
                    href: 'https://github.com/andrewjkim745/Movie-Application',
                    image: 'https://media.giphy.com/media/KDami0r5MKZ6mAOEw0/giphy.gif',
                    language1: 'https://i.imgur.com/HRz4CW3.png',
                    language2: 'https://i.imgur.com/nT545Wr.png',
                    language3: 'https://i.imgur.com/ShzYJGK.png',
                    language4: 'https://i.imgur.com/cyQoj2h.png',
                    language5: 'https://i.imgur.com/z7JQPpV.png'
                },
                {
                    id: 3,
                    title: 'Open-Fridge',
                    description: 'This application was aimed at being a quick efficient way to grab a recipe for users. It includes search features, a carousel, expand drop down menus, state practice, and more. This project was special because it was my second project working in a group, where we practiced managing and merging branches together, while also stressing version control. Our group also worked with a team of UX designers whom created a mockup design for us to follow while building the application.',
                    href: 'https://github.com/andrewjkim745/open-fridge',
                    image: 'https://media.giphy.com/media/J2TtO1RVadTTSvjALK/giphy.gif',
                    language1: 'https://i.imgur.com/HRz4CW3.png',
                    language2: 'https://i.imgur.com/cyQoj2h.png',
                    language3: 'https://i.imgur.com/nT545Wr.png',
                    language4: 'https://i.imgur.com/ShzYJGK.png'
                },
                {
                    id: 4,
                    title: 'Raddit',
                    description: 'This is a website inspired by Reddit in which I implemented CRUD and successfully linked up front end and backend with the help of Rails and React. It also has Dark Mode! This is my first solo fullstack project and certainly not my last!',
                    href: 'https://github.com/andrewjkim745/Community',
                    image: 'https://media.giphy.com/media/YrqMH8JJwrapudMZOS/giphy.gif',
                    language1: 'https://i.imgur.com/HRz4CW3.png',
                    language2: 'https://i.imgur.com/nT545Wr.png',
                    language3: 'https://i.imgur.com/ShzYJGK.png',
                    language4: 'https://i.imgur.com/JPNwGUY.png',
                    language5: 'https://i.imgur.com/cyQoj2h.png'
                }
            ]

        }
    }



    renderComponents = () => {
        console.log('hello')
        if (this.state.show) {
            return (
                <>

                    {this.state.projects.map(project => {
                        return (
                            <div className='project-card' key={project.id}>
                                <h1>{project.title}</h1>
                                <img src={project.image} />
                                <div className='languages'>
                                    <img className={project.language1 === 'https://i.imgur.com/HRz4CW3.png' ? 'js' : ''} src={project.language1}></img>
                                    <img src={project.language2}></img>
                                    <img src={project.language3}></img>
                                    <img src={project.language4}></img>
                                    <img src={project.language5}></img>

                                </div>
                                <div className='description'>
                                    <p>{project.description}</p>
                                    <a className='View-Project' href={project.href}>View Project</a>
                                </div>
                                
                                
                                    
                                
                            </div>
                        )
                    })}
                </>




            )

        }
    }






    onClick = event => {
        if (this.state.show === false) {
            this.setState({
                show: true
            })
        } else if
            (this.state.show === true) {
            this.setState({
                show: false
            })
        }

        console.log(this.state.show)
    }


    render() {
        return (
            <div className='portfolio-container'>
                <div className='portfolio-title'>
                    <h1 >{this.state.show === false ? this.state.title : 'Click again to Hide'}</h1>
                    <img className='hide' src={this.state.show === true ? this.state.hide : ''} onClick={this.onClick}></img>
                    <img className='project-folder' src={this.state.show === false ? this.state.folder : ''} onClick={this.onClick}></img>
                </div>
                    {this.renderComponents()}
                

            </div>
        )
    }


}

export default Portfolio2;