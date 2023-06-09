import './ui.scss'

import { Player, Controls } from '@lottiefiles/react-lottie-player';
import Particles from "react-tsparticles";
import { useState,useEffect } from 'react';
import { loadFull } from "tsparticles";
import Typewriter from 'typewriter-effect' ;
const LandingPage = () => {
    const particlesInit = async (main) => {console.log(main);await loadFull(main);};



    return ( 
     <div className='page'>    <>
    <div className="text">
    <Typewriter 
onInit={(typewriter)=>{
    typewriter.typeString("WELCOME !").start();
}}
   /> 
  </div>
       
         
        <Particles
      id="tsparticles"
      init={particlesInit}

      options={{
        "fullScreen": {
            "enable": true,
            "zIndex": -9999
        },
        "particles": {
            "number": {
                "value": 60,
                "density": {
                    "enable": false,
                    "value_area": 100
                }
            },
            "color": {
                "value": "#fff"
            },
            "shape": {
                "type": "star",
                "options": {
                    "sides": 1,
                }
            },
            "opacity": {
                "value": 0.4,
                "random": false,
                "anim": {
                    "enable": false,
                    "speed": 1,
                    "opacity_min": 0.1,
                    "sync": false
                }
            },
            "size": {
                "value": 1,
                "random": false,
                "anim": {
                    "enable": false,
                    "speed": 30,
                    "size_min": 0.1,
                    "sync": false
                }
            },
            "rotate": {
                "value": 0,
                "random": true,
                "direction": "clockwise",
                "animation": {
                    "enable": true,
                    "speed": 5,
                    "sync": false
                }
            },
            "line_linked": {
                "enable": true,
                "distance": 200,
                "color": "#ffffff",
                "opacity": 0.4,
                "width": 1.5
            },
            "move": {
                "enable": true,
                "speed": 1.8,
                "direction": "none",
                "random": false,
                "straight": false,
                "out_mode": "out",
                "attract": {
                    "enable": false,
                    "rotateX": 600,
                    "rotateY": 1200
                }
            }
        },
        "interactivity": {
            "events": {
                "onhover": {
                    "enable": true,
                    "mode": ["repulse"]
                },
                "onclick": {
                    "enable": true,
                    "mode": "bubble"
                },
                "resize": true
            },
            "modes": {
                "repulse": {
                    "distance": 200,
                    "line_linked": {
                        "opacity": 1
                    }
                },
                "bubble": {
                    "distance": 400,
                    "size": 5,
                    "opacity": 8,
                    "speed": 3
                },
                "repulse": {
                    "distance": 200
                },
                "push": {
                    "particles_nb": 4
                },
                "remove": {
                    "particles_nb": 2
                }
            }
        },
        "retina_detect": true,
        "background": {
            "color": "#111",
            "image": "",
            "position": "50% 50%",
            "repeat": "no-repeat",
            "size": "cover"
        }
    }}/>
        
      
      
        </>
        <div className="player">
        <Player
        autoplay
        loop
        src="https://assets3.lottiefiles.com/private_files/lf30_mzj3wsjd.json"
       
      >
      </Player>
    </div>
       </div>
      );
}
 
export default LandingPage;