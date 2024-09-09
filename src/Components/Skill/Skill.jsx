import React from 'react';
import './Skill.css';
import git from '../../assets/git.png';
import nodejs from '../../assets/nodejs.png';
import python from '../../assets/python.png';
import mongo from '../../assets/mongo.png';
import cplus from '../../assets/cplus.png';
import react from '../../assets/react.png';
import java from '../../assets/java.png';
import html from '../../assets/html.png';
import docker from '../../assets/docker.png';
import css from '../../assets/css.png';

const Skill = () => {
  const images = [
    git, python, react, css, cplus, mongo, docker, html, java, nodejs
  ];

  return (
    <div className='skill-container'>
      <div className='skill-slider'>
        {images.concat(images).map((image, index) => (
          <img key={index} src={image} alt={`Skill ${index + 1}`} />
        ))}
      </div>
    </div>
  );
}

export default Skill;
