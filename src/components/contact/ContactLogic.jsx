import { useState, useRef } from 'react';
import emailjs from 'emailjs-com';
import { toast } from 'react-toastify';

const ContactLogic = () => {
    const [isBtnSentMailDisabled, setIsBtnSentMailDisabled] = useState(false);
    const form = useRef();

    const sendEmail = (e) => {
        setIsBtnSentMailDisabled(true);
        e.preventDefault();    
        const id = toast.loading("Sending...");
        emailjs.sendForm('service_7ge6m5l', 'template_gm3c3bl', form.current, 'qJMBnKiw2-ZIualGa')    
        .then((result) => {
            console.log(result.text);  
            toast.update(id, { render: "Email sent", type: "success", isLoading: false, autoClose: 3000}); 
            e.target.reset();
            setIsBtnSentMailDisabled(false);
        }, (error) => {
            toast.update(id, { render: "Sorry, this should not happen. Please reload the page and try again!", type: "error", isLoading: false});         
            console.log(error.text);
        });    
    }
  
    return { isBtnSentMailDisabled, form, sendEmail }
}

export default ContactLogic
