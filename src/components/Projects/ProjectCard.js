/* eslint-disable react/prop-types */
import React from 'react';
import { Button, Card, Stack } from 'react-bootstrap';
import { Sigithub as Github } from '@icons-pack/react-simple-icons';

export default function ProjectCard(props) {
    return (
        <Card style={{ background: '#9AA5B1', width: '15rem', height: '22rem' }}>
            <Card.Img variant='top' src={props.picture} width={260} height={160} />
            <Card.Body>
                <Card.Title>{props.title}</Card.Title>
                <Card.Text>
                    {props.description}
                </Card.Text>
                <Stack direction='horizontal' gap={3}>
                    <Button className='card-btn'><a href={props.code} target='_blank' rel='noreferrer'><Github class='card-icon' size={20} title='' /> Code</a></Button>
                    <Button className='card-btn'><a href={props.demo} target='_blank' rel='noreferrer'>Demo</a></Button>
                </Stack>
            </Card.Body>
        </Card>
    )
}