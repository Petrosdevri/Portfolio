import React from 'react';
import './Projects.css';
import ProjectCard from './ProjectCard';
import { Stack } from 'react-bootstrap';
import AcropolisElects from '../../images/photos/project-pictures/AcropolisElects.png';
import ArchitectPage from '../../images/photos/project-pictures/Architect Page.png';
import ChadCoin from '../../images/photos/project-pictures/ChadCoin.png';
import EPEkloges2024 from '../../images/photos/project-pictures/EP Ekloges2024.png';
import FrontendMentorChallenges from '../../images/photos/project-pictures/Frontend Mentor Challenges.png';
import GreekValues from '../../images/photos/project-pictures/GreekValues.png';
import GreekVATCalculator from '../../images/photos/project-pictures/Greek VAT Calculator.png';
import IPAddressFinder from '../../images/photos/project-pictures/IP Address Finder.png';
import JasonPortfolio from '../../images/photos/project-pictures/Jason Portfolio.png'
import ReactQuiz from '../../images/photos/project-pictures/React Quiz.png';
import WebScrapers from '../../images/photos/project-pictures/Web Scrapers.png';

export default function Projects() {
    return (
        <Stack className='projects'>
            <h1>Projects</h1>
            <div className='d-flex justify-content-center align-items-center gap-4'>
                <ProjectCard title='AcropolisElects' description='A web application that simulates the distribution of seats in the Greek Parliament based on different electoral systems.' picture={AcropolisElects} code='https://github.com/Petrosdevri/AcropolisElects' demo='https://acropolis-elects.vercel.app/' />
                <ProjectCard title='Architect Page' description='A sample page built with Bootstrap, React and W3.CSS.' picture={ArchitectPage} code='https://github.com/Petrosdevri/Architect-Page' demo='https://architect-page-w3css.netlify.app/' />
                <ProjectCard title='ChadCoin' description='A Solidity ERC20 Meme Coin with a JavaScript frontend DApp. Was done for Cadena Web3 course.' picture={ChadCoin} code='https://github.com/Petrosdevri/ChadCoin' demo='' />
            </div>
            <div className='d-flex justify-content-center align-items-center gap-4'>
                <ProjectCard title='EP Ekloges2024' description={`A web application that simulates the distribution of Greek seats in the European Parliament based on the newly introduced d'Hondt method.`} picture={EPEkloges2024} code='https://github.com/Petrosdevri/EP-Ekloges2024' demo='https://ep-ekloges2024.netlify.app/' />
                <ProjectCard title='Frontend Mentor Challenges' description='My solutions to Frontend Mentor challenges, using HTML/CSS/JavaScript and Bootstrap.' picture={FrontendMentorChallenges} code='https://github.com/Petrosdevri/Frontend-Mentor-Challenges' demo='https://frontend-mentor-petrosdevri.netlify.app/' />
                <ProjectCard title='Greek Values' description='The ultimate Greek political quiz, GreekValues, tries to identify popular opinions with Greek ideologies and parties. Built on React.' picture={GreekValues} code='https://github.com/PoliVerse/GreekValues' demo='https://greek-values.vercel.app/' />
            </div>
            <div className='d-flex justify-content-center align-items-center gap-4'>
            <ProjectCard title='Greek VAT Calculator' description='An HTML/CSS/JavaScript website in which users can calculate VAT rates in Greece by inserting their costs.' picture={GreekVATCalculator} code='https://github.com/Petrosdevri/Greek-VAT-Calculator' demo='https://greek-vat-calculator.vercel.app/' />
                <ProjectCard title='IP Address Finder' description='A page built with NodeJS which shows your IP Address details.' picture={IPAddressFinder} code='https://github.com/Petrosdevri/IP-Address-Finder' demo='https://ip-address-finder.onrender.com/' />
                <ProjectCard title='Jason Portfolio' description='A single-page portfolio website built on React for a friend of mine.' picture={JasonPortfolio} code='https://github.com/Petrosdevri/JasonPortfolio' demo='https://jasonkehagias.netlify.app/' />
            </div>
            <div className='d-flex justify-content-center align-items-center gap-4'>
                <ProjectCard title='Product CRUD App' description='An Electron and MySQL sample app. Users can submit inputs about a product which are stored at a database and displayed at the interface.' picture='' code='https://github.com/Petrosdevri/Product-CRUD-App' demo='' />
                <ProjectCard title='React Quiz' description='A sample quiz built on React featuring questions about Greece.' picture={ReactQuiz} code='https://github.com/Petrosdevri/React-Greece-Quiz' demo='https://react-greece-quiz.netlify.app/' />
                <ProjectCard title='Web Scrapers' description='A collection of web scrapers designed to extract news articles from various websites.' picture={WebScrapers} code='https://github.com/Petrosdevri/Web-Scrapers' demo='' />
            </div>
        </Stack>
    );
}