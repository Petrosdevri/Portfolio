import React, { useRef } from 'react';
import { Button, Container, Stack } from 'react-bootstrap';
import './Contact.css';

export default function Contact() {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        // emailjs.sendForm('SERVICE_ID', 'TEMPLATE_ID', form.current, {
        //     publicKey: 'PUBLIC_KEY',
        // }).then(() => alert('SUCCESS!'))
        // .catch(() => console.log('FAILED!'));
    }

    return (
        <Container fluid className='contact'>
            <h1>Contact <span className='name'>Me</span></h1>
            <h3>This feature is still in experimental phase so sending emails is disabled.</h3>
            <form className='contact-form' ref={form} onSubmit={sendEmail}>
                <Stack gap={4}>
                    <input type='email' className='email field' placeholder='Email Address' />
                    <input type='text' className='subject field' placeholder='Subject' />
                    <textarea className='message field' rows='10' placeholder='Enter your message...'></textarea>
                    <Button type='submit' disabled>Submit</Button>
                </Stack>
            </form>
        </Container>
    );
}