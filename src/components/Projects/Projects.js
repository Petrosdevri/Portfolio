import React from 'react';
import ProjectCard from './ProjectCard';
import { Stack } from 'react-bootstrap';
import ChadCoin from '../../images/photos/project-pictures/chadcoin.png';
import FrontendMentorChallenges from '../../images/photos/project-pictures/frontend-mentor-challenges.png';
import GreekVATCalculator from '../../images/photos/project-pictures/greek-vat-calculator.png';
import MathTrainingGame from '../../images/photos/project-pictures/math-training-game.png';
import ReactQuiz from '../../images/photos/project-pictures/react-quiz.png';

export default function Projects() {
    return (
        <div className='projects'>
            <Stack className='project-stack' direction='horizontal' gap={5}>
                <ProjectCard title='ChadCoin' description='An ERC20 meme token with a frontend DApp.' picture={ChadCoin} code='https://github.com/Petrosdevri/ChadCoin' demo='https://github.com/Petrosdevri/ChadCoin#readme' />
                <ProjectCard title='Frontend Mentor Challenges' description='My solutions to Frontend Mentor challenges.' picture={FrontendMentorChallenges} code='https://github.com/Petrosdevri/Frontend-Mentor-Challenges' demo='https://frontend-mentor-petrosdevri.netlify.app/' />
                <ProjectCard title='Greek VAT Calculator' description='A web page to calculate VAT rates in Greece.' picture={GreekVATCalculator} code='https://github.com/Petrosdevri/Greek-VAT-Calculator' demo='https://greek-vat-calculator.vercel.app/' />
            </Stack>
            <Stack className='project-stack' direction='horizontal' gap={5}>
                <ProjectCard title='Math Training Game' description='A training game developed to help people on math operations.' picture={MathTrainingGame} code='https://github.com/Petrosdevri/Math-Training-Game' demo='https://petrosdevri-math-game.netlify.app/' />
                <ProjectCard title='Product CRUD App' description='A sample app that can accept product inputs to a list, built on Electron and MySQL.' picture='' code='https://github.com/Petrosdevri/Product-CRUD-App' demo='https://github.com/Petrosdevri/Product-CRUD-App' />
                <ProjectCard title='React Quiz' description='A sample quiz built on React featuring questions about Greece.' picture={ReactQuiz} code='https://github.com/Petrosdevri/React-Greece-Quiz' demo='https://react-greece-quiz.netlify.app/' />
            </Stack>
        </div>
    );
}