import React from 'react';
import { InstagramEmbed } from 'react-social-media-embed';

export function Bottom() {
    return (
        <>

            {/* <div id="instagram">
                <InstagramEmbed url="https://www.instagram.com/p/ClhEPUlvXx0/?utm_source=ig_web_button_share_sheet" 
                    captioned className="post"/>
                <InstagramEmbed url="https://www.instagram.com/p/ClhEPUlvXx0/?utm_source=ig_web_button_share_sheet" 
                    captioned className="post"/>
                <InstagramEmbed url="https://www.instagram.com/p/ClhEPUlvXx0/?utm_source=ig_web_button_share_sheet" 
                    captioned className="post"/>
            </div> */}


            <div className="alumniText"> Member & Alumni Network </div>    
            <div className="image2">
                <img src={require("../../images/image1.1.PNG")} 
                    alt="network" className="network" />
                <img src={require("../../images/image1.2.PNG")} 
                    alt="network" className="network" />
                <img src={require("../../images/image1.3.PNG")} 
                    alt="network" className="network" />
                <img src={require("../../images/image1.4.PNG")} 
                    alt="network" className="network" />
                <img src={require("../../images/image1.5.PNG")} 
                    alt="network" className="network" />
                <img src={require("../../images/image1.6.PNG")} 
                    alt="network" className="network" />
                <img src={require("../../images/image1.7.PNG")} 
                    alt="network" className="network" />
                <img src={require("../../images/image1.8.PNG")} 
                    alt="network" className="network" />
            </div>
    </>
    )
}

export default Bottom;