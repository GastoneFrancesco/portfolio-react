import React from "react";
import ideBackground from '../resources/ide_background.png';
import working from '../resources/working_fra.png'
import { TopBarComponent } from './TopBarComponent.jsx'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFlag } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from "react-router-dom";

export const HomePageComponent = () => {

    let navigate = useNavigate()

    const spanColor = {
        color: 'rgb(46, 222, 160)',
    }

    const firstMessage = ' Hey there! My name is Francesco ';
    const secondMessage = ' I am a FullStack Web Developer ';

    const openP = '<p>'
    const closedP = '</p>'

    const openDiv = '<div>';
    const closedDiv = '</div>';

    const openUl = '<ul class=\'\'accounts\'\'>';
    const closedUl = '</ul>';


    const openLi = '<li>';
    const closedLi = '</li>';

    const hireMeButton = () => {
        navigate('/work')
    }

    return (

        <>
            <TopBarComponent />

            <div class="main-div-container">

                <div className="working-fra-container">
                    <img src={working} class="working-fra" alt="working_fra" />
                    <button class="hire-me-button" onClick={hireMeButton}>
                        <FontAwesomeIcon icon={faFlag} size="2xl" style={{ color: "#1E3557", paddingRight: '1vh' }} />Hire me</button>
                </div>

                <div className='ide_background_container'>
                    <img src={ideBackground} class="ide_background_img" alt="ide_background_img" />
                </div>

                <div className="ide-text-container">
                    <div>
                        <p class="writer_text_div">{openDiv}</p>
                    </div>
                    <div>
                        <p class="writer_text">
                            <span style={spanColor}>{openP}</span>
                            {firstMessage}
                            <span style={spanColor}>{closedP}</span>
                        </p>
                    </div>
                    <div>
                        <p class="writer_text2">
                            <span style={spanColor}>{openP}</span>
                            {secondMessage}
                            <span style={spanColor}>{closedP}</span>
                        </p>
                    </div>
                    <div>
                        <p class="writer_text_ul">{openUl}</p>
                    </div>
                    <div>
                        <p class="writer_text_li">
                            <span style={spanColor}>{openLi}</span>
                            <a href="https://www.linkedin.com/in/francesco-gastone-50663a20b/">Linkedin</a>
                            <span style={spanColor}>{closedLi}</span>
                            <FontAwesomeIcon icon="fa-brands fa-linkedin" size="lg" style={{ marginLeft: '2vh' }} />
                        </p>
                    </div>
                    <div>
                        <p class="writer_text_li">
                            <span style={spanColor}>{openLi}</span>
                            <a href="https://github.com/GastoneFrancesco">GitHub</a>
                            <span style={spanColor}>{closedLi}</span>
                            <FontAwesomeIcon icon="fa-brands fa-github" size="lg" style={{ marginLeft: '2vh' }} />
                        </p>
                    </div>
                    <div>
                        <p class="writer_text_li">
                            <span style={spanColor}>{openLi}</span>
                            <a href="https://www.instagram.com/_francescogastone_/">Instagram</a>
                            <span style={spanColor}>{closedLi}</span>
                            <FontAwesomeIcon icon="fa-brands fa-instagram" size="lg" style={{ marginLeft: '2vh' }} />
                        </p>
                    </div>
                    <div>
                        <p class="writer_text_ul">{closedUl}</p>
                    </div>
                    <div>
                        <p class="writer_text_div">{closedDiv}</p>
                    </div>

                </div>
            </div>

        </>
    )

}