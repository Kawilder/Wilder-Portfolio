import React, {useState} from 'react';

export default function Project () {
  const [projects]=  useState([
    {
      title: ' ',
      url: ' ',
      repository: ' '
    },
    {
      title: ' ',
      url: ' ',
      repository: ' '
    },
    {
      title: ' ',
      url: ' ',
      repository: ' '
    },
    {
      title: ' ',
      url: ' ',
      repository: ' '
    },
    {
      title: ' ',
      url: ' ',
      repository: ' '
    },
    {
      title: ' ',
      url: ' ',
      repository: ' '
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
                  src={require(`../../assets/${i}.png`)}
                  alt={image.title}
                  key={image.title}
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