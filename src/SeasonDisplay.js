import React from 'react';
import './SeasonIcons.css';

const seasonConfig = {
  summer: {
    text: 'Sunshine, let\'s head to the coast!',
    img: 'sun outline'
  },
  winter: {
    text: 'Brr, let\'s hit up Mt. Hood!',
    img: 'snowflake outline'
  }
};

//helper function getting the season

const getSeason = (lat, month) => {
  if (month > 2 && month < 9) {
    return lat > 0 ? 'summer' : 'winter';
  } else {
    return lat > 0 ? 'winter' : 'summer';
  }
};

const SeasonDisplay = props => {
  // Northern Hemi Apr-Sept is summer
  // Southern Hemi Oct-March is summer
  const season = getSeason(props.lat, new Date().getMonth());
  const { text, img } = seasonConfig[season]; // {text, icon}
  console.log(season);

  return (
    <div>
      <div className={`season-display ${season}`}>
        <i id='icon-left' className={`icon-left massive ${img} icon`}/>
        <h1 id='text'>{text}</h1>
        <i id='icon-right' className={`icon-right massive ${img} icon`} />
      </div>
    </div>
  )  
};

export default SeasonDisplay;
