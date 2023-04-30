import { React } from 'react';
import { Button, Stack } from 'react-bootstrap';
import LazyLoad from 'react-lazyload';
import './TechStack.css';
import { Sibootstrap as Bootstrap, SicssThree as CSS, Sifigma as Figma, Sigit as Git, Sihtml5 as HTML,
    Sijavascript as JavaScript, Sireact as React1, Sisass as SASS, Sitypescript as TypeScript } from '@icons-pack/react-simple-icons';

export default function TechStack() {
    return (
        <Stack className='tech-stack1' gap={4}>
            <h2>Main Skills</h2>
            <Stack className='tech-stack' direction='horizontal' gap={2}>
                <Stack className='sq-stack'>
                    <LazyLoad once><HTML color={'#FFF'} size={115} title='' /></LazyLoad>
                </Stack>
                <Stack className='sq-stack'>
                    <LazyLoad once><CSS color={'#FFF'} size={115} title='' /></LazyLoad>
                </Stack>
                <Stack className='sq-stack'>
                    <LazyLoad once><JavaScript color={'#FFF'} size={115} title='' /></LazyLoad>
                </Stack>
                <Stack className='sq-stack'>
                    <LazyLoad once><TypeScript color={'#FFF'} size={115} title='' /></LazyLoad>
                </Stack>
            </Stack>
            <Stack className='tech-stack' direction='horizontal' gap={2}>
                <Stack className='sq-stack sq-stack2'>
                    <LazyLoad once><React1 color={'#FFF'} size={100} title='' /></LazyLoad>
                </Stack>
                <Stack className='sq-stack sq-stack2'>
                    <LazyLoad once><Bootstrap color={'#FFF'} size={100} title='' /></LazyLoad>
                </Stack>
                <Stack className='sq-stack sq-stack2'>
                    <LazyLoad once><SASS color={'#FFF'} size={100} title='' /></LazyLoad>
                </Stack>
                <Stack className='sq-stack sq-stack2'>
                    <LazyLoad once><Figma color={'#FFF'} size={100} title='' /></LazyLoad>
                </Stack>
                <Stack className='sq-stack sq-stack2'>
                    <LazyLoad once><Git color={'#FFF'} size={100} title='' /></LazyLoad>
                </Stack>
            </Stack>
            <Button className='stack-btn' href='/techstack' variant='outline-light' >Complete Tech Stack</Button>
        </Stack>
    );
}