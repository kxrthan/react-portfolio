import React, { useState } from 'react';
import './MyWork.css';
import theme_pattern from '../../assets/theme_pattern.svg';
import mywork_data from '../../assets/mywork_data';
import arrow_icon from '../../assets/arrow_icon.svg';

const MyWork = () => {
  const [visibleItems, setVisibleItems] = useState(6); // Initially show 3 items

  const handleShowMore = () => {
    setVisibleItems(prevVisibleItems => prevVisibleItems + 6); // Show 3 more items each time
  };

  return (
    <div id='work' className='mywork'>
        <div className="mywork-title">
            <h1>My Projects</h1>
            <img src={theme_pattern} alt="" />
        </div>
        <div className="mywork-container">
            {mywork_data.slice(0, visibleItems).map((work, index) => (
                <div key={index} className="mywork-item">
                    <a 
                      href={work.w_link}  
                      target="_blank" 
                      rel="noopener noreferrer"
                    >
                      <img src={work.w_img} alt={work.w_name} />
                    </a>
                    <p className="mywork-name">{work.w_name1}</p>
                </div>
            ))}
        </div>
        {visibleItems < mywork_data.length && (  
          <div className="mywork-showmore" onClick={handleShowMore}>
            <p>Show More</p>
            <img src={arrow_icon} alt="" />
          </div>
        )}
    </div>
  );
}

export default MyWork;


