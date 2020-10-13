import React from 'react'
import ReactDOM from 'react-dom'
import './app.css'
import html5 from './img/html_logo.png'
import react_logo from './img/react_logo.png'
import css_logo from './img/css_logo.png'
import asa from './img/asabeneh.jpg'

const Logo = ({data: {
    heading,
    html,
    css,
    react
}
   }) => {
    return (
        <div className = "header">
            <h2 className = 'head'>{heading}</h2>
            <div className = 'logo'>
                <img src={html} alt=''/>
                <img src={css} alt=''/>
                <img src={react} alt=''/>
            </div>
        </div>
    )
}


const UserCard = ({ user: {
    firstName,
    lastName,
    image
},
    }) => {
    return (
        <div>
            <img className= 'userImage' src = {image} alt = ''/>
            <h3 className = 'username'>{firstName} {lastName}</h3>
        </div>
    )
}


const SkillList = ({list}) => {
    const TechList = list.map( skill => <li key={skill}>{skill}</li>)
    return TechList;
}


const User = ({ userDetails: {
    profession,
    country,
    skillsHeading,
    joined,
    date : {
        month,
        day,
        year
    }
},
    }) => {
    const user = {
        firstName : 'ASABENEH',
        lastName : 'YETAYEH', 
        image: asa,
    }

    const skills =  [
        'HTML', 
        'CSS', 
        'Sass', 
        'JS', 
        'React', 
        'Redux', 
        'Node', 
        'MongoDB', 
        'MYSQL', 
        'D3.JS', 
        'Gatsby', 
        'Docker', 
        'Heroku', 
        'Git',
        'Python',
        'Flask',
        'Django', 
        'NumPy', 
        'Pandas', 
        'Data Analysis'
        ]

    // const list = skills.map( skill => <li key={skill}>{skill}</li>)
    
    return ( 
        <div className = 'userCard'>
            <div className = 'userInfo'>
                <UserCard user = {user}/>
                <small>{profession}, {country}</small>
                <div>
                    <h3>{skillsHeading}</h3>
                    <ul className = 'lists'><SkillList list = {skills} /></ul>
                </div>
                <small>{joined} {month} {day}, {year}</small>
            </div>
        </div>
    )
}

const Input = ({placeholder}) => {
    return (
        <input placeholder = {placeholder}/>
    )
}

const Button = ({button}) => {
    return (
    <button>{button}</button>
    )
}

const Subscribe = ({heading, info }) => {
    const content = 'Subscribe'
    const place1 = 'First name'
    const place2 = 'Last name'
    const place3 = 'Email'
    return (
        <div className = "subscribe">
            <h2>{heading}</h2>
            <p>{info}</p>
            <div className = "input">
                <Input placeholder= {place1}/>
                <Input placeholder= {place2}/>
                <Input placeholder= {place3}/>
            </div>
            <Button button = {content}/>
        </div>
    )
}

const App = () => {
    const data = {
        heading : 'Front End Development',
        html : html5,
        css: css_logo,
        react : react_logo
    }

    const time = new Date();
    
        // const skillsFormatted = skills.map( skill => <li key ='skill'>{skill}</li>)
        const month = [
            'January',
            'Febuary',
            'March',
            'April',
            'May', 
            'June',
            'July', 
            'August', 
            'September',
            'October',
            'November',
            'December'
        ]

    const userDetails = {
        profession: 'Senior Developer',
        country: 'Finland', 
        skillsHeading: 'SKILLS',
        // skilll: skillsFormatted,
        joined: 'Joined',
        date: { 
            month: month[time.getMonth()].slice(0,3),
            day: time.getDay(),
            year: time.getFullYear()
        }
    }

    const heading = 'Subscribe'
    const info = 'Sign up with your Email Address to receive news and update'

    return (
        <div>
            <Logo data = {data}/>
            <User userDetails = {userDetails}/>
            <Subscribe heading={heading} info={info}/>
        </div>
    )
}

const rootElement = document.getElementById('root')
ReactDOM.render(<App/>, rootElement)




















