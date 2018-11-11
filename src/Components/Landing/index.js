import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import '../Landing/style.css';


class Landing extends Component {
    render () {
        return (
            <div style={{ width: '100%', margin: 'auto'}}>
                <Grid className="landing-grid">
                    <Cell col={12}>
                        <img 
                        src="https://praveenmp.github.io/avatar2.jpg"
                        alt="avatar"
                        className="avatar-img"
                        />

                        <div className="banner-text">
                        <h1>Front End Developer</h1> 

                        <hr/>

                    <p>HTML/CSS | JavaScript | React/Redux | Nodejs/Express</p>

                    <div className="social-links">

                    {/*Github*/} 
                       <a href="https://github.com/Yasir1986" rel="noopener noreferrer" target="blank"> 
                       <i class="fa fa-github-square" aria-hidden="true" />
                        </a>

                    {/*Linkedin*/}
                    <a href="https://www.linkedin.com/in/yasir-akbar-2b534513b/" rel="noopener noreferrer" target="blank"> 
                        <i class="fa fa-linkedin-square" aria-hidden="true" />
                        </a>

                      {/*Facebook*/}
                      <a href="https://www.facebook.com/yasir.akbar86" rel="noopener noreferrer" target="blank"> 
                        <i class="fa fa-facebook-square" aria-hidden="true" />
                        </a>
                        

                    </div>
                  
                        </div>
                    </Cell>   
                </Grid> 
            </div>
        )
    }
}


export default Landing;