import React from "react";
import { TopBarComponent } from "./TopBarComponent";
import curriculumPdf from '../resources/FrancescoGastoneCV.pdf';
import curriculumPic from '../resources/curriculim_pic.jpeg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase, faBookOpen, faLanguage } from '@fortawesome/free-solid-svg-icons';


export const ResumeComponent = () => {

    return (
        <>

            <TopBarComponent />

            <div className="resume-container">

                <div className="resume-left-container">
                    <div className="resume-profile">
                        <img src={curriculumPic} alt="propic"></img>
                        <h2>FRANCESCO GASTONE</h2>
                        <p> SOFTWARE ENGINEER</p>
                    </div>

                    <div className="resume-overview">
                        <div>
                            <h2>OVERVIEW</h2>
                            <p>Passionate Software Engineer with a focus on Web Applications As a software engineer, my passion lies in the realm of software development and IT. However, my particular area of interest is web applications.</p>
                        </div>
                        <div>
                            <h2>SOFTWARE AND TOOLS</h2>
                            <ul>
                                <li>Java SE</li>
                                <li>Java EE</li>
                                <li>Oracle SQL</li>
                                <li>Database Management</li>
                                <li>Spring Framework</li>
                                <li>RESTful Service</li>
                                <li>JPA</li>
                                <li>Hibernate</li>
                                <li>Tomcat</li>
                                <li>Android Development</li>
                                <li>ReactJs</li>
                                <li>Node.js</li>
                                <li>HTML, CSS</li>
                                <li>GIT</li>
                            </ul>
                        </div>
                        <div>
                            <h2>CONTACT INFORMATION</h2>
                            <p><b>Address:</b> Via Dante Alighieri, 7 825025, Melfi</p>
                            <p><b>Mobile</b>: +39 3450535148</p>
                            <p><b>Email</b>: francesco.gastone.dev@gmail.com</p>
                            <p><b>LinkedIn</b>: <a href="https://www.linkedin.com/in/francesco-gastone-50663a20b/" className="underline">francesco-gastone-50663a20b</a></p>
                        </div>
                    </div>

                </div>

                <div className="resume-right-container">

                    <div className="resume-right-card">
                        <div className="resume-right-title">
                            <FontAwesomeIcon icon={faBriefcase} />
                            <h2>WORK EXPERIENCE</h2>
                        </div>
                        <div className="resume-work-experiences">
                            <div>
                                <h3>Full-Stack Web Application Developer - Full time</h3>
                                <p>STEP s.r.l. | Nov. 2022 - Present</p>
                                <h4>Main activities:</h4>
                                <ul>
                                    <li>Requirements gathering and drafting of Technical-Functional Analyses</li>
                                    <li>Implementation of new features</li>
                                    <li>Design, implementation, and maintenance of Oracle databases</li>
                                    <li>Preparation of UCP (Use Case Points) estimates</li>
                                    <li>Everything listed in the experiences below</li>
                                </ul>
                            </div>
                            <div>
                                <h3>Full-Stack Web Application Developer - Apprenticeship</h3>
                                <p>STEP S.r.l. | Aug. 2022 - Nov. 2022</p>
                                <h4>Main activities:</h4>
                                <ul>
                                    <li>Bug fixing and debugging of Java web applications</li>
                                    <li>Maintenance of Oracle databases</li>
                                    <li>Deployment of web applications using Apache Tomcat</li>
                                    <li>Code management through Git versioning</li>
                                </ul>
                            </div>
                            <div>
                                <h3>Full-Stack Web Application Developer - Stage</h3>
                                <p>STEP S.r.l. | Mar. 2022 - Aug. 2022</p>
                                <h4>Tutoring about:</h4>
                                <ul>
                                    <li>Java EE</li>
                                    <li>SQL</li>
                                    <li>Development of Client-Server Web Applications</li>
                                    <li>Agile Methodology</li>
                                </ul>
                            </div>
                        </div>

                    </div>

                    <div className="resume-right-card">
                        <div className="resume-right-title">
                            <FontAwesomeIcon icon={faBookOpen} />
                            <h2>EDUCATION</h2>
                        </div>
                        <div>
                            <h3>Università degli Studi della Basilicata - Computer Science</h3>
                            <p>Sep. 2020 - Jul. 2022 | Classes attended</p>
                        </div>
                    </div>

                    <div className="resume-right-card">
                        <div className="resume-right-title">
                            <FontAwesomeIcon icon={faLanguage} />
                            <h2>LANGUAGES</h2>
                        </div>
                        <ul>
                            <li><b>Italian</b> - Mothertongue</li>
                            <li><b>Englis</b> - B2</li>
                        </ul>
                    </div>

                    <a href={curriculumPdf}>Click here to download</a>

                </div>

            </div>


        </>
    );
};
