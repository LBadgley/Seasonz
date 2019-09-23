import React from 'react';
import './SeasonIcons.css';

const seasonConfig = {
  summer: {
    text: 'Sunshine, Let\'s hit the beach!',
    img: 'sun outline'
  },
  winter: {
    text: 'Brr, Let\'s the snow!',
    img: 'snowflake outline'
  }
};

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
    <div className={`season-display ${season}`}>
      <i className={`icon-left massive ${img} icon`}/>
      <h1>{text}</h1>
      <i className={`icon-right massive ${img} icon`} />
    </div>
  )  
};

export default SeasonDisplay;
