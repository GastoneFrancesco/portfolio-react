import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleInfo, faCookie, faEnvelope, faShieldHalved } from '@fortawesome/free-solid-svg-icons';
import { TopBarComponent } from './TopBarComponent';
import { faGoogle } from '@fortawesome/free-brands-svg-icons';

export const PrivacyPolicy = () => {

    const fontAwesomeStyle = {
        fontSize: '4.5vh',
        marginLeft: '2vh'
    }

    return (
        <>
            <TopBarComponent></TopBarComponent>
            <div className="privacy-policy-container">
                <h2>Privacy Policy</h2>
                <p>This privacy policy explains how <b>francescogastone.dev</b> collects, uses, and protects your personal information when you use our website.</p>
                <h3>Collection of Information<FontAwesomeIcon icon={faCircleInfo} style={fontAwesomeStyle} /></h3>
                <p>We do not collect any personally identifiable information unless you voluntarily provide it to us through our contact form. When you contact us through the contact form, we collect your name and email address.</p>
                <h3>Use of Information <FontAwesomeIcon icon={faCircleInfo} style={fontAwesomeStyle} /> </h3>
                <p>We only use the information you provide to us to respond to your inquiries and to provide you with the services you have requested. We do not share, sell, or otherwise disclose your personal information to any third parties, except as required by law.</p>
                <h3>EmailJS <FontAwesomeIcon icon={faEnvelope} style={fontAwesomeStyle} /></h3>
                <p>We use EmailJS to enable the instant sending of emails through the contact form. EmailJS is a third-party service that provides email delivery services. When you use the contact form, your name and email address are transmitted to EmailJS so that the email can be delivered to us. EmailJS does not retain any of your personal information.</p>
                <h3>FontAwesome and Google Fonts <FontAwesomeIcon icon={faGoogle} style={fontAwesomeStyle} /> </h3>
                <p>We use FontAwesome and Google Fonts on our website to enhance the design and user experience. FontAwesome and Google Fonts may collect data about your device, such as your IP address and device type, as well as information about how you use their services. Please refer to the privacy policies of FontAwesome and Google Fonts for more information on their data collection practices.</p>
                <h3>Cookies <FontAwesomeIcon icon={faCookie} style={fontAwesomeStyle} /></h3>
                <p>We do not use cookies on our website.</p>
                <h3>Security <FontAwesomeIcon icon={faShieldHalved} style={fontAwesomeStyle} /></h3>
                <p>We take reasonable measures to protect the security of your personal information, including the use of encryption and other security measures to protect against unauthorized access, alteration, or destruction of your personal information.</p>
                <h3>Changes to this Privacy Policy</h3>
                <p>We reserve the right to modify this privacy policy at any time. If we make material changes to this policy, we will notify by posting a notice on our website.</p>
                <h3>Contact Us</h3>
                <p>If you have any questions or concerns about our privacy policy, please contact us at <b>francesco.gastone.dev@gmail.com</b>.</p>
            </div>
        </>

    );
};