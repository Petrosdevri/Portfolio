import { React, useEffect } from 'react';
import { Button, Stack } from 'react-bootstrap';
import JSDev from '../../images/icons/personal-icons/js-dev.png';

export default function Hero() {
    const image = JSDev;
    useEffect(() => {
        const img = new Image();
        img.src = image;
    });

    return (
        <Stack className='hero' direction='horizontal' gap={3}>
            <Stack className='presentation' gap={2}>
                <h1>Petros <span className='name'>Devrikis</span></h1>
                <h2>Front End Developer</h2>
                <h5 className='stack-text-margin'>Hi, I&apos;m Petros Devrikis, a Front End Developer from Greece.</h5>
                <Stack className='presentation-btns' direction='horizontal' gap={3} style={{ marginBlockStart: '25px' }}>
                    <Button className='presentation-btn' variant='info'><a href='/about'>More On Me</a></Button>
                    <Button className='presentation-btn' variant='info'><a href='/projects'>My Projects</a></Button>
                </Stack>
            </Stack>
            <img src={JSDev} alt='JS Developer' id='intro-img' rel='preload' width='375' height='250' />
        </Stack>
    );
}