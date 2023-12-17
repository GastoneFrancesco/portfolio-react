import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { TopBarComponent } from './TopBarComponent.jsx'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHandshake, faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import helloFra from '../resources/hello_fra.webp'


export const WorkComponent = () => {

    const [email, setEmail] = useState('');
    const [nome, setNome] = useState('');
    const [corpoMessaggio, setCorpoMessaggio] = useState('');
    const [isChecked, setIsChecked] = useState(false);

    var data = require('../resources/config.json')

    let serviceId = data.serviceId;
    let templateId = data.templateId;
    let publicKey = data.publicKey;

    const form = useRef();

    const handleCheckboxChange = () => {
        setIsChecked(!isChecked);
    }

    const sendEmail = (e) => {

        e.preventDefault();

        if (email.trim().length === 0 || nome.trim().length === 0 || corpoMessaggio.trim().length === 0) {
            alert('Fill the form before sending the email')
            return
        }

        if (!isChecked) {
            alert('You have to accept the Privacy Policy before sending an email')
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

                setIsChecked(false);

                alert('Email sent!')
                console.log(result.text);

            }, (error) => {
                console.log(error.text);
            });
    };

    return (

        <>
            <TopBarComponent />

            <div className='main-div-container'>

                <div >
                    <img src={helloFra} class="hello-fra" alt="hello_fra" />
                </div>

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

                            <div className='privacy-policy-checkbox'>
                                <label>
                                    <input type="checkbox" checked={isChecked} onChange={handleCheckboxChange}
                                    />
                                    I have read and understood the <a href='/privacy-policy' > Privacy Policy</a>
                                </label>
                            </div>

                            <div class="send-mail-button" id='send-email-div'>
                                <FontAwesomeIcon icon={faPaperPlane} size="2xl" style={{ color: "#1E3557", paddingRight: '1vh' }} />
                                <input type="submit" id='confirm-button' value="Send" />
                            </div>

                        </form>

                    </div>
                </div>
            </div >


        </>
    )

}