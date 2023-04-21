import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { TopBarComponent } from './TopBarComponent.jsx'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHandshake, faPaperPlane } from '@fortawesome/free-solid-svg-icons';

export const WorkComponent = () => {

    const [email, setEmail] = useState('');
    const [nome, setNome] = useState('');
    const [corpoMessaggio, setCorpoMessaggio] = useState('');

    var data = require('../resources/config.json')

    let serviceId = data.serviceId;
    let templateId = data.templateId;
    let publicKey = data.publicKey;

    const form = useRef();

    const sendEmail = (e) => {

        e.preventDefault();

        if (email.trim().length === 0 || nome.trim().length === 0 || corpoMessaggio.trim().length === 0) {
            alert('Inserisci i dati prima di inviare la mail')
            return
        }

        const button = document.getElementById('confirm-button');
        const buttonDiv = document.getElementById('send-email-div');
        button.value = "Sending..."
        buttonDiv.className = 'sending-email-button';

        emailjs.sendForm(serviceId, templateId, form.current, publicKey)
            .then((result) => {
                button.value = "Send"
                buttonDiv.className = 'send-mail-button';
                const inputs = document.querySelectorAll('#from_name, #from_email, #message');
                inputs.forEach(input => {
                    input.value = '';
                });

                alert('Email inviata con successo!')
                console.log(result.text);

            }, (error) => {
                console.log(error.text);
            });
    };

    const divStyle = {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        marginTop: '10vh'
    };

    return (

        <>
            <TopBarComponent />

            <div style={divStyle}>

                <div class="email-container">

                    <div class="email-container-left">
                        <FontAwesomeIcon icon={faHandshake} />

                        <p class="email-caption">If you have a question or you want to request for quotation use the form. I'll be happy to answer!</p>

                    </div>

                    <div class="email-container-right">

                        <form class='email-form' ref={form} onSubmit={sendEmail}>

                            <div class="name-email-div">
                                <input type="text" value={nome} onChange={(e) => setNome(e.target.value)}
                                    placeholder='Name Surname' name="from_name" id="from_name" />

                                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)}
                                    placeholder='Your email' name="from_email" id="from_email" />
                            </div>

                            <textarea value={corpoMessaggio} onChange={(e) => setCorpoMessaggio(e.target.value)}
                                placeholder="Write here your message" name="message" id="message" />

                            <div class="send-mail-button" id='send-email-div'>
                                <FontAwesomeIcon icon={faPaperPlane} size="2xl" style={{ color: "#1E3557", paddingRight: '1vh' }} />
                                <input type="submit" id='confirm-button' value="Send" ></input>
                            </div>

                        </form>

                    </div>
                </div>
            </div>


        </>
    )

}