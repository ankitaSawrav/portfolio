import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import TextField from '@mui/material/TextField';
import './ContactMe.css'
import {Button} from '@mui/material';
import Notification from './Notification.js';


function ContactMe() {

    const form = useRef();

    const [notify,setNotify] = useState({ isOpen:false, message: "",type:""})



    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs
        .sendForm(
            'service_23zj2fu', 
            'template_q39e612',
             form.current, 
             'TyadNm06Kv8EpT4WE'
            )
        .then((result) => {
            console.log(result.text);
            setNotify({
                isOpen:true,
                message:"email send successfully",
                type:"success"
            })

        }, (error) => {
            console.log(error.text);
            setNotify({
                isOpen:true,
                message:"an error occured!!",
                type:"error"
            })
        });
    };


    return(
        <section className="contact-container">
            <h1>Lets Chat !!</h1>
            <p>Want to chat about a potential oppurtunity or just talk about something!!
                <br></br>
                I would love to hear from you..
            </p>  
            <form className="contactMe-form" ref={form} onSubmit={sendEmail}>
                {/* <label>Name</label>
                <input type="text" name="user_name" />
                <label>Email</label>
                <input type="email" name="user_email" />
                <label>Message</label>
                <textarea name="message" />
                */}

                <TextField
                    id="filled-textarea"
                    label="Name"
                    name="user_name"
                    variant="filled"
                />
                
                <TextField
                    id="filled-textarea"
                    label="Email"
                    name="user_email"
                    variant="filled"
                />
                <TextField
                    id="filled-multiline-static"
                    label="message"
                    multiline
                    rows={4}
                    defaultValue="Message"
                    name="message"
                    variant="filled"
                />
 
                <Button
                    // type="submit"
                    variant="contained"
                    onClick={(e) => sendEmail(e)}
                    >
                    Send
                </Button>
                {/* <input type="submit" value="Send" /> */}  
                
              
            </form>
            
            <Notification 
                notify ={notify}
                setNotify= {setNotify}>

            </Notification>

        </section>
    )
}

export default ContactMe