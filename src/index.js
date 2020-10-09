import React from 'react'
import ReactDOM from 'react-dom'
import './app.css'
import html5 from './img/html_logo.png'
import react_logo from './img/react_logo.png'
import css_logo from './img/css_logo.png'
import asa from './img/asabeneh.jpg'


const userDetail = {
  firstName : 'ASABENEH',
  lastName : 'YETAYEH',
  profession : 'Senior Developer',
  country : 'Finland',
  skills : [
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
  ],
  date : 'October, 9 2020'
}

/* ------- FRONT END IMAGE -----*/
const Heading = () => (
  <div className = "header">
    <h2 className = 'head'>Front End Technologies</h2>
    <div className = 'logo'>
      <img src = {css_logo} alt = ''/>
      <img src = {react_logo} alt = '' />
      <img src = {html5} alt = ''/>
    </div>
  </div>
)

/* ------- USER CARD -----*/

const listFormatted = userDetail.skills.map( skill => <li>{skill}</li>)

const UserCard = () => (
  <div className = 'userCard'>
    <div className = 'userInfo'>
      <img className= 'userImage' src = {asa} alt = ''/>
      <h3 className = 'username'>{userDetail.firstName} {userDetail.lastName}</h3>
      <small>{userDetail.profession}, {userDetail.country}</small>
      <div>
        <h3>SKILL</h3>
        <ul className = 'lists'>{listFormatted}</ul>
      </div>
      <small> Joined on {userDetail.date}</small>
    </div>
  </div>
)

/* ------- SUBSCRIPTION FORM -----*/

const Forms = () => (
  <div className = "subscribe">
    <h2>SUBSCRIBE</h2>
    <p>Sign up with your email address to reaceive news and updates</p>
    <div className = "input">
      <input placeholder = "First name"/>
      <input placeholder = "Last name"/>
      <input placeholder = "Email"/>
    </div>
    <button>Subscribe</button>
  </div>
)

const hexadecimal = () => {
  let str = '0123456789abcdef'
  let color = ''

  for ( let i = 0; i < 6; i++){
    let random = Math.floor(Math.random() * str.length );
    color += str[random]
  }
  return '#' + color
} 



const Hexadecimal = () => (
  <ul className = 'hexa'>
    <li id = "#518cef">#518cef</li>
    <li id = "#3b10c4">#3b10c4</li>
    <li id = "#9aede6">#9aede6</li>
    <li id = "#8ee763">#8ee763</li>
    <li id = "#a30dd0">#a30dd0</li>
  </ul>
)

let firstColor = '#518cef'
const first = document.getElementById('#518cef');


while (firstColor !== hexadecimal() ){
    first.style.backgroundColor = "#518cef"
  }



const App = () => (
  <div>
    <Heading/>
    <UserCard/>
    <Forms/>
    <Hexadecimal/>
  </div>
)



const rootElement = document.getElementById('root')
ReactDOM.render( <App/>,rootElement)