import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

const ContactForm = () => {

    const [name,setname]=useState('');
    const[email,setemail]=useState('');
    const[message,setmessage]=useState('');
    const [success,setsuccess]=useState('');

    const handlename=(e)=>{
        setname(e.target.value)
    }

    const handleemail=(e)=>{
        setemail(e.target.value)
    }

    const handlemessage=(e)=>{
        setmessage(e.target.value)
    }

    const form=useRef();

    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs
          .sendForm('service_cj2g1b4', 'template_ya8az3u', form.current, {
            publicKey: 'JO6vgF1RDn33GXwFD',
          })
          .then(
            () => {
                setname('');
                setemail('')
                setmessage('')
                setsuccess('Message sent')
                
            },
            (error) => {
              console.log('FAILED...', error.text);
            },
          );
      };
  return (
    <div>
        <p className='text-cyan'>{success }</p>
        <form className='flex flex-col gap-4 mt-2 text-white' ref={form} onSubmit={sendEmail}>
            <input name='from_name' value={name} onChange={handlename} type='text' placeholder='Enter your Name' required className='h-12 rounded-2xl px-3 bg-lightbrown outline-0 border-0'/>
            <input name='from_email' value={email} onChange={handleemail} type="email" placeholder='Enter your Email ID' required className='h-12 rounded-2xl px-3 bg-lightbrown  outline-0 border-0' />
            <textarea name='message' value={message} onChange={handlemessage} type='text' placeholder='Enter your message' rows='9' cols='50' required className=' rounded-2xl p-4 bg-lightbrown  outline-0 border-0'/>
            <button className=' cursor-pointer active:bg-cyan rounded-2xl p-3 text-white font-bold text-xl hover:bg-darkCyan bg-cyan transition-all duration-500 outline-0 border-cyan' type='submit'>Send</button>
        </form>
    </div>
  )
}

export default ContactForm