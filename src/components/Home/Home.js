import React from 'react';
import { Container } from 'react-bootstrap';
import './Home.css';
import Hero from './Hero';
import Introduction from './Introduction';
import Experience from './Experience';

export default function Home() {
    return (
        <Container fluid className='home' gap={5}>
            <Hero />
            <Introduction />
            <Experience />
        </Container>
    )
}