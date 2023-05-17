import { React, useState } from 'react';
import { Button } from 'react-bootstrap';
import { ArrowUp } from 'react-feather';

export default function ScrollButton() {
    const [visible, setVisible] = useState(false);

    const toggleVisible = () => {
        const scrolled = document.documentElement.scrollTop;
        if(scrolled > 300) {
            setVisible(true);
        } else {
            setVisible(false);
        }
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    window.addEventListener('scroll', toggleVisible);

    return (
        <Button className='scroll-btn' onClick={scrollToTop} style={{ display: visible ? 'inline' : 'none' }}><ArrowUp /></Button>
    )
}