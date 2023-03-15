import React from 'react';
import {IoLogoGithub, IoLogoVk, IoLogoWhatsapp,} from 'react-icons/io';

function Footer() {
    return (
        <footer style={{position: "absolute", bottom: 0, width: "100%", backgroundColor:"blue"}}>
            <div className="social-icons" style={{marginLeft:"50px"}}>
                <a href="https://www.vk.com/" style={{color:"white"}} target={"_blank"}><IoLogoVk size={"2em"}/></a>
                <a href="https://www.whatsapp.com/" style={{color:"#43d854", marginLeft:"10px", marginTop:"10px"}} target={"_blank"}><IoLogoWhatsapp size={"2em"} /></a>
                <a href="https://github.com/tekerau666/online-store-full" style={{color:"#1d1a1a", marginLeft:"10px", marginTop:"10px"}} target={"_blank"}><IoLogoGithub size={"2em"}/></a>
            </div>
            <div className="creator" style={{display: "flex", justifyContent: "center", color:"white"}}>
                [Напишите че нибудь сюда]
            </div>
        </footer>
    );
}

export default Footer;