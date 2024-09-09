import React from 'react'
import './About.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import profile_img from '../../assets/aboutprofile.png'

const About = () => {
  return (
    <div id='about' className='about'>
        <div className="about-title">
            <h1>About Me</h1>
            <img src={theme_pattern} alt="" />
        </div>
        <div className="about-section">
            <div className="about-left">
                <img src={profile_img} alt="" />
            </div>
            <div className="about-right">
                <div className="about-para">
                    <p>Hello! I'm Keerthan, a passionate Computer Science engineering student in my third year. </p>
                    <p>I'm deeply interested in generative AI and continuously explore the latest advancements. Open to work opportunities, I'm eager to leverage my skills and knowledge to create impactful solutions. Let's connect and collaborate on exciting projects!</p>
                </div>
                <div className="about-skills">
                    <div className="about-skill"><p>HTML & CSS</p><hr style={{width:"70%"}} /></div>
                    <div className="about-skill"><p>React JS</p><hr style={{width:"50%"}} /></div>
                    <div className="about-skill"><p>Java</p><hr style={{width:"60%"}} /></div>
                    <div className="about-skill"><p>Python</p><hr style={{width:"40%"}} /></div>
                    <div className="about-skill"><p>Git</p><hr style={{width:"70%"}} /></div>
                </div>
            </div>
        </div>
        {/* <div className="about-achivements">
            <div className="about-achievements">
                <h1>10+</h1>
                <p>YEARS OF EXPERIRENCE</p>
            </div>
            <hr />
            <div className="about-achievements">
                <h1>90+</h1>
                <p>PROJECT COMPLETED</p>
            </div>
            <hr />
            <div className="about-achievements">
                <h1>15+</h1>
                <p>HAPPY CLIENTS</p>
            </div>
        </div> */}

    </div>
  )
}

export default About