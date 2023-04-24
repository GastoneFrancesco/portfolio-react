import React from "react";
import { TopBarComponent } from "./TopBarComponent";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFileSignature, faCalendarCheck, faBuilding, faBriefcase } from '@fortawesome/free-solid-svg-icons';

export const ResumeComponent = () => {

    return (
        <>
            <TopBarComponent />
            <div className="main-div-container">
                <div className="resume-container">
                    <div>
                        <h1><FontAwesomeIcon icon={faBriefcase} className="fa-resume"/>Junior Fullstack Web Application Developer</h1>
                        <p><FontAwesomeIcon icon={faFileSignature} className="fa-resume"/>Contratto a tempo Indeterminato</p>
                        <p><FontAwesomeIcon icon={faCalendarCheck} className="fa-resume"/>(Novembre 2022 – In corso)</p>
                        <p><FontAwesomeIcon icon={faBuilding} className="fa-resume"/>Step Srl - Viale Castro Pretorio, 116, 00185 Roma RM</p>
                        <ul>
                            <li>Analisi Tecnico - Funzionale dei requisiti proposti dal cliente.</li>
                            <li>Sviluppo e testing delle nuove funzionalità.</li>
                            <li>Manutenzione (Analisi e Debug) del codice.</li>
                        </ul>
                        <p>Tecnologie utilizzate : Java, Hibernate/JPA , Tomcat, Oracle SQL, JSF, Eclipse, GIT.</p>
                    </div>
                    <div>
                        <h1><FontAwesomeIcon icon={faBriefcase} className="fa-resume"/>Junior Fullstack Web Application Developer</h1>
                        <p><FontAwesomeIcon icon={faFileSignature} className="fa-resume"/>Apprendistato professionalizzante</p>
                        <p><FontAwesomeIcon icon={faCalendarCheck} className="fa-resume"/>(Agosto 2022 – Novembre 2022)</p>
                        <p><FontAwesomeIcon icon={faBuilding} className="fa-resume"/>Step Srl - Viale Castro Pretorio, 116, 00185 Roma RM</p>
                        <p></p>
                    </div>
                    <div>
                        <h1><FontAwesomeIcon icon={faBriefcase} className="fa-resume"/>Java Developer</h1>
                        <p><FontAwesomeIcon icon={faFileSignature} className="fa-resume"/>Stage formativo</p>
                        <p><FontAwesomeIcon icon={faCalendarCheck} className="fa-resume"/>(Marzo 2022 – Luglio 2022)</p>
                        <p><FontAwesomeIcon icon={faBuilding} className="fa-resume"/>Step Srl - Viale Castro Pretorio, 116, 00185 Roma RM</p>
                        <p>Stage formativo nello sviluppo di  Web Application, con applicazione di Framework e Metodologia Agile</p>
                    </div>
                    <div>
                        <h1><FontAwesomeIcon icon={faBriefcase} className="fa-resume"/>Competenze Personali</h1>
                        <ul>
                            <li>Java (Java SE, Java EE), C#, JavaScript</li>
                            <li>Spring Boot, React JS, JSF, JSP</li>
                            <li>Oracle SQL, MySQL, Google Firebase</li>
                            <li>Versioning del codice (GIT)</li>
                            <li>HTML, CSS</li>
                            <li>Metodologia Agile</li>
                            <li>Android SDK</li>
                            <li>Servizi REST</li>
                            <li>Windows, macOS, linux</li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )

}