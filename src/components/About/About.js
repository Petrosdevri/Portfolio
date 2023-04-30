import React from 'react';
import { Container } from 'react-bootstrap';
import AboutMe from './AboutMe';
import TechStack from './TechStack';
import GithubCalendar from './GitHubCalendar';

export default function About() {
    return (
        <Container fluid className='about'>
            <AboutMe />
            <TechStack />
            <GithubCalendar />
        </Container>
    );
}