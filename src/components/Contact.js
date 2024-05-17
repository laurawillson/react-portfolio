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
                    <div className="home-content flex flex-col my-7 mt-60 justify-center sm:items-center w-full  text-black  text-2xl">
                        Your message has been sent! 📤✉️
                    </div>
                    :
                    <>
                    <div className="home-content flex flex-col my-7 mt-40 justify-center sm:items-center w-full  text-black">
                        <p className="font-bold text-4xl">Get in Touch</p>
                    </div>
                    <form ref={form} className="w-full max-w-lg m-auto">
                        <div className="flex flex-wrap -mx-3 mb-6">
                            <div className="w-full px-3 mb-6 md:mb-0">
                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                                Name
                            </label>
                            <input 
                                name="from_name" id="from_name"
                                onChange={(e) => setName(e.target.value)}
                                className={`appearance-none block w-full bg-gray-200 text-gray-700 border  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white ${nameError.length && 'border-red-500'}`} type="text"
                            />
                                <p className="text-red-500 text-xs italic">{nameError}</p>
                            </div>
                        </div>
                        <div className="flex flex-wrap -mx-3 mb-6">
                            <div className="w-full px-3">
                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                                Email
                            </label>
                            <input 
                                name="reply_to" id="reply_to"
                                onChange={(e) => setEmail(e.target.value)}
                                className={`appearance-none block w-full bg-gray-200 text-gray-700 border  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 ${emailError.length && 'border-red-500'}`}  type="email"
                            />
                                <p className="text-red-500 text-xs italic">{emailError}</p>
                            </div>
                        </div>
                        <div className="flex flex-wrap -mx-3 mb-6">
                            <div className="w-full px-3">
                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                                Message
                            </label>
                            <textarea 
                                name="message_body" id="message_body"
                                onChange={(e) => setMessage(e.target.value)}
                                rows="6"
                                className={`appearance-none block w-full bg-gray-200 text-gray-700 border  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 ${messageError.length && 'border-red-500'}`}  type="text"
                            />
                                <p className="text-red-500 text-xs italic">{messageError}</p>
                            </div>
                        </div>

                        <button 
                            onClick={sendEmail}
                            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-full ">
                            {buttonText}
                        </button>
                    </form>
                    </>
                }

            </div>

            <br></br>
            <br></br>
            <br></br>
            
            <Footer/>        
        </div>
    )
}

    