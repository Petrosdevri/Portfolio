import { React } from 'react';
import { Button, Stack } from 'react-bootstrap';
import JSDev from '../../images/icons/personal-icons/js-dev.png';

export default function Hero() {
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

// className='presentation' gap={2}
{/*
    <Row className="hero">
            <Col md={6} className="d-flex align-items-center">
                <div className="presentation">
                    <h1>Petros <span className="name">Devrikis</span></h1>
                    <h2>Front End Developer</h2>
                    <h5 className="stack-text-margin">
                    Hi, I&apos;m Petros Devrikis, a Front End Developer from Greece.
                    </h5>
                    <div className="presentation-btns" style={{ marginTop: '25px' }}>
                        <Button className="presentation-btn" variant="info">
                            <a href="/about">More On Me</a>
                        </Button>
                        <Button className="presentation-btn" variant="info">
                            <a href="/projects">My Projects</a>
                        </Button>
                    </div>
                </div>
            </Col>
            <Col md={6}>
                <img src={JSDev} alt="JS Developer" id="intro-img" rel="preload" />
            </Col>
      </Row>*/}