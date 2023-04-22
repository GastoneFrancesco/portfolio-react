import React from "react";
import { TopBarComponent } from './TopBarComponent.jsx'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFlag } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from "react-router-dom";

export const AboutMeComponent = () => {

    let navigate = useNavigate()

    const hireMeButton = () => {
    navigate('/work')
  }

    return (

        <>
            <TopBarComponent />

            <div class="about-me-container">

                <p class="about-me-p">Welcome, my name is Francesco, and I am a passionate web developer with a focus on utilizing the latest technologies to create innovative and functional applications. My primary expertise lies in ReactJs and Spring, which enables me to create websites that are both aesthetically pleasing and highly functional.</p>
                <p class="about-me-p">Over the past year, I have had the opportunity to work for a leading company in the public administration sector in Italy. This experience has allowed me to expand my technical knowledge and acquire new skills, enabling me to take on complex web development projects with ease.</p>
                <p class="about-me-p">If you are in need of support with creating a new website, updating an existing application, or troubleshooting technical issues, please don't hesitate to reach out to me for a customized quote. I take pride in my work and always strive to meet my clients' needs with dedication and a strong work ethic.</p>
                <p class="about-me-p">As a professional, I believe in going above and beyond to deliver exceptional results. I am eager to work with you to take your project to the next level and help your organization achieve its goals.</p>
                <p class="about-me-p">Thank you for considering my services, and I look forward to the opportunity to collaborate with you.</p>

                <button class="hire-me-button" id="about-me-hire-me" onClick={hireMeButton}>
                <FontAwesomeIcon icon={faFlag} size="2xl" style={{ color: "#1E3557", paddingRight: '1vh' }} />Hire me</button>
               
            </div>

        </>
    )

}