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
import profile from '../images/profile.jpeg';
import resume from '../resume.pdf';

import { LangState } from '../lang';
import { observer } from 'mobx-react';

// Sidebar component displaying contact info, name, and profile picture
const SideBar = observer((props: { backgroundColor: any; }) => {
    return (
        <SideBarWrap position={{ lg: 'fixed', md: 'relative' }} backgroundColor={props.backgroundColor}>
            <Box flexShrink={0}>
                <Image
                    src={profile}
                    alt='Masaki Asanuma'
                    borderRadius='full'
                    width={{ base: '300px' }}
                />
            </Box>
            <Text fontSize={{ base: '40px' }}>{LangState.getLang().firstName} <Bold>{LangState.getLang().lastName}</Bold></Text>
            <Divider />
            {/* Commenting out the status bar until I start looking for a new job */}
            {/* <Status fontSize={{ base: 'lg' }}>{LangState.getLang().status}</Status> */}
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
                        const win = window.open('https://github.com/masakiasanuma', '_blank')!;
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
                <Button
                    background='black'
                    _hover={{ bg: '#222' }}
                    onClick={() => {
                        LangState.getCurrLang() === 'en' ? LangState.setLang('jp') : LangState.setLang('en');
                    }}
                >
                    {LangState.getCurrLang() === 'jp' ? 'English' : '日本語'}
                </Button>
            </HStack>
        </SideBarWrap>
    )
});

const SideBarWrap = styled(Center)<{ backgroundColor: any }>`
    flex-direction: column;
    background: ${e => e.backgroundColor};
    color: white;
    height: 100vh;
    padding: 0px 20px 0px 20px;
    -webkit-transition: background 1s;
    transition: background 1s;
`;

const Bold = styled.span`
    font-weight: bold;
`;

// const Status = styled(Text)`
//     background: white;
//     color: black;
//     font-weight: bolder;
//     margin: 10px;
//     padding: 0px 10px 0px 10px;
// `;

export { SideBar };