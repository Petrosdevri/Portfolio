import { React, useState } from 'react';
import { Stack } from 'react-bootstrap';
import LazyLoad from 'react-lazyload';
import { Sibabel as Babel, Sibootstrap as Bootstrap, Sibrave as Brave, Sicanva as Canva, Sichocolatey as Chocolatey, SicssThree as CSS, Sielectron as Electron, Sieslint as ESLint, Siexpress as Express, Sifigma as Figma, Sigatsby as Gatsby, 
    Sigit as Git, Sigithub as GitHub, Sihtml5 as HTML, Sijavascript as JavaScript, Sijest as Jest, Sijson as JSON, Simarkdown as Markdown, Simysql as MySQL, Sinetlify as Netlify, Sinextdotjs as NextJS, Sinodedotjs as NodeJS, Sinpm as NPM, 
    Sipostman as Postman, Sipowershell as PowerShell, Siprettier as Prettier, Sireact as React1, Sireactrouter as ReactRouter, Sisass as SASS, Sisolidity as Solidity, Sistylus as Stylus, Sitypescript as TypeScript, Siwindowsterminal as Terminal, Sivercel as Vercel, Sivisualstudiocode as VSCode, Sivscodium as VSCodium, Siwebpack as Webpack } from '@icons-pack/react-simple-icons';

export default function CompleteTechStack() {
    const [iconColor, setIconColor] = useState(['#fff', '#fff', '#fff', '#fff', '#fff', '#fff', '#fff', '#fff', '#fff', '#fff', '#fff', '#fff', '#fff', '#fff', '#fff', '#fff', '#fff', '#fff', '#fff', '#fff', '#fff', '#fff', '#fff', '#fff', '#fff', '#fff', '#fff', '#fff', '#fff', '#fff', '#fff', '#fff', '#fff', '#fff', '#fff', '#fff', '#fff', '#fff', '#fff', '#fff', '#fff']);
    const hoverColors = ['#E34F26', '#1572B6', '#F7DF1E', '#000000', '#F18C00', '#E6E6E6', '#3178C6',
    '#7952B3', '#47848F', '#000000', '#663399', '#C21325', '#000000', '#339933', '#61DAFB', '#CA4245', '#CC6699', '#333333', 
    '#80B5E3', '#CB3837', '#5391FE', '#4D4D4D', '#007ACC', '#2F80ED',
    '#00C4CC', '#F24E1E', '#00C7B7', '#000000',
    '#F9DC3E', '#FB542B', '#4B32C3', '#F05032', '#181717', '#000000', '#FF6C37', '#F7B93E', '#8DD6F9']

    const onMouseOver = () => {
        setIconColor(hoverColors);
    }

    const onMouseOut = () => {
        setIconColor(['#fff', '#fff', '#fff', '#fff', '#fff', '#fff', '#fff', '#fff', '#fff', '#fff', '#fff', '#fff', '#fff', '#fff', '#fff', '#fff', '#fff', '#fff', '#fff', '#fff', '#fff', '#fff', '#fff', '#fff', '#fff', '#fff', '#fff', '#fff', '#fff', '#fff', '#fff', '#fff', '#fff', '#fff', '#fff', '#fff', '#fff']);
    }

    return (
        <Stack className='tech-stack2' gap={4}>
            <h2>Tech Stack</h2>
            <legend>Languages</legend>
            <Stack className='stack' direction='horizontal'>
                <a href='https://developer.mozilla.org/en-US/docs/Glossary/HTML5' rel='noreferrer' target='_blank'>
                    <LazyLoad height={50} once><HTML color={iconColor[0]} className='tech-stack-icon' id='html' size={50} title='' onMouseOver={() => onMouseOver(0)} onMouseOut={() => onMouseOut(0)} /></LazyLoad>
                </a>
                <a href='https://developer.mozilla.org/en-US/docs/Web/CSS' rel='noreferrer' target='_blank'>
                    <LazyLoad height={50} once><CSS color={iconColor[1]} className='tech-stack-icon' id='css' size={50} title='' onMouseOver={() => onMouseOver(1)} onMouseOut={() => onMouseOut(1)} /></LazyLoad>
                </a>
                <a href='https://developer.mozilla.org/en-US/docs/Web/JavaScript' rel='noreferrer' target='_blank'>
                    <LazyLoad height={50} once><JavaScript color={iconColor[2]} className='tech-stack-icon' id='js' size={50} title='' onMouseOver={() => onMouseOver(2)} onMouseOut={() => onMouseOut(2)} /></LazyLoad>
                </a>
                <a href='https://daringfireball.net/projects/markdown/' rel='noreferrer' target='_blank'>
                    <LazyLoad height={50} once><Markdown color={iconColor[3]} className='tech-stack-icon' id='markdown' size={50} title='' onMouseOver={() => onMouseOver(3)} onMouseOut={() => onMouseOut(3)} /></LazyLoad>
                </a>
                <a href='https://www.mysql.com/' rel='noreferrer' target='_blank'>
                    <LazyLoad height={50} once><MySQL color={iconColor[4]} className='tech-stack-icon' id='mysql' size={50} title='' onMouseOver={() => onMouseOver(4)} onMouseOut={() => onMouseOut(4)} /></LazyLoad>
                </a>
                <a href='https://soliditylang.org/' rel='noreferrer' target='_blank'>
                    <LazyLoad height={50} once><Solidity color={iconColor[5]} className='tech-stack-icon' id='solidity' size={50} title='' onMouseOver={() => onMouseOver(5)} onMouseOut={() => onMouseOut(5)} /></LazyLoad>
                </a>
                <a href='https://www.typescriptlang.org/' rel='noreferrer' target='_blank'>
                    <LazyLoad height={50} once><TypeScript color={iconColor[6]} className='tech-stack-icon' id='ts' size={50} title='' onMouseOver={() => onMouseOver(6)} onMouseOut={() => onMouseOut(6)} /></LazyLoad>
                </a>
            </Stack>
            <legend>Frameworks & Libraries</legend>
            <Stack direction='horizontal' className='stack'>
                <a href='https://getbootstrap.com/' rel='noreferrer' target='_blank'>
                    <LazyLoad height={50} once><Bootstrap color={iconColor[7]} className='tech-stack-icon' id='bootstrap' size={50} title='' onMouseOver={() => onMouseOver(7)} onMouseOut={() => onMouseOut(7)} /></LazyLoad>
                </a>
                <a href='https://www.electronjs.org/' rel='noreferrer' target='_blank'>
                    <LazyLoad height={50} once> <Electron color={iconColor[8]} className='tech-stack-icon' id='electron' size={50} title='' onMouseOver={() => onMouseOver(8)} onMouseOut={() => onMouseOut(8)} /></LazyLoad>
                </a>
                <a href='https://expressjs.com/' rel='noreferrer' target='_blank'>
                    <LazyLoad height={50} once><Express color={iconColor[9]} className='tech-stack-icon' id='express' size={50} title='' onMouseOver={() => onMouseOver(9)} onMouseOut={() => onMouseOut(9)} /></LazyLoad>
                </a>
                <a href='https://www.gatsbyjs.com/' rel='noreferrer' target='_blank'>
                    <LazyLoad height={50} once><Gatsby color={iconColor[10]} className='tech-stack-icon' id='gatsby' size={50} title='' onMouseOver={() => onMouseOver(10)} onMouseOut={() => onMouseOut(10)} /></LazyLoad>
                </a>
                <a href='https://jestjs.io/' rel='noreferrer' target='_blank'>
                    <LazyLoad height={50} once><Jest color={iconColor[11]} className='tech-stack-icon' id='jest' size={50} title='' onMouseOver={() => onMouseOver(11)} onMouseOut={() => onMouseOut(11)} /></LazyLoad>
                </a>
                <a href='https://nextjs.org/' rel='noreferrer' target='_blank'>
                    <LazyLoad height={50} once><NextJS color={iconColor[12]} className='tech-stack-icon' id='nextjs' size={50} title='' onMouseOver={() => onMouseOver(12)} onMouseOut={() => onMouseOut(12)} /></LazyLoad>
                </a>
                <a href='https://nodejs.org/en/' rel='noreferrer' target='_blank'>
                    <LazyLoad height={50} once><NodeJS color={iconColor[13]} className='tech-stack-icon' id='nodejs' size={50} title='' onMouseOver={() => onMouseOver(13)} onMouseOut={() => onMouseOut(13)} /></LazyLoad>
                </a>
                <a href='https://reactjs.org/' rel='noreferrer' target='_blank'>
                    <LazyLoad height={50} once><React1 color={iconColor[14]} className='tech-stack-icon' id='react' size={50} title='' onMouseOver={() => onMouseOver(14)} onMouseOut={() => onMouseOut(14)} /></LazyLoad>
                </a>
                <a href='https://reactrouter.com/en/main' rel='noreferrer' target='_blank'>
                    <LazyLoad height={50} once><ReactRouter color={iconColor[15]} className='tech-stack-icon' id='react-router' size={50} title='' onMouseOver={() => onMouseOver(15)} onMouseOut={() => onMouseOut(14)} /></LazyLoad>
                </a>
                <a href='https://sass-lang.com/' rel='noreferrer' target='_blank'>
                    <LazyLoad height={50} once><SASS color={iconColor[16]} className='tech-stack-icon' id='sass' size={50} title='' onMouseOver={() => onMouseOver(16)} onMouseOut={() => onMouseOut(16)} /></LazyLoad>
                </a>
                <a href='https://stylus-lang.com/' rel='noreferrer' target='_blank'>
                    <LazyLoad height={50} once><Stylus color={iconColor[17]} className='tech-stack-icon' id='stylus' size={50} title='' onMouseOver={() => onMouseOver(17)} onMouseOut={() => onMouseOut(17)} /></LazyLoad>
                </a>
            </Stack>
            <legend>Code Editors & Command Lines</legend>
            <Stack direction='horizontal' className='stack'>
                <a href='https://chocolatey.org/' rel='noreferrer' target='_blank'>
                    <LazyLoad height={50} once><Chocolatey color={iconColor[18]} className='tech-stack-icon' id='chocolatey' size={50} title='' onMouseOver={() => onMouseOver(18)} onMouseOut={() => onMouseOut(18)} /></LazyLoad>
                </a>
                <a href='https://www.npmjs.com/' rel='noreferrer' target='_blank'>
                    <LazyLoad height={50} once><NPM color={iconColor[19]} className='tech-stack-icon' id='npm' size={50} title='' onMouseOver={() => onMouseOver(19)} onMouseOut={() => onMouseOut(19)} /></LazyLoad>
                </a>
                <a href='https://microsoft.com/powershell' rel='noreferrer' target='_blank'>
                    <LazyLoad height={50} once><PowerShell color={iconColor[20]} className='tech-stack-icon' id='powershell' size={50} title='' onMouseOver={() => onMouseOver(20)} onMouseOut={() => onMouseOut(20)} /></LazyLoad>
                </a>
                <a href='https://aka.ms/terminal' rel='noreferrer' target='_blank'>
                    <LazyLoad height={50} once><Terminal color={iconColor[21]} className='tech-stack-icon' id='terminal' size={50} title='' onMouseOver={() => onMouseOver(21)} onMouseOut={() => onMouseOut(21)} /></LazyLoad>
                </a>
                <a href='https://code.visualstudio.com/' rel='noreferrer' target='_blank'>
                    <LazyLoad height={50} once><VSCode color={iconColor[22]} className='tech-stack-icon' id='vscode' size={50} title='' onMouseOver={() => onMouseOver(22)} onMouseOut={() => onMouseOut(22)} /></LazyLoad>
                </a>
                <a href='https://vscodium.com/' rel='noreferrer' target='_blank'>
                    <LazyLoad height={50} once><VSCodium color={iconColor[23]} className='tech-stack-icon' id='vscodium' size={50} title='' onMouseOver={() => onMouseOver(23)} onMouseOut={() => onMouseOut(23)} /></LazyLoad>
                </a>
            </Stack>
            <legend>Design & Hosting Tools</legend>
            <Stack direction='horizontal' className='stack'>
                <a href='https://www.canva.com/' rel='noreferrer' target='_blank'>
                    <LazyLoad height={50} once><Canva color={iconColor[24]} className='tech-stack-icon' id='canva' size={50} title='' onMouseOver={() => onMouseOver(24)} onMouseOut={() => onMouseOut(24)} /></LazyLoad>
                </a>
                <a href='https://www.figma.com/' rel='noreferrer' target='_blank'>
                    <LazyLoad height={50} once><Figma color={iconColor[25]} className='tech-stack-icon' id='figma' size={50} title='' onMouseOver={() => onMouseOver(25)} onMouseOut={() => onMouseOut(25)} /></LazyLoad>
                </a>
                <a href='https://www.netlify.com/' rel='noreferrer' target='_blank'>
                    <LazyLoad height={50} once><Netlify color={iconColor[26]} className='tech-stack-icon' id='netlify' size={50} title='' onMouseOver={() => onMouseOver(26)} onMouseOut={() => onMouseOut(26)} /></LazyLoad>
                </a>
                <a href='https://www.vercel.com/' rel='noreferrer' target='_blank'>
                    <LazyLoad height={50} once><Vercel color={iconColor[27]} className='tech-stack-icon' id='vercel' size={50} title='' onMouseOver={() => onMouseOver(27)} onMouseOut={() => onMouseOut(27)} /></LazyLoad>
                </a>
            </Stack>
            <legend>Web Tools</legend>
            <Stack direction='horizontal' className='stack'>
                <a href='https://babeljs.io/' rel='noreferrer' target='_blank'>
                    <LazyLoad height={50} once><Babel color={iconColor[28]} className='tech-stack-icon' id='babel' size={50} title='' onMouseOver={() => onMouseOver(28)} onMouseOut={() => onMouseOut(28)} /></LazyLoad>
                </a>
                <a href='https://brave.com/' rel='noreferrer' target='_blank'>
                    <LazyLoad height={50} once><Brave color={iconColor[29]} className='tech-stack-icon' id='brave' size={50} title='' onMouseOver={() => onMouseOver(29)} onMouseOut={() => onMouseOut(29)} /></LazyLoad>
                </a>
                <a href='https://eslint.org/' rel='noreferrer' target='_blank'>
                    <LazyLoad height={50} once><ESLint color={iconColor[30]} className='tech-stack-icon' id='eslint' size={50} title='' onMouseOver={() => onMouseOver(30)} onMouseOut={() => onMouseOut(30)} /></LazyLoad>
                </a>
                <a href='https://git-scm.com/' rel='noreferrer' target='_blank'>
                <LazyLoad height={50} once><Git color={iconColor[31]} className='tech-stack-icon' id='git' size={50} title='' onMouseOver={() => onMouseOver(31)} onMouseOut={() => onMouseOut(31)} /></LazyLoad>
                </a>
                <a href='https://github.com/' rel='noreferrer' target='_blank'>
                    <LazyLoad height={50} once><GitHub color={iconColor[32]} className='tech-stack-icon' id='github' size={50} title='' onMouseOver={() => onMouseOver(32)} onMouseOut={() => onMouseOut(32)} /></LazyLoad>
                </a>
                <a href='https://www.json.org/json-en.html' rel='noreferrer' target='_blank'>
                    <LazyLoad height={50} once><JSON color={iconColor[33]} className='tech-stack-icon' id='json' size={50} title='' onMouseOver={() => onMouseOver(33)} onMouseOut={() => onMouseOut(33)} /></LazyLoad>
                </a>
                <a href='https://www.postman.com/' rel='noreferrer' target='_blank'>
                    <LazyLoad height={50} once><Postman color={iconColor[34]} className='tech-stack-icon' id='postman' size={50} title='' onMouseOver={() => onMouseOver(34)} onMouseOut={() => onMouseOut(34)} /></LazyLoad>
                </a>
                <a href='https://prettier.io/' rel='noreferrer' target='_blank'>
                    <LazyLoad height={50} once><Prettier color={iconColor[35]} className='tech-stack-icon' id='prettier' size={50} title='' onMouseOver={() => onMouseOver(35)} onMouseOut={() => onMouseOut(35)} /></LazyLoad>
                </a>
                <a href='https://webpack.js.org/' rel='noreferrer' target='_blank'>
                    <LazyLoad height={50} once><Webpack color={iconColor[36]} className='tech-stack-icon' id='webpack' size={50} title='' onMouseOver={() => onMouseOver(36)} onMouseOut={() => onMouseOut(36)} /></LazyLoad>
                </a>
            </Stack>
        </Stack>
    );
}