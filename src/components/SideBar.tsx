import React from 'react';
import styled from 'styled-components';

import {
    Center,
    Text,
    Image,
    Box,
    Button,
    HStack,
    Divider,
} from '@chakra-ui/react';

import { EmailIcon } from '@chakra-ui/icons';
import { FaLinkedin, FaGithub, FaDownload } from 'react-icons/fa';
import profile from '../images/guitar1.jpeg';
import resume from '../resume.pdf';

// Sidebar component displaying contact info, name, and profile picture
const SideBar = (props: { backgroundColor: any; }) => {
    return (
        <SideBarWrap position={{ lg: 'fixed', md: 'relative' }} backgroundColor={props.backgroundColor}>
            <Box flexShrink={0}>
                <Image
                    src={profile}
                    alt='Masaki Asanuma'
                    borderRadius='full'
                    width={{ base: '275px' }}
                />
            </Box>
            <Text fontSize={{ base: '40px' }}>Masaki <Bold>Asanuma</Bold></Text>
            <Divider />
            <Text fontSize={{ base: 'lg' }}><EmailIcon /> - masakiasanuma@outlook.com</Text>
            <HStack paddingTop='10px'>
                <Button
                    background='#0072B1'
                    _hover={{ bg: '#0050B1' }}
                    onClick={() => {
                        const win = window.open('https://www.linkedin.com/in/masakiasanuma/', '_blank')!;
                        win.focus();
                    }}
                >
                    <FaLinkedin size={20} />
                </Button>
                <Button
                    background='#333'
                    _hover={{ bg: '#222' }}
                    onClick={() => {
                        const win = window.open('https://github.com/Masasasaki', '_blank')!;
                        win.focus();
                    }}
                >
                    <FaGithub size={20} />
                </Button>
                <Button
                    background='#48435C'
                    _hover={{ bg: '#484F5C' }}
                >
                    <a href={resume} download='Masaki_Asanuma_Resume'>
                        <FaDownload size={20} />
                    </a>
                </Button>
            </HStack>
        </SideBarWrap>
    )
};

const SideBarWrap = styled(Center)<{ backgroundColor: any }>`
    flex-direction: column;
    background: ${e => e.backgroundColor};
    color: white;
    height: 100vh;
    padding: 0px 40px 0px 40px;
    -webkit-transition: background 1s;
    transition: background 1s;
`;

const Bold = styled.span`
    font-weight: bold;
`;

export { SideBar };