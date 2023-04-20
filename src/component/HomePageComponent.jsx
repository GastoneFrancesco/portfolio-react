import React from "react";
import ideBackground from './ide_background.png';
import working from './working_fra.png'
import { TopBarComponent } from './TopBarComponent.jsx'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export const HomePageComponent = () => {

    const divStyle = {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        marginTop: '10vh'
    };

    const spanColor = {
        color: '#0066ff',
    }

    const firstMessage = ' Hey there! My name is Francesco ';
    const secondMessage = ' I am a FullStack Developer ';

    const openP = '<p>'
    const closedP = '</p>'

    const openDiv = '<div>';
    const closedDiv = '</div>';

    const openUl = '<ul class=\'\'accounts\'\'>';
    const closedUl = '</ul>';


    const openLi = '<li>';
    const closedLi = '</li>';

    return (

        <>
            <TopBarComponent />

            <div style={divStyle}>

                <div>
                    <img src={working} class="working-fra" alt="working_fra" />
                </div>

                <div className='ide_background_container'>
                    <img src={ideBackground} class="ide_background_img" alt="ide_background_img" />
                </div>

                <div>
                    <div class="writer_container">
                        <p class="writer_text_div">{openDiv}</p>
                    </div>
                    <div class="writer_container">
                        <p class="writer_text">
                            <span style={spanColor}>{openP}</span>
                            {firstMessage}
                            <span style={spanColor}>{closedP}</span>
                        </p>
                    </div>
                    <div class="writer_container">
                        <p class="writer_text2">
                            <span style={spanColor}>{openP}</span>
                            {secondMessage}
                            <span style={spanColor}>{closedP}</span>
                        </p>
                    </div>
                    <div class="writer_container">
                        <p class="writer_text_ul">{openUl}</p>
                    </div>
                    <div class="writer_container">
                        <p class="writer_text_li">
                            <span style={spanColor}>{openLi}</span>
                            <a href="https://www.instagram.com/_francescogastone_/">Instagram</a>
                            <span style={spanColor}>{closedLi}</span>
                            <FontAwesomeIcon icon="fa-brands fa-instagram" size="lg" style={{ marginLeft: '2vh' }} />
                        </p>
                    </div>
                    <div class="writer_container">
                        <p class="writer_text_li">
                            <span style={spanColor}>{openLi}</span>
                            <a href="https://www.linkedin.com/in/francesco-gastone-50663a20b/">Linkedin</a>
                            <span style={spanColor}>{closedLi}</span>
                            <FontAwesomeIcon icon="fa-brands fa-linkedin" size="lg" style={{ marginLeft: '2vh' }} />
                        </p>
                    </div>
                    <div class="writer_container">
                        <p class="writer_text_li">
                            <span style={spanColor}>{openLi}</span>
                            <a href="https://github.com/GastoneFrancesco">GitHub</a>
                            <span style={spanColor}>{closedLi}</span>
                            <FontAwesomeIcon icon="fa-brands fa-github" size="lg" style={{ marginLeft: '2vh' }} />
                        </p>
                    </div>
                    <div class="writer_container">
                        <p class="writer_text_ul">{closedUl}</p>
                    </div>
                    <div class="writer_container">
                        <p class="writer_text_div">{closedDiv}</p>
                    </div>

                </div>
            </div>

        </>
    )

}