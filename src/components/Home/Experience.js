import React from 'react';
import { Stack } from 'react-bootstrap';
import { Chrono } from 'react-chrono';

export default function Experience() {
    const fontSizes = {
        title: '1.25rem',
        cardTitle: '1.25rem',
        cardSubtitle: '1rem',
        cardText: '0.95rem',
    }

    const items = [{
        title: '2020-2023',
        cardTitle: 'Front End Developer',
        cardSubtitle: 'Devrikis\' Insurances',
        cardDetailedText: 'Worked as the main developer for the company\'s website. Developed the website from scratch using Bootstrap and ReactJS. Also, worked on the company\'s internal CRM system, which was developed using Electron, MySQL and NodeJS.',
    }, {
        title: '2022-present',
        cardTitle: 'Open Source Contributor',
        cardSubtitle: 'JavaScript, React, SCSS',
        cardDetailedText: 'I\'m currently working on a few open source projects, which you can find on my GitHub profile.',
    }];

    const theme = {
        primary: '#0DCAF0',
        secondary: '#fff',
        cardBgColor: '#1F2933',
        cardForeColor: '#fff',
        titleColor: '#fff',
        titleColorActive: '#000',
    };

    return (
        <Stack className='experience stack-text-margin' style={{ marginBlockEnd: '5em' }}>
                <h3>Experience</h3>
                <Chrono items={items} mode='VERTICAL_ALTERNATING' hideControls fontSizes={fontSizes} theme={theme} />
        </Stack>
    );
}