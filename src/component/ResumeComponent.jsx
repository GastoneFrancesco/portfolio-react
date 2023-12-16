import React from "react";
import { TopBarComponent } from "./TopBarComponent";
import curriculumPdf from '../resources/FrancescoGastoneCV.pdf';

export const ResumeComponent = () => {

    return (

        <>
            <TopBarComponent />

            <div className="resume-container">

                <div className="resume-experience">
                    <ul>
                        <li className="experience-item">
                            <h3 className="experience-title">Step Srl - (Remote working)</h3>
                            <p className="experience-subtitle">Full Stack Web Application Developer - Full time</p>
                            <p className="experience-subtitle">November 2022 - Present</p>
                            <p className="experience-subtitle">Skills developed during the job position:</p>
                            <ul className="experience-details">
                                <li className="experience-detail-item">Requirements gathering and drafting of Technical-Functional Analyses</li>
                                <li className="experience-detail-item">Implementation of new features</li>
                                <li className="experience-detail-item">Design, implementation, and maintenance of Oracle databases</li>
                                <li className="experience-detail-item">Preparation of UCP (Use Case Points) estimates</li>
                            </ul>
                        </li>
                        <li className="experience-item">
                            <h3 className="experience-title">Step Srl - (Remote working)</h3>
                            <p className="experience-subtitle">Full Stack Web Application Developer - Apprenticeship</p>
                            <p className="experience-subtitle">August 2022 - November 2022</p>
                            <p className="experience-subtitle">Skills developed during the job position:</p>
                            <ul className="experience-details">
                                <li className="experience-detail-item">Bug fixing and debugging of Java web applications</li>
                                <li className="experience-detail-item">Maintenance of Oracle databases</li>
                                <li className="experience-detail-item">Deployment of web applications using Apache Tomcat</li>
                                <li className="experience-detail-item">Code management through Git versioning</li>
                            </ul>
                        </li>
                        <li className="experience-item">
                            <h3 className="experience-title">Step Srl - (Remote working)</h3>
                            <p className="experience-subtitle">Java Developer - Stage</p>
                            <p className="experience-subtitle">March 2022 - July 2022</p>
                            <p className="experience-subtitle">Skills developed during the job position:</p>
                            <ul className="experience-details">
                                <li className="experience-detail-item">Java EE </li>
                                <li className="experience-detail-item">SQL</li>
                                <li className="experience-detail-item">Development of Client-Server Web Applications</li>
                                <li className="experience-detail-item">Agile Methodology</li>
                            </ul>
                        </li>
                    </ul>
                </div>

                <div className="resume-skills">
                    <ul>
                        <li className="skills-item"><b>Java SE</b></li>
                        <li className="skills-item"><b>Java EE</b></li>
                        <li className="skills-item"><b>Oralce SQL</b></li>
                        <li className="skills-item"><b>Database Management</b></li>
                        <li className="skills-item"><b>Spring Framework</b></li>
                        <li className="skills-item"><b>RESTful Service</b></li>
                        <li className="skills-item"><b>JPA</b></li>
                        <li className="skills-item"><b>Hibernate</b></li>
                        <li className="skills-item"><b>Tomcat</b></li>
                        <li className="skills-item"><b>Anroid Development</b></li>
                        <li className="skills-item"><b>ReactJs</b></li>
                        <li className="skills-item"><b>Node.js</b></li>
                        <li className="skills-item"><b>HTML, CSS</b></li>
                        <li className="skills-item"><b>Git</b></li>
                    </ul>
                </div>
                
                <div className="download-container">
                    <a className="download-link" href={curriculumPdf}>Download Curriculum (ENG)</a>
                    <a className="download-link" href={curriculumPdf}>Download Curriculum (IT)</a>
                </div>

            </div>

        </>
    );
};
