import React from 'react'
import ContactForm from './ContactForm'

const ContactLeft = () => {
  return (
    <div>
      <div className='flex flex-col gap-3 w-full'>
        <h2 className='text-orange text-3xl mb-4'>Get in Touch</h2>
        <p className='text-white'>Feel free to reach out if you'd like to collaborate <br/>
            you are just a few clicks away!
        </p>
      </div>
      <ContactForm/>
    </div>
  )
}

export default ContactLeft