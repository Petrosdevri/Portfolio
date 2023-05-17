/* eslint-disable react/prop-types */
import React from 'react';
import { Button, Card, Stack } from 'react-bootstrap';
import { Sigithub as Github } from '@icons-pack/react-simple-icons';

export default function ProjectCard(props) {
    return (
        <Card className='project-card'>
            <Card.Img variant='top' className='card-img' src={props.picture} width={260} height={160} />
            <Card.Body>
                <Card.Title className='project-title'>{props.title}</Card.Title>
                <Card.Text className='project-description'>
                    {props.description}
                </Card.Text>
                <Stack direction='horizontal' gap={3}>
                    <Button className='card-btn'><a href={props.code} target='_blank' rel='noreferrer'><Github className='card-icon' size={20} title='' /> Code</a></Button>
                    <Button className='card-btn'><a href={props.demo} target='_blank' rel='noreferrer'>Demo</a></Button>
                </Stack>
            </Card.Body>
        </Card>
    )
}