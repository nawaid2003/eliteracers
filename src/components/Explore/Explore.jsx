import React from 'react'
import { ExploreSec } from './Explore.st'
import Victory from "../../assets/home/victory.svg"
import Subtract from "../../assets/home/subtract.svg"
import TerSilver from "../../assets/ter-silver.png"

const Explore = () => {
  return (
    <ExploreSec subtract={Subtract}>
        <div className="content">
            <div className="explore">
                <div className="speed"><span>Speed</span><br/>is our language</div>
                <img src={Victory} alt="Victory typography" className='victory'/>
                <div className="destination">is our <span>Destination.</span></div>
                <div className="brief">Dive into the thrilling world of Formula One, guided by our exceptional team's engineering brilliance, strategic mastery, and passion for speed. </div>
                <div className="cta">Explore Team</div>
            </div>
        </div>
        
        <div className="fsae">
            <div className="header">
                <div className="future"><span>Explore</span><br/>the future of</div>
                <div className="ter-logo">
                    <img src={TerSilver} alt="Logo Silver" />
                </div>
            </div>
            <div className="content"></div>
        </div>
        {/* <img className='fsae' src={Subtract} alt="" /> */}
    </ExploreSec>
  )
}

export default Explore