import React, {useState} from 'react';
import "../../../App.css";

export default function Project () {
  const [projects]=  useState([
    {
      title: 'Weekly Witty Writing Prompts',
      url: 'https://weekly-witty-writing-prompts.herokuapp.com/',
      repository: 'https://github.com/Nate-Huerd/weekly-witty-writing-prompt'
    },
    {
      title: 'Mix It Up',
      url: 'https://mixitupapp.herokuapp.com/',
      repository: 'https://github.com/SepidehAyani/mixitup'
    },
    {
      title: 'Weathered Vibes',
      url: 'https://sepidehayani.github.io/WeatheredVibes/',
      repository: 'https://github.com/SepidehAyani/WeatheredVibes'
    },
    {
      title: 'Budget Tracker',
      url: 'https://budget-tracker-buddy.herokuapp.com/',
      repository: 'https://github.com/Kawilder/PWA-Budget-Tracker'
    },
    {
      title: 'Weather Dashboard',
      url: 'https://kawilder.github.io/weather_dashboard/',
      repository: 'https://github.com/Kawilder/weather_dashboard'
    },
    {
      title: 'Note Taker',
      url: 'https://kw-note-taker.herokuapp.com/',
      repository: 'https://github.com/Kawilder/Note-Taker'
    },
  ]);
  
  return(
    <div id="projects">
      {projects.map((image, i) => (
        <div  className="container projectItem">
          <div className="row justify-content-around">
            <div className="col-4">
              <a href={image.url}>
                <h3>{image.title}</h3>
                <img 
                  src={require(`../../../assets/${i}.png`)}
                  alt={image.title}
                  href={image.url}
                />
                <a className='projectTitle' href={image.repository}>Repository</a>
               </a>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};