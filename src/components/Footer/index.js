import React from 'react'; 

function Footer () {
  return(
    <footer className="fixed-bottom">
      <div>
        <a href="https://github.com/Kawilder">
          {/*<img
            src={require(`../../assets/icons/github.png`)}
            alt="GitHub logo"
            className="logo"
          />*/}
        </a>
        <a href="https://www.linkedin.com/in/kevin-wilder-594110225/">
          {/*<img
            src={require('../../assets/icons/linkedin.png')}
            alt="LinkedIn logo"
            className="logo"
          />*/}
        </a>
        <a href="mailto:mailahnheidi@gmail.com">
          {/*<img
            src={require('../../assets/icons/email.jpg')}
            alt="Email logo"
            className="logo"
          />*/}
        </a>
      </div>
      <div>
      Made By Kevin Wilder
      </div>
    </footer>
  )
}

export default Footer;