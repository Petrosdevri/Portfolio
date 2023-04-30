import React from 'react';
import { Stack } from 'react-bootstrap';
import GitHubCalendar from 'react-github-calendar';

export default function GithubCalendar() {
    return (
        <Stack className='github-calendar' gap={4}>
            <h2>GitHub Contribution Frequency</h2>
            <GitHubCalendar blockSize={15} color='#bcccdc' hideTotalCount={true} username='petrosdevri' />
        </Stack>
    );
}