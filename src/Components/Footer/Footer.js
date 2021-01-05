import React from "react";


import './Footer.css';

export default function Footer(){
    return(
        <div className="footer-container">
            
            <img style={{width:30}} src={require(`./facebook.png`)} />
            {'          '  }
            <img style={{width:30}} src={require(`./insta.png`)} />            
            {'          '  }
            <img style={{width:30}} src={require(`./twitter.png`)} />  
        </div>
    );
}