import React from 'react';
import styled from 'styled-components';

import {
    Box,
    Heading,
    Text,
    HStack,
    Button
} from '@chakra-ui/react';

import ReactPlayer from 'react-player';

import {
    FaYoutube,
    FaInstagram,
} from 'react-icons/fa';

import { LangState } from '../../lang';
import { observer } from 'mobx-react';

// Component featuring my guitar youtube channel & instagram
const Music = observer(() => {
    return (
        <Wrap>
            <Heading size='3xl'>{LangState.getLang().music}</Heading>
            <Text fontSize={{ base: '2xl' }} paddingTop={{ base: '20px' }}>
                {LangState.getLang().musicDesc}
            </Text>
            <HStack paddingTop={{ base: '10px' }}>
                <Button
                    color='white'
                    leftIcon={<FaYoutube size={20} />}
                    background='#FF0000'
                    _hover={{ bg: '#FF0000' }}
                    onClick={() => {
                        const win = window.open('https://www.youtube.com/channel/UCth0pz1bQjWFVoX422pMypQ', '_blank');
                        win.focus();
                    }}
                >
                    {LangState.getLang().youtube}
                </Button>
                <Button
                    color='white'
                    leftIcon={<FaInstagram size={20} />}
                    background='#833AB4'
                    _hover={{ bg: '#833AF4' }}
                    onClick={() => {
                        const win = window.open('https://www.instagram.com/yuru_guitar/', '_blank');
                        win.focus();
                    }}
                >
                    {LangState.getLang().instagram}
                </Button>
            </HStack>
            <VideoWrap>
                <Text fontSize={{ base: 'xl' }} fontWeight='bolder' padding='10px 0px 10px 0px'>
                    {LangState.getLang().herMost}
                </Text>
                <ReactPlayer url='https://www.youtube.com/watch?v=bAxEZuP0rmo' />
            </VideoWrap>
            <VideoWrap>
                <Text fontSize={{ base: 'xl' }} fontWeight='bolder' padding='10px 0px 10px 0px'>
                    {LangState.getLang().kakurenbo}
                </Text>
                <ReactPlayer url='https://www.youtube.com/watch?v=tEjLwjOWmbk' />
            </VideoWrap>
            <VideoWrap>
                <Text fontSize={{ base: 'xl' }} fontWeight='bolder' padding='10px 0px 10px 0px'>
                    {LangState.getLang().viator}
                </Text>
                <ReactPlayer url='https://www.youtube.com/watch?v=OMAyOiLmnmY' />
            </VideoWrap>
            <VideoWrap>
                <Text fontSize={{ base: 'xl' }} fontWeight='bolder' padding='10px 0px 10px 0px'>
                    {LangState.getLang().sadness}
                </Text>
                <ReactPlayer url='https://youtu.be/PJULJ_MEVAQ' />
            </VideoWrap>
        </Wrap>
    );
});

const Wrap = styled.div`
    display: flex;
    flex-direction: column;
    padding: 20px;
`;

const VideoWrap = styled(Box)`
    margin: 30px 0px 10px 0px;
    border-radius: 10px;
    border-width: 1px;
    padding: 10px;
`;

export { Music };