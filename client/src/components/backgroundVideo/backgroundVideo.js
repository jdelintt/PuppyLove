import React from 'react'
import classes from './BackgroundVideo.module.css';
import Puppy from './Puppy.mp4'


const BackgroundVideo = () => {
    
    return (
        <div >
            <video className = "videoTag" autoPlay loop = "loop" muted className = {classes.Video} >
                <source src = {Puppy} type = "video/mp4"/>
                Your browser does not support the video tag.
            </video>
        </div>


   
    )
}

export default BackgroundVideo