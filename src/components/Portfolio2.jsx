import React, { Component } from 'react'
import './styles/Portfolio.css'
import FilterButtons from './FilterButtons'




class Portfolio2 extends Component {
    constructor(props) {
        super(props);

        this.state = {
            show: false,
            title: 'Click Below To Show Projects',
            folder: 'https://i.imgur.com/eThEl7g.png',
            hide: 'https://i.imgur.com/rrtXd1f.png',
            current: false,
            completed: false,
            all: true,
            projects: [
                {
                    id: 1,
                    title: 'Korean Menu',
                    description: 'This is a Korean restaurant menu that is responsive for both desktop and mobile layouts in which I managed to implement CSS, JavaScript, and HTML. This project helped me learn and practice version control',
                    href: 'https://github.com/andrewjkim745/project-1',
                    image: 'https://media.giphy.com/media/U78QMghyDQ1c6H6UbZ/giphy.gif',
                    languages: ['https://i.imgur.com/HRz4CW3.png',
                     'https://i.imgur.com/nT545Wr.png',
                     'https://i.imgur.com/ShzYJGK.png'] 


                },
                {
                    id: 2,
                    title: 'Movie Application',
                    description: 'This website was created using React and both a database that I built (a Mock API) and a third party API (themoviedb.org). The purpose of the website is to be an open source application that displays general movie info and images. It displays a widget at the top of the home directory that displays the most popular movie at the moment based on a popularity data point, and the average user rating. It also implements React Router which is used to link to a different page where you can create your own personal movie card.',
                    href: 'https://github.com/andrewjkim745/Movie-Application',
                    image: 'https://media.giphy.com/media/KDami0r5MKZ6mAOEw0/giphy.gif',
                    languages: ['https://i.imgur.com/HRz4CW3.png',
                     'https://i.imgur.com/nT545Wr.png',
                     'https://i.imgur.com/ShzYJGK.png',
                     'https://i.imgur.com/cyQoj2h.png',
                     'https://i.imgur.com/z7JQPpV.png'] 
                },
                {
                    id: 3,
                    title: 'Open-Fridge',
                    description: 'This application was aimed at being a quick efficient way to grab a recipe for users. It includes search features, a carousel, expand drop down menus, state practice, and more. This project was special because it was my second project working in a group, where we practiced managing and merging branches together, while also stressing version control. Our group also worked with a team of UX designers whom created a mockup design for us to follow while building the application.',
                    href: 'https://github.com/andrewjkim745/open-fridge',
                    image: 'https://media.giphy.com/media/J2TtO1RVadTTSvjALK/giphy.gif',
                    languages: ['https://i.imgur.com/HRz4CW3.png',
                     'https://i.imgur.com/cyQoj2h.png',
                     'https://i.imgur.com/nT545Wr.png',
                     'https://i.imgur.com/ShzYJGK.png'] 
                },
                {
                    id: 4,
                    title: 'Raddit',
                    description: 'This is a website inspired by Reddit in which I implemented CRUD and successfully linked up front end and backend with the help of Rails and React. It also has Dark Mode! This is my first solo fullstack project and certainly not my last!',
                    href: 'https://github.com/andrewjkim745/Community',
                    image: 'https://media.giphy.com/media/YrqMH8JJwrapudMZOS/giphy.gif',
                    languages: ['https://i.imgur.com/HRz4CW3.png',
                     'https://i.imgur.com/nT545Wr.png',
                     'https://i.imgur.com/ShzYJGK.png',
                     'https://i.imgur.com/JPNwGUY.png',
                     'https://i.imgur.com/cyQoj2h.png'] 
                }
            ],
            currentProjects: [
                {
                    id: 1,
                    title: 'MyGamelist',
                    description: 'My second Full Stack application that has fully functional CRUD and fully functional user authentication. Built with React for the Front-end and Ruby on Rails for the Back-end, the site was designed to help me practice making CRUD applications with the goal of learning something new in implementing User Authentication for the first time. Currently the styling is minimalistic and is something I want to work on more, but the site itself is mobile-responsive with responsive images. I also want to add a user rating feature and a comments section for games posted in the future.',
                    href: 'https://github.com/andrewjkim745/mygamelist_frontend',
                    image: 'https://media.giphy.com/media/h4UAO9SBns34CFU2wb/giphy.gif',
                    languages: ['https://i.imgur.com/HRz4CW3.png',
                     'https://i.imgur.com/nT545Wr.png',
                     'https://i.imgur.com/ShzYJGK.png',
                     'https://i.imgur.com/JPNwGUY.png',
                     'https://i.imgur.com/cyQoj2h.png'] 
                },
                {
                    id: 2,
                    title: 'Fusion Wireless clone',
                    description: 'A static website that is a clone of a company made website (fusionwireless.com) in which the goal was to collaborate with another to make a professional looking website that matches business standards. Our goal was to show to businesses that we can code up to company standard and produce a final product from scratch. Currently only mobile responsive but implements the Google Maps Api and updating state components',
                    href: 'https://github.com/gdelv/fusionWireless',
                    site: 'fusionwireless.netlify.com',
                    image: 'https://media.giphy.com/media/ZFWUU9cRnPVhaiNW1d/giphy.gif',
                    languages:['https://i.imgur.com/HRz4CW3.png',
                     'https://i.imgur.com/nT545Wr.png',
                     'https://i.imgur.com/ShzYJGK.png',
                     'https://i.imgur.com/cyQoj2h.png'],
                    
                },
                {
                    id: 3,
                    title: 'Nike Jordan Clone',
                    description: 'A fully cloned Nike Jordan website built from scratch with our own code. The goal was to collaborate and create a company standard website once again to show businesses that we are approaching that level of knowledge. As of now it is a static website that implements cool ternary logic for the navigation bar that changes class and state based on window height. It is made to look almost identical to the nike jordan website. Currently it is only mobile responsive and only the landing page is finished, but the backend is fully setup and we will have cart implementation and a shoe detail page in the future.',
                    href: 'https://github.com/gdelv/jordanFrontend',
                    image: 'https://media.giphy.com/media/Jt5wIjBN8UGtpUtxbv/giphy.gif',
                    languages: [
                    'https://i.imgur.com/HRz4CW3.png',
                     'https://i.imgur.com/nT545Wr.png',
                     'https://i.imgur.com/ShzYJGK.png',
                     'https://i.imgur.com/JPNwGUY.png',
                     'https://i.imgur.com/cyQoj2h.png'
                    ],
                    

                }
            ]

        }
    }

    renderimages = (project) => {

        const languageList = project.languages.map(language => {
            return <img className={language === 'https://i.imgur.com/HRz4CW3.png' ? 'js' : 'language' }src={language}></img>
        })

        return <div className='languages'>{languageList}</div>
    }

    renderComponents = () => {
        if (this.state.show) {
            return (
                <>

                    <h1 className='type-project'>Old Projects</h1>
                    {this.state.projects.map(project => {
                        return (
                            <div className='project-card' key={project.id}>
                                <h1>{project.title}</h1>
                                <img className='project-image' src={project.image} />
                                {this.renderimages(project)}
                                <div className='description'>
                                    <p className='paragraph'>{project.description}</p>
                                    <a className='View-Project' href={project.href}>View Project</a>
                                </div>
                            </div>
                        )
                    })}
                </>
            )
        }
    }
    renderNewComponents = () => {
        if (this.state.show) {
            return (
                <>
                    <div className='scroll'>
                        <a><span></span></a>
                        <p>Scroll</p>
                    </div>
                    <h1 className='type-project'>Current Projects</h1>
                    {this.state.currentProjects.map(project => {
                        return (
                            <div className='project-card' key={project.id}>
                                <h1>{project.title}</h1>
                                <img className='project-image' src={project.image} />
                                {this.renderimages(project)}
                                <div className='description'>
                                    <p className='paragraph'>{project.description}</p>
                                    <a className='View-Project' href={project.href}>View Project</a>
                                </div>
                            </div>
                        )
                    })}
                </>
            )
        }
    }

    renderAllComponents = () => {
        if (this.state.show) {
            return (
                <>
                    <div className={this.state.current || this.state.completed === true ? 'scroll' : 'displayNone'}>
                        <a><span></span></a>
                        <p>Scroll</p>
                    </div>
                    <h1 className={this.state.current === true ? 'type-project' : 'displayNone'}>Current Projects</h1>
                    {this.state.currentProjects.map(project => {
                        return (
                            <div className={this.state.current === true ? 'project-card' : 'displayNone'} key={project.id}>
                                <h1>{project.title}</h1>
                                <img className='project-image' src={project.image} />
                                {this.renderimages(project)}
                                <div className='description'>
                                    <p className='paragraph'>{project.description}</p>
                                    <a className='View-Project' href={project.href}>View Project</a>
                                </div>
                            </div>
                        )
                    })}
                    <h1 className={this.state.completed === true ? 'type-project' : 'displayNone'}>Old Projects</h1>
                    {this.state.projects.map(project => {
                        return (
                            <div className={this.state.completed === true ? 'project-card' : 'displayNone'} key={project.id}>
                                <h1>{project.title}</h1>
                                <img className='project-image' src={project.image} />
                                {this.renderimages(project)}
                                <div className='description'>
                                    <p className='paragraph'>{project.description}</p>
                                    <a className='View-Project' href={project.href}>View Project</a>
                                </div>
                            </div>
                        )
                    })}
                </>
            )
        }
    }

    currentClick = (event) => {
        if (this.state.current === false) {
            this.setState({
                current: true,
                all: false,
                completed: false
            }) 
        }
    }

    allClick = (event) => {
        if (this.state.all === false) {
            this.setState({
                current: false,
                all: true,
                completed: false
            })
        }
    }

    completedClick = (event) => {
        if (this.state.completed === false) {
            this.setState({
                current: false,
                all: false,
                completed: true
            })
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
                    <img className='hide' src={this.state.show === true ? this.state.hide : this.state.folder} onClick={this.onClick}></img>
                </div>
                <FilterButtons
                    className='buttons-container'
                    onClick={this.currentClick}
                    onClick2={this.completedClick}
                />
                {this.renderAllComponents()}


            </div>
        )
    }


}

export default Portfolio2;