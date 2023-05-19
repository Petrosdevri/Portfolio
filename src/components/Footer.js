import { React, lazy, useState } from 'react';
import { Container, Stack } from 'react-bootstrap';
import LazyLoad from 'react-lazyload';
import { Siprotonmail as ProtonMail } from '@icons-pack/react-simple-icons';
const UilGithub = lazy(() => import('@iconscout/react-unicons/icons/uil-github'));
const UilInstagram = lazy(() => import('@iconscout/react-unicons/icons/uil-instagram'));
const UilLinkedin = lazy(() => import('@iconscout/react-unicons/icons/uil-linkedin'));

export default function Footer() {
    let date = new Date();
    let year = date.getFullYear();

    const [color, setColor] = useState(['#fff', '#fff', '#fff', '#fff']);
    const [bgColor, setBgColor] = useState(['#1F2933', '#1F2933', '#1F2933', '#1F2933']);

    const onMouseOver = (id) => {
        setColor(color.map((color, index) => index === id - 1 ? '#1F2933' : color));
        setBgColor(bgColor.map((color, index) => index === id - 1 ? '#fff' : color));
    };

    const onMouseOut = () => {
        setColor(['#fff', '#fff', '#fff', '#fff']);
        setBgColor(['#1F2933', '#1F2933', '#1F2933', '#1F2933']);
    };

    return (
        <footer>
            <Container fluid className='footer'>
                <h1 id='contact-me'>CONTACT ME</h1>
                <Stack direction='horizontal' id='social-media-icons'>
                    <button className='footer-btn' style={{ background: `${bgColor[0]}` }} onMouseOver={() => onMouseOver(1)} onMouseOut={onMouseOut}>
                        <a href='https://github.com/Petrosdevri' target='_blank' rel='noreferrer'>
                            <LazyLoad height={35} once><UilGithub className='social-media-icon' color={color[1]} size='35' /></LazyLoad>
                        </a>
                    </button>
                    <button className='footer-btn' style={{ background: `${bgColor[1]}` }} onMouseOver={() => onMouseOver(2)} onMouseOut={onMouseOut}>
                        <a href='https://instagram.com/petrosdevri' target='_blank' rel='noreferrer'>
                            <LazyLoad height={35} once><UilInstagram className='social-media-icon' color={color[1]} size='35' /></LazyLoad>
                        </a>
                    </button>
                    <button className='footer-btn' style={{ background: `${bgColor[2]}` }} onMouseOver={() => onMouseOver(3)} onMouseOut={onMouseOut}>
                        <a href='https://www.linkedin.com/in/petros-devrikis/' target='_blank' rel='noreferrer'>
                            <LazyLoad height={35} once><UilLinkedin className='social-media-icon' color={color[2]} size='35' /></LazyLoad>
                        </a>
                    </button>
                    <button className='footer-btn' style={{ background: `${bgColor[3]}` }} onMouseOver={() => onMouseOver(4)} onMouseOut={onMouseOut}>
                        <a href='mailto:petrosdevrikis@proton.me' target='_blank' rel='noreferrer'>
                            <LazyLoad height={35} once><ProtonMail className='social-media-icon' color={color[3]} size='32' title='' /></LazyLoad>
                        </a>
                    </button>
                </Stack>
                <h5 className='footer-message'>Copyright @ {year} - Developed with ❤️ by Petros Devrikis</h5>
            </Container>
        </footer>
    )
}