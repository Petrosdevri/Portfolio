import React from 'react';
import { Stack } from 'react-bootstrap';
import { Aperture } from 'react-feather';
import PetrosDevrikis from '../../images/photos/personal-photos/Petros Devrikis Stockholm.png';

export default function AboutMe() {
    return (
        <Stack className='about-me' direction='horizontal' gap={3}>
            <Stack className='about-me-info' gap={2}>
                <h1>About <span className='name'>Me</span></h1>
                <h4>I am Petros Devrikis, a Front End Developer living in Thessaloniki, Greece.</h4>
                <p>I have a passion for developing interactive, practical and responsive web applications with special attention to abundance and design.
                    I am eager to learn constantly and committed to hone my stack skills and technical prowess.</p>
                <p>My principal area of expertise is on JavaScript with emphasis on the ES6 standard, and I also specialise in React.</p>
                <p>Some of my hobbies are listed below:</p>
                <ul className='hobby-list'>
                    <li><Aperture /> Going to the gym </li>
                    <li><Aperture /> Learning new things 🧠</li>
                    <li><Aperture /> Reading books 📖</li>
                    <li><Aperture /> Travelling 🛫</li>
                </ul>
            </Stack>
            <img src={PetrosDevrikis} alt='JS Developer' id='about-photo' width='225' height='225' />
        </Stack>
    );
}