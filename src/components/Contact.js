import React, {useRef } from 'react';
import emailjs from '@emailjs/browser';
import Footer from './Footer';
export default function About(){
    const [name, setName ] = React.useState("");
    const [email, setEmail ] = React.useState("");
    const [message, setMessage ] = React.useState("");


    const [nameError, setNameError ] = React.useState("");
    const [emailError, setEmailError ] = React.useState("");
    const [messageError, setMessageError ] = React.useState("");

    const [ buttonText, setButtonText ] = React.useState('Send');
    const form = useRef();
    function sendEmail(e){
        e.preventDefault();
        if(validate()){
            setButtonText("sending...")
            emailjs.sendForm('service_71817lx', 'template_ycncb55', form.current, 'user_IcFwxAnI3mSlZFxdZTiF9')
            .then((result) => {
                setButtonText("Sent");
            }, (error) => {
                console.log(error.text);
            });
        }
    }

    function validate(){
        let valid = true;
        setNameError("");
        setEmailError("");
        setMessageError("");
        if(!name.length){
            setNameError('Please fill out this field');
            valid = false
        }
        if(!email.length){
            setEmailError('Please fill out this field');
            valid = false
        }
        if(email.length && !validateEmail(email)){
            setEmailError('Please enter a proper email');
            valid = false
        }
        if(!message.length){
            setMessageError('Please fill out this field');
            valid = false
        }
        return valid;
    }

    function validateEmail(email){
        return String(email)
          .toLowerCase()
          .match(
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
          );
    };

    function copyToClipboard(val){

    }
    return(
        <div className={`body-container overflow-x-hidden`}>
           <div id="Contact" className="home-container flex flex-col justify-center align-text-top  p-30 py-16 text-white px-10">
                {
                    buttonText=== 'Sent'
                    ?
                    <div className="home-content flex flex-col my-7 mt-60 justify-center sm:items-center w-full text-2xl">
                        Your message has been sent! 📤✉️
                    </div>
                    :
                    <>
                    <div className="home-content flex flex-col my-7 mt-40 justify-center sm:items-center w-full">
                        <p className="font-bold text-4xl">✉️ Let's stay in touch</p>
                    </div>

                    <div className="home-content flex flex-col my-7 mt-10 justify-center sm:items-center w-full">
                        <p className="font-light text-4xl">Send me an email at: <b>laura.willson.designer@gmail.com</b></p>
                    </div>
                    </>
                }
            </div>
            
            <Footer/>        
        </div>
    )
}

    