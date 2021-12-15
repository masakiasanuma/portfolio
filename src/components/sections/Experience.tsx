import React from 'react';
import styled from 'styled-components';

import {
    Heading,
    Image,
    Box,
    Text,
    ListItem,
    UnorderedList,
    Badge,
    Accordion,
    AccordionButton,
    AccordionIcon,
    AccordionItem,
    AccordionPanel,
} from '@chakra-ui/react';

import {
    FaReact,
    FaPython,
    FaDocker,
    FaDatabase,
} from 'react-icons/fa';

import {
    SiGnubash,
    SiPowershell,
    SiStyledcomponents,
    SiDjango,
    SiJetbrains,
    SiMongodb,
    SiRabbitmq,
    SiKubernetes,
    SiPostgresql,
    SiAzuredevops,
    SiAzureartifacts,
    SiMicrosoftsqlserver,
    SiTypescript,
} from 'react-icons/si';

import {
    DiJira,
} from 'react-icons/di';

import {
    RiSafe2Fill,
    RiTestTubeFill,
} from 'react-icons/ri';

import {
    GiPanda,
} from 'react-icons/gi';

import amazon from '../../images/amazon.jpeg';
import kpmg from '../../images/KPMG.jpg';
import ukg from '../../images/ukg.jpg';

import { LangState } from '../../lang';
import { observer } from 'mobx-react';

// Component featuring my relevant experiences for software development
const Experience = observer(() => {
    const iconSize = 30;
    return (
        <Wrap>
            <Heading size='3xl'>{LangState.getLang().experience}</Heading>
            <ExperienceEntry boxShadow='base'>
                <EntryHeader flexDirection={{ base: 'column', sm: 'row' }}>
                    <Image src={amazon} alt='amazon' boxSize='100px' borderRadius='md' />
                    <HeaderInfo>
                        <HeaderWrap
                            flexDirection={{ base: 'column', md: 'row', lg: 'column', xl: 'row' }}
                            alignItems={{ base: 'flex-start', md: 'center', lg: 'flex-start', xl: 'center' }}
                        >
                            <Bold><InfoText fontSize={{ base: '3xl' }}>{LangState.getLang().sde}</InfoText></Bold>
                            <DateBadge>
                                <Badge borderRadius='full' px='2' colorScheme='teal'>
                                    05/2022 - 07/2022
                                </Badge>
                            </DateBadge>
                        </HeaderWrap>
                        <HeaderWrap
                            flexDirection={{ base: 'column', md: 'row', lg: 'column', xl: 'row' }}
                            alignItems={{ base: 'flex-start', md: 'center', lg: 'flex-start', xl: 'center' }}
                        >
                            <InfoText fontSize={{ base: '2xl' }}>{LangState.getLang().amazon}</InfoText>
                            <Box
                                color='gray.500'
                                fontWeight='semibold'
                                letterSpacing='wide'
                                fontSize='xs'
                                textTransform='uppercase'
                                ml='2'
                            >
                                {LangState.getLang().seattle}
                            </Box>
                        </HeaderWrap>
                    </HeaderInfo>
                </EntryHeader>
                <EntryBody>
                    <InfoText fontSize={{ base: 'xl' }}>{LangState.getLang().amazonDesc}</InfoText>
                </EntryBody>
            </ExperienceEntry>
            <ExperienceEntry boxShadow='base'>
                <EntryHeader flexDirection={{ base: 'column', sm: 'row' }}>
                    <Image src={kpmg} alt='kpmg' boxSize='100px' borderRadius='md' />
                    <HeaderInfo>
                        <HeaderWrap
                            flexDirection={{ base: 'column', md: 'row', lg: 'column', xl: 'row' }}
                            alignItems={{ base: 'flex-start', md: 'center', lg: 'flex-start', xl: 'center' }}
                        >
                            <Bold><InfoText fontSize={{ base: '3xl' }}>{LangState.getLang().se}</InfoText></Bold>
                            <DateBadge>
                                <Badge borderRadius='full' px='2' colorScheme='teal'>
                                    01/2021 - 07/2021
                                </Badge>
                            </DateBadge>
                        </HeaderWrap>
                        <HeaderWrap
                            flexDirection={{ base: 'column', md: 'row', lg: 'column', xl: 'row' }}
                            alignItems={{ base: 'flex-start', md: 'center', lg: 'flex-start', xl: 'center' }}
                        >
                            <InfoText fontSize={{ base: '2xl' }}>{LangState.getLang().kit}</InfoText>
                            <Box
                                color='gray.500'
                                fontWeight='semibold'
                                letterSpacing='wide'
                                fontSize='xs'
                                textTransform='uppercase'
                                ml='2'
                            >
                                {LangState.getLang().tokyo}
                            </Box>
                        </HeaderWrap>
                    </HeaderInfo>
                </EntryHeader>
                <EntryBody>
                    <InfoText fontSize={{ base: 'xl' }}>{LangState.getLang().kitDesc}</InfoText>
                    <AccordionWrap allowMultiple>
                        <AccordionItem>
                            <h2>
                            <AccordionButton _expanded={{ bg: '#1245a8', color: 'white', fontWeight: 'bolder' }}>
                                <Box flex='1' textAlign='left'>
                                    {LangState.getLang().docuSearch}
                                </Box>
                                <AccordionIcon />
                            </AccordionButton>
                            </h2>
                            <AccordionPanel pb={4}>
                                <UnorderedList>
                                    <ListItemPoint fontSize='lg'>{LangState.getLang().docuDesc1}</ListItemPoint>
                                    <ListItemPoint fontSize='lg'>{LangState.getLang().docuDesc2}</ListItemPoint>
                                    <ListItemPoint fontSize='lg'>{LangState.getLang().docuDesc3}</ListItemPoint>
                                    <ListItemPoint fontSize='lg'>{LangState.getLang().docuDesc4}</ListItemPoint>
                                    <ListItemPoint fontSize='lg'>{LangState.getLang().docuDesc5}</ListItemPoint>
                                    <ListItemPoint fontSize='lg'>{LangState.getLang().docuDesc6}</ListItemPoint>
                                </UnorderedList>
                            </AccordionPanel>
                        </AccordionItem>
                        <AccordionItem>
                            <h2>
                            <AccordionButton _expanded={{ bg: '#1245a8', color: 'white', fontWeight: 'bolder' }}>
                                <Box flex='1' textAlign='left'>
                                    {LangState.getLang().vouch}
                                </Box>
                                <AccordionIcon />
                            </AccordionButton>
                            </h2>
                            <AccordionPanel pb={4}>
                                <UnorderedList>
                                    <ListItemPoint fontSize='lg'>{LangState.getLang().vouchDesc1}</ListItemPoint>
                                    <ListItemPoint fontSize='lg'>{LangState.getLang().vouchDesc2}</ListItemPoint>
                                </UnorderedList>
                            </AccordionPanel>
                        </AccordionItem>
                    </AccordionWrap>
                    <TechUsed>
                        <IconWrap bg='#1245a8' boxShadow='base'>
                            <FaReact size={iconSize} />
                            <Text paddingLeft='5px'>(Hooks, Router, MobX)</Text>
                        </IconWrap>
                        <IconWrap bg='#1245a8' boxShadow='base'>
                            <SiStyledcomponents size={iconSize} />
                            <Text paddingLeft='5px'>styled-components</Text>
                        </IconWrap>
                        <IconWrap bg='#1245a8' boxShadow='base'>
                            <SiTypescript size={iconSize} />
                            <Text paddingLeft='5px'>TypeScript</Text>
                        </IconWrap>
                        <IconWrap bg='#1245a8' boxShadow='base'>
                            <RiTestTubeFill size={iconSize} />
                            <Text paddingLeft='5px'>Cypress</Text>
                        </IconWrap>
                        <IconWrap bg='#1245a8' boxShadow='base'>
                            <FaPython size={iconSize} />
                            <Text paddingLeft='5px'>Python</Text>
                        </IconWrap>
                        <IconWrap bg='#1245a8' boxShadow='base'>
                            <SiDjango size={iconSize} />
                            <Text paddingLeft='5px'>Django</Text>
                        </IconWrap>
                        <IconWrap bg='#1245a8' boxShadow='base'>
                            <GiPanda size={iconSize} />
                            <Text paddingLeft='5px'>Pandas</Text>
                        </IconWrap>
                        <IconWrap bg='#1245a8' boxShadow='base'>
                            <SiPostgresql size={iconSize} />
                            <Text paddingLeft='5px'>PostgresSQL</Text>
                        </IconWrap>
                        <IconWrap bg='#1245a8' boxShadow='base'>
                            <FaDocker size={iconSize} />
                            <Text paddingLeft='5px'>Docker</Text>
                        </IconWrap>
                        <IconWrap bg='#1245a8' boxShadow='base'>
                            <SiAzuredevops size={iconSize} />
                            <Text paddingLeft='5px'>Azure DevOps</Text>
                        </IconWrap>
                    </TechUsed>
                </EntryBody>
            </ExperienceEntry>
            <ExperienceEntry boxShadow='base'>
                <EntryHeader flexDirection={{ base: 'column', sm: 'row' }}>
                    <Image src={ukg} alt='UKG' boxSize='100px' borderRadius='md' />
                    <HeaderInfo>
                        <HeaderWrap
                            flexDirection={{ base: 'column', md: 'row', lg: 'column', xl: 'row' }}
                            alignItems={{ base: 'flex-start', md: 'center', lg: 'flex-start', xl: 'center' }}
                        >
                            <Bold><InfoText fontSize={{ base: '3xl' }}>{LangState.getLang().se}</InfoText></Bold>
                            <DateBadge>
                                <Badge borderRadius='full' px='2' colorScheme='teal'>
                                    09/2020 - 12/2020
                                </Badge>
                            </DateBadge>
                        </HeaderWrap>
                        <HeaderWrap
                            flexDirection={{ base: 'column', md: 'row', lg: 'column', xl: 'row' }}
                            alignItems={{ base: 'flex-start', md: 'center', lg: 'flex-start', xl: 'center' }}
                        >
                            <InfoText fontSize={{ base: '2xl' }}>{LangState.getLang().ukg}</InfoText>
                            <Box
                                color='gray.500'
                                fontWeight='semibold'
                                letterSpacing='wide'
                                fontSize='xs'
                                textTransform='uppercase'
                                ml='2'
                            >
                                {LangState.getLang().remote}
                            </Box>
                        </HeaderWrap>
                    </HeaderInfo>
                </EntryHeader>
                <EntryBody>
                    <InfoText fontSize={{ base: 'xl' }}>{LangState.getLang().ukgDesc}</InfoText>
                    <AccordionWrap allowMultiple>
                        <AccordionItem>
                            <h2>
                            <AccordionButton _expanded={{ bg: '#045c5c', color: 'white', fontWeight: 'bolder' }}>
                                <Box flex='1' textAlign='left'>
                                    {LangState.getLang().details}
                                </Box>
                                <AccordionIcon />
                            </AccordionButton>
                            </h2>
                            <AccordionPanel pb={4}>
                                <UnorderedList>
                                    <ListItemPoint fontSize='lg'>{LangState.getLang().detail1}</ListItemPoint>
                                    <ListItemPoint fontSize='lg'>{LangState.getLang().detail2}</ListItemPoint>
                                    <ListItemPoint fontSize='lg'>{LangState.getLang().detail3}</ListItemPoint>
                                    <ListItemPoint fontSize='lg'>{LangState.getLang().detail4}</ListItemPoint>
                                </UnorderedList>
                            </AccordionPanel>
                        </AccordionItem>
                    </AccordionWrap>
                    <TechUsed>
                        <IconWrap bg='#045c5c' boxShadow='base'>
                            <FaDocker size={iconSize} />
                            <Text paddingLeft='5px'>Docker</Text>
                        </IconWrap>
                        <IconWrap bg='#045c5c' boxShadow='base'>
                            <SiJetbrains size={iconSize} />
                            <Text paddingLeft='5px'>TeamCity</Text>
                        </IconWrap>
                        <IconWrap bg='#045c5c' boxShadow='base'>
                            <SiPowershell size={iconSize} />
                            <Text paddingLeft='5px'>Powershell</Text>
                        </IconWrap>
                        <IconWrap bg='#045c5c' boxShadow='base'>
                            <SiGnubash size={iconSize} />
                            <Text paddingLeft='5px'>Bash</Text>
                        </IconWrap>
                        <IconWrap bg='#045c5c' boxShadow='base'>
                            <FaDatabase size={iconSize} />
                            <Text paddingLeft='5px'>Redgate Deploy</Text>
                        </IconWrap>
                        <IconWrap bg='#045c5c' boxShadow='base'>
                            <SiRabbitmq size={iconSize} />
                            <Text paddingLeft='5px'>RabbitMQ</Text>
                        </IconWrap>
                        <IconWrap bg='#045c5c' boxShadow='base'>
                            <SiMongodb size={iconSize} />
                            <Text paddingLeft='5px'>MongoDB</Text>
                        </IconWrap>
                        <IconWrap bg='#045c5c' boxShadow='base'>
                            <SiMicrosoftsqlserver size={iconSize} />
                            <Text paddingLeft='5px'>MSSQL</Text>
                        </IconWrap>
                        <IconWrap bg='#045c5c' boxShadow='base'>
                            <SiKubernetes size={iconSize} />
                            <Text paddingLeft='5px'>Kubernetes</Text>
                        </IconWrap>
                        <IconWrap bg='#045c5c' boxShadow='base'>
                            <RiSafe2Fill size={iconSize} />
                            <Text paddingLeft='5px'>Vault (Hashicorp)</Text>
                        </IconWrap>
                        <IconWrap bg='#045c5c' boxShadow='base'>
                            <SiAzureartifacts size={iconSize} />
                            <Text paddingLeft='5px'>Artifactory (JFrog)</Text>
                        </IconWrap>
                        <IconWrap bg='#045c5c' boxShadow='base'>
                            <DiJira size={iconSize} />
                            <Text paddingLeft='5px'>JIRA</Text>
                        </IconWrap>
                    </TechUsed>
                </EntryBody>
            </ExperienceEntry>
        </Wrap>
    );
});

const ExperienceEntry = styled(Box)`
    margin: 30px 0px 10px 0px;
    border-radius: 10px;
    border-width: 1px;
    padding: 20px;
`;

const EntryHeader = styled(Box)`
    display: flex;
    align-items: center;
`;

const EntryBody = styled(Box)`
    display flex;
    flex-direction: column;
    padding-top: 10px;
`;

const ListItemPoint = styled(ListItem)`
    margin-left: 10px;
`;

const HeaderInfo = styled(Box)`
    display: flex;
    flex-direction: column;
    padding-left: 20px;
`;

const HeaderWrap = styled(Box)`
    display: flex;
`;

const InfoText = styled(Text)`
    padding: 5px;
`;

const DateBadge = styled.div`
    padding-top: 5px;
    padding-left: 5px;
`;

const Bold = styled.span`
    font-weight: bold;
`;

const AccordionWrap = styled(Accordion)`
    padding-top: 10px;
    padding-bottom: 10px;
`;

const Wrap = styled.div`
    display: flex;
    flex-direction: column;
    padding: 20px;
    width: 90%;
`;

const IconWrap = styled(Box)`
    padding: 10px;
    margin: 5px;
    display: flex;
    flex-direction: row;
    align-items: center;
    color: white;
    border-radius: 15px;
`;

const TechUsed = styled(Box)`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
`;

export { Experience };