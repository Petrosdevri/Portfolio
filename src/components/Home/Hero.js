import { React } from 'react';
import { Button, Stack } from 'react-bootstrap';
import Type from './Type';
import JSDev from '../../images/icons/personal-icons/js-dev.png';

export default function Hero() {
    return (
        <Stack className='hero' direction='horizontal' gap={3}>
            <Stack className='presentation' gap={2}>
                <h1>Petros <span className='name'>Devrikis</span></h1>
                <h2><Type /></h2>
                <h5 className='stack-text-margin'>Hi, I&apos;m Petros Devrikis, a Front End Developer from Greece.</h5>
                <Stack className='presentation-btns' direction='horizontal' gap={3} style={{ marginBlockStart: '25px' }}>
                    <Button className='presentation-btn' href='/about' variant='info'>More On Me</Button>
                    <Button className='presentation-btn' href='/projects' variant='info'>My Projects</Button>
                </Stack>
            </Stack>
            <img src={JSDev} alt='JS Developer' id='intro-img' rel='preload' width='375' height='250' />
        </Stack>
    );
}