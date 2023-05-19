import React from 'react';
import TypewriterComponent from 'typewriter-effect';

export default function Type() {
    return (
        <TypewriterComponent options={{
            'strings': ['Front End Developer', 'Web Developer', 'JavaScript Developer', 'Open Source Contributor', 'Web Designer',],
            'autoStart': true,
            'loop': true,
            'deleteSpeed': 50,
        }} />
    )
}