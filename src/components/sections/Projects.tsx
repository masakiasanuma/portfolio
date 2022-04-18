import React from 'react';
import styled from 'styled-components';

import {
    Box,
    Heading,
    Image,
    Text,
    Button,
    Popover,
    PopoverArrow,
    PopoverBody,
    PopoverCloseButton,
    PopoverContent,
    PopoverHeader,
    PopoverTrigger,
} from '@chakra-ui/react';

import mts from '../../images/MTS.png';
import mangadex from '../../images/mangadexterity.png';
import portfolio from '../../images/portfolio.png';
import neocirc from '../../images/neocirc.png';
import rgb from '../../images/rgb.png';
import zappay from '../../images/zappay.png';
import raytrace from '../../images/raytrace.png';

import {
    FaReact,
    FaJava,
    FaBootstrap,
    FaSwift,
    FaPython,
    FaNodeJs,
    FaHtml5,
    FaCss3Alt,
    FaGithub,
    FaBus,
    FaCode,
} from 'react-icons/fa';

import {
    SiJavascript,
    SiStyledcomponents,
    SiThreedotjs,
    SiTypescript,
} from 'react-icons/si';

import { LangState } from '../../lang';
import { observer } from 'mobx-react';

// Component featuring projects I have worked on
const Projects = observer(() => {
    const iconSize = 30;
    return (
        <Wrap>
            <Heading size='3xl'>{LangState.getLang().projects}</Heading>
            <ProjectsWrap>
                <ProjectEntry width={{ base: '100%', md: '40%' }} borderWidth='1px' borderRadius='lg'>
                    <ProjectPic src={neocirc} alt={'NeoCirc'} />
                    <Content>
                        <Title fontSize='2xl'>
                            {LangState.getLang().neocirc}
                        </Title>
                        <Description fontSize='lg'>
                            {LangState.getLang().neocircDesc}
                        </Description>
                    </Content>
                    <Footer>
                        <ActionButton
                            rightIcon={<FaGithub size={20} />}
                            colorScheme='blackAlpha'
                            onClick={() => {
                                const win = window.open('https://github.com/NeoCirc/neocirc-website', '_blank')!;
                                win.focus();
                            }}
                        >
                            {LangState.getLang().githubRepo}
                        </ActionButton>
                        <TechUsed fontSize='lg'>
                            <IconWrap>
                                <FaReact size={iconSize} />
                            </IconWrap>
                            <IconWrap>
                                <SiStyledcomponents size={iconSize} />
                            </IconWrap>
                        </TechUsed>
                    </Footer>
                </ProjectEntry>
                <ProjectEntry width={{ base: '100%', md: '40%' }} borderWidth='1px' borderRadius='lg'>
                    <ProjectPic src={portfolio} alt={'Portfolio'} />
                    <Content>
                        <Title fontSize='2xl'>
                            {LangState.getLang().portfolio}
                        </Title>
                        <Description fontSize='lg'>
                            {LangState.getLang().portDesc}
                        </Description>
                    </Content>
                    <Footer>
                        <ActionButton
                            rightIcon={<FaGithub size={20} />}
                            colorScheme='blackAlpha'
                            onClick={() => {
                                const win = window.open('https://github.com/Masasasaki/portfolio/tree/master', '_blank')!;
                                win.focus();
                            }}
                        >
                            {LangState.getLang().githubRepo}
                        </ActionButton>
                        <TechUsed fontSize='lg'>
                            <IconWrap>
                                <FaReact size={iconSize} />
                            </IconWrap>
                            <IconWrap>
                                <SiTypescript size={iconSize} />
                            </IconWrap>
                            <IconWrap>
                                <SiStyledcomponents size={iconSize} />
                            </IconWrap>
                            <Text paddingLeft='5px'>Chakra UI</Text>
                        </TechUsed>
                    </Footer>
                </ProjectEntry>
                <ProjectEntry width={{ base: '100%', md: '40%' }} borderWidth='1px' borderRadius='lg'>
                    <ProjectPic src={raytrace} alt={'Ray Tracer'} />
                    <Content>
                        <Title fontSize='2xl'>
                            {LangState.getLang().rayTracer}
                        </Title>
                        <Description fontSize='lg'>
                            {LangState.getLang().rayDesc}
                        </Description>
                    </Content>
                    <Footer>
                        <ActionButton
                            rightIcon={<FaGithub size={20} />}
                            colorScheme='blackAlpha'
                            onClick={() => {
                                const win = window.open('https://github.com/masakiasanuma/ray-tracer', '_blank')!;
                                win.focus();
                            }}
                        >
                            {LangState.getLang().githubRepo}
                        </ActionButton>
                        <TechUsed fontSize='lg'>
                            <IconWrap>
                                <SiTypescript size={iconSize} />
                            </IconWrap>
                            <IconWrap>
                                <SiThreedotjs size={iconSize} />
                            </IconWrap>
                        </TechUsed>
                    </Footer>
                </ProjectEntry>
                <ProjectEntry width={{ base: '100%', md: '40%' }} borderWidth='1px' borderRadius='lg'>
                    <ProjectPic src={mts} alt={'MTS'} />
                    <Content>
                        <Title fontSize='2xl'>
                            {LangState.getLang().mts}
                        </Title>
                        <Description fontSize='lg'>
                            {LangState.getLang().mtsDesc}
                        </Description>
                    </Content>
                    <Footer>
                        <Popover>
                            <PopoverTrigger>
                                <ActionButton
                                    rightIcon={<FaBus size={20} />}
                                    colorScheme='blackAlpha'
                                >
                                    {LangState.getLang().classProject}
                                </ActionButton>
                            </PopoverTrigger>
                            <PopoverContent color='white' bg='black' borderColor='black'>
                                <PopoverHeader fontWeight='bolder' fontSize='xl'>
                                    {LangState.getLang().unfortunately}
                                </PopoverHeader>
                                <PopoverArrow />
                                <PopoverCloseButton />
                                <PopoverBody fontSize='lg'>{LangState.getLang().unfortDesc}</PopoverBody>
                            </PopoverContent>
                        </Popover>
                        <TechUsed fontSize='lg'>
                            <IconWrap>
                                <FaJava size={iconSize} />
                            </IconWrap>
                        </TechUsed>
                    </Footer>
                </ProjectEntry>
                <ProjectEntry width={{ base: '100%', md: '40%' }} borderWidth='1px' borderRadius='lg'>
                    <ProjectPic src={mangadex} alt={'Mangadex'} />
                    <Content>
                        <Title fontSize='2xl'>
                            {LangState.getLang().mangadex}
                        </Title>
                        <Description fontSize='lg'>
                            {LangState.getLang().mangaDesc}
                        </Description>
                    </Content>
                    <Footer>
                        <ActionButton
                            rightIcon={<FaGithub size={20} />}
                            colorScheme='blackAlpha'
                            onClick={() => {
                                const win = window.open('https://github.com/Masasasaki/Mangadexterity', '_blank')!;
                                win.focus();
                            }}
                        >
                            {LangState.getLang().githubRepo}
                        </ActionButton>
                        <TechUsed fontSize='lg'>
                            <IconWrap>
                                <FaReact size={iconSize} />
                            </IconWrap>
                            <IconWrap>
                                <FaNodeJs size={iconSize} />
                            </IconWrap>
                            <IconWrap>
                                <FaBootstrap size={iconSize} />
                            </IconWrap>
                        </TechUsed>
                    </Footer>
                </ProjectEntry>
                <ProjectEntry width={{ base: '100%', md: '40%' }} borderWidth='1px' borderRadius='lg'>
                    <ProjectPic src={zappay} alt={'Zap Pay'} />
                    <Content>
                        <Title fontSize='2xl'>
                            {LangState.getLang().zapPay}
                        </Title>
                        <Description fontSize='lg'>
                            {LangState.getLang().zapPayDesc}
                        </Description>
                    </Content>
                    <Footer>
                        <ActionButton
                            rightIcon={<FaCode size={20} />}
                            colorScheme='blackAlpha'
                            onClick={() => {
                                const win = window.open('https://devpost.com/software/zap-pay', '_blank')!;
                                win.focus();
                            }}
                        >
                            {LangState.getLang().devPost}
                        </ActionButton>
                        <TechUsed fontSize='lg'>
                            <IconWrap>
                                <FaPython size={iconSize} />
                            </IconWrap>
                            <IconWrap>
                                <FaSwift size={iconSize} />
                            </IconWrap>
                        </TechUsed>
                    </Footer>
                </ProjectEntry>
                <ProjectEntry width={{ base: '100%', md: '40%' }} borderWidth='1px' borderRadius='lg'>
                    <ProjectPic src={rgb} alt={'RGB Color Guess'} />
                    <Content>
                        <Title fontSize='2xl'>
                            {LangState.getLang().rgb}
                        </Title>
                        <Description fontSize='lg'>
                            {LangState.getLang().rgbDesc}
                        </Description>
                    </Content>
                    <Footer>
                        <ActionButton
                            rightIcon={<FaGithub size={20} />}
                            colorScheme='blackAlpha'
                            onClick={() => {
                                const win = window.open('https://github.com/Masasasaki/RGB-Game', '_blank')!;
                                win.focus();
                            }}
                        >
                            {LangState.getLang().githubRepo}
                        </ActionButton>
                        <TechUsed fontSize='lg'>
                            <IconWrap>
                                <SiJavascript size={iconSize} />
                            </IconWrap>
                            <IconWrap>
                                <FaHtml5 size={iconSize} />
                            </IconWrap>
                            <IconWrap>
                                <FaCss3Alt size={iconSize} />
                            </IconWrap>
                        </TechUsed>
                    </Footer>
                </ProjectEntry>
            </ProjectsWrap>
        </Wrap>
    );
});

const Wrap = styled.div`
    display: flex;
    flex-direction: column;
    padding: 20px;
`;

const ProjectPic = styled(Image)`
`;

const ProjectsWrap = styled(Box)`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    padding-top: 20px;
`;

const ProjectEntry = styled(Box)`
    margin: 20px;
    display: flex;
    flex-direction: column;
`;

const Content = styled(Box)`
    padding: 10px;
`;

const Title = styled(Text)`
    font-weight: bolder;
    padding: 5px;
`;

const Description = styled(Text)`
    padding: 5px;
`;

const TechUsed = styled(Text)`
    display: flex;
    flex-direction: row;
    background: #F5F5F5;
    padding: 10px;
`;

const IconWrap = styled.span`
    padding: 0px 5px 0px 5px;
`;

const Footer = styled(Box)`
    margin-top: auto;
`;

const ActionButton = styled(Button)`
    margin: 10px 10px 20px 10px;
    background: black;
    color: white;
`;

export { Projects };