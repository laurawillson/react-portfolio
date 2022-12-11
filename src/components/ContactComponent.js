import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import RayGif from '../img/ray-gif.gif';
import {FiArrowLeft} from "react-icons/fi";
export default function ContactComponent() {
  const form = useRef();
  const [submitted, setSubmitted ] = useState(false);
  const sendEmail = (e) => {
    e.preventDefault(); 

    emailjs.sendForm('gmail', 'template_XH9wOsTKMBvYOH47LwbfjtEfVRZ', form.current, 'user_IcFwxAnI3mSlZFxdZTiF9')
      .then((result) => {
          console.log("result: ", result);
          if(result.status == 200){
            setSubmitted(true);
          }
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <>
    {
      submitted
      ?
      <div>
        <div className="font-bold text-4xl text-center my-2" >Hooray! You've just
          sent me an email.
        </div>
        <div className="font-light text-xl text-center my-2" >I will get back to you as soon as
          possible. Continue being awesome!
        </div>

        <img className="m-auto mt-10" src={RayGif}/>

        <div className="flex justify-center items-center mt-5">
            <button onClick={()=>setSubmitted(false)} className="p-2 bg-lime-400 text-gray-600 rounded font-bold flex items-center justify-center">
                <FiArrowLeft className="mr-2"/> Send another message
            </button>
        </div>


      </div>
      :

    
    <form ref={form} onSubmit={sendEmail}>
      <div className="flex flex-col items-center justify-center">
        <div className="contact-title font-bold text-4xl">
          <p>Want to contact me directly?</p>
        </div>
        <div className="contact-title font-light text-2xl">
            <p>Please fill out this form.</p>
        </div>

        <div className="flex flex-col items-center justify-center w-full">
                <input id="from_name" name="name" type="text" className="w-full p-2 my-2 rounded" placeholder="Your Name" required/>
                <input id="mail_to" name="email" type="email" className="w-full p-2 my-2 rounded" placeholder="Your Email" required/>
                <textarea id="message_body" name="message" className="w-full p-2 my-2 rounded" placeholder="Message" row="4"
                    required></textarea>
                <button type="submit" className="w-full p-5 bg-sky-400 border border-gray-200 rounded font-bold text-white">
                  SEND MESSAGE
                </button>
        </div>
      </div>
      
    </form>
  }

    </>
  );
};