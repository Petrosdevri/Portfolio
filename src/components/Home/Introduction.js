import { React, useEffect } from 'react';
import { Stack } from 'react-bootstrap';
import Avatar from '../../images/icons/personal-icons/petros-avatar.png';

export default function Introduction() {
    const image = Avatar;

    useEffect(() => {
        const img = new Image();
        img.src = image;
    });

    return (
        <Stack className='introduction' direction='horizontal'>
            <Stack className='short-intro' gap={2}>
                <h3>Short <span className='name'>Introduction</span></h3>
                <p>I am a Front End Developer and IES student from Greece, working as a freelancer.<br /> I have a passion for web development and I am always looking for new challenges. <br /> Most of my works are on open source projects, which can be found on my GitHub profile.</p>
            </Stack>                
            <img src={Avatar} alt='Avatar' id='avatar' width='200' height='250' />
        </Stack>
    );
}