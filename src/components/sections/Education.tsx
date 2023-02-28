import React from 'react';
import styled from 'styled-components';

import {
    Accordion,
    AccordionButton,
    AccordionIcon,
    AccordionItem,
    AccordionPanel,
    Badge,
    Box,
    Heading,
    Image,
    ListItem,
    Text,
    UnorderedList,
} from '@chakra-ui/react';

import georgiatech from '../../images/gtlogo.png';
import spartans from '../../images/spartans.jpg';

import { LangState } from '../../lang';
import { observer } from 'mobx-react';

// Education section featuring the schools I went to
const Education = observer(() => {
    return (
        <Wrap>
            <Heading size='3xl'>{LangState.getLang().education}</Heading>
            <EducationEntry boxShadow='base'>
                <EntryHeader>
                    <Image src={georgiatech} alt='GT' boxSize='100px' borderRadius='md' />
                    <HeaderInfo>
                        <HeaderWrap
                            flexDirection={{ base: 'column', md: 'row', lg: 'column', xl: 'row' }}
                            alignItems={{ base: 'flex-start', md: 'center', lg: 'flex-start', xl: 'center' }}
                        >
                            <Bold>
                                <InfoText fontSize={{ base: '3xl' }}>
                                    <a href='https://www.gatech.edu/' rel='noopener noreferrer' target='_blank'>
                                        {LangState.getLang().gt}
                                    </a>
                                </InfoText>
                            </Bold>
                            <DateBadge>
                                <Badge borderRadius='full' px='2' colorScheme='teal'>
                                    08/2018 - 12/2022
                                </Badge>
                            </DateBadge>
                        </HeaderWrap>
                        <HeaderWrap
                            flexDirection={{ base: 'column', md: 'row', lg: 'column', xl: 'row' }}
                            alignItems={{ base: 'flex-start', md: 'center', lg: 'flex-start', xl: 'center' }}
                        >
                            <InfoText fontSize={{ base: '2xl' }}>{LangState.getLang().bscs}</InfoText>
                            <Box
                                color='gray.500'
                                fontWeight='semibold'
                                letterSpacing='wide'
                                fontSize='xs'
                                textTransform='uppercase'
                                ml='2'
                            >
                                {LangState.getLang().atl}
                            </Box>
                        </HeaderWrap>
                    </HeaderInfo>
                </EntryHeader>
                <EntryBody>
                    <InfoText fontSize={{ base: 'xl' }}>{LangState.getLang().gtDesc}</InfoText>
                    <AccordionWrap allowMultiple>
                        <AccordionItem>
                            <h2>
                            <AccordionButton _expanded={{ bg: '#A28D5B', color: 'white', fontWeight: 'bolder' }}>
                                <Box flex='1' textAlign='left'>
                                    {LangState.getLang().relCourse}
                                </Box>
                                <AccordionIcon />
                            </AccordionButton>
                            </h2>
                            <AccordionPanel pb={4}>
                                <UnorderedList>
                                    <ListItemPoint fontSize='lg'>{LangState.getLang().course1}</ListItemPoint>
                                    <ListItemPoint fontSize='lg'>{LangState.getLang().course2}</ListItemPoint>
                                    <ListItemPoint fontSize='lg'>{LangState.getLang().course3}</ListItemPoint>
                                    <ListItemPoint fontSize='lg'>{LangState.getLang().course4}</ListItemPoint>
                                    <ListItemPoint fontSize='lg'>{LangState.getLang().course5}</ListItemPoint>
                                    <ListItemPoint fontSize='lg'>{LangState.getLang().course6}</ListItemPoint>
                                    <ListItemPoint fontSize='lg'>{LangState.getLang().course7}</ListItemPoint>
                                    <ListItemPoint fontSize='lg'>{LangState.getLang().course8}</ListItemPoint>
                                    <ListItemPoint fontSize='lg'>{LangState.getLang().course9}</ListItemPoint>
                                    <ListItemPoint fontSize='lg'>{LangState.getLang().course10}</ListItemPoint>
                                    <ListItemPoint fontSize='lg'>{LangState.getLang().course11}</ListItemPoint>
                                    <ListItemPoint fontSize='lg'>{LangState.getLang().course12}</ListItemPoint>
                                    <ListItemPoint fontSize='lg'>{LangState.getLang().course13}</ListItemPoint>
                                </UnorderedList>
                            </AccordionPanel>
                        </AccordionItem>
                        <AccordionItem>
                            <h2>
                            <AccordionButton _expanded={{ bg: '#A28D5B', color: 'white', fontWeight: 'bolder' }}>
                                <Box flex='1' textAlign='left'>
                                   {LangState.getLang().activities}
                                </Box>
                                <AccordionIcon />
                            </AccordionButton>
                            </h2>
                            <AccordionPanel pb={4}>
                            <InfoText fontSize={{ base: 'lg' }}>{LangState.getLang().actDesc}</InfoText>
                            </AccordionPanel>
                        </AccordionItem>
                    </AccordionWrap>
                </EntryBody>
            </EducationEntry>
            <EducationEntry boxShadow='base'>
                <EntryHeader>
                    <Image src={spartans} alt='Spartans' boxSize='100px' borderRadius='md' />
                    <HeaderInfo>
                        <HeaderWrap
                            flexDirection={{ base: 'column', md: 'row', lg: 'column', xl: 'row' }}
                            alignItems={{ base: 'flex-start', md: 'center', lg: 'flex-start', xl: 'center' }}
                        >
                            <Bold><InfoText fontSize={{ base: '3xl' }}>{LangState.getLang().south}</InfoText></Bold>
                            <DateBadge>
                                <Badge borderRadius='full' px='2' colorScheme='teal'>
                                    09/2014 - 06/2018
                                </Badge>
                            </DateBadge>
                        </HeaderWrap>
                        <HeaderWrap
                            flexDirection={{ base: 'column', md: 'row', lg: 'column', xl: 'row' }}
                            alignItems={{ base: 'flex-start', md: 'center', lg: 'flex-start', xl: 'center' }}
                        >
                            <InfoText fontSize={{ base: '2xl' }}>{LangState.getLang().highSchool}</InfoText>
                            <Box
                                color='gray.500'
                                fontWeight='semibold'
                                letterSpacing='wide'
                                fontSize='xs'
                                textTransform='uppercase'
                                ml='2'
                            >
                                {LangState.getLang().torrance}
                            </Box>
                        </HeaderWrap>
                    </HeaderInfo>
                </EntryHeader>
                <EntryBody>
                    <InfoText fontSize={{ base: 'xl' }}>{LangState.getLang().southDesc}</InfoText>
                    <AccordionWrap allowMultiple>
                        <AccordionItem>
                            <h2>
                            <AccordionButton _expanded={{ bg: '#18453B', color: 'white', fontWeight: 'bolder' }}>
                                <Box flex='1' textAlign='left'>
                                    {LangState.getLang().activities}
                                </Box>
                                <AccordionIcon />
                            </AccordionButton>
                            </h2>
                            <AccordionPanel pb={4}>
                                <UnorderedList>
                                    <ListItemPoint fontSize='lg'>{LangState.getLang().act1}</ListItemPoint>
                                    <ListItemPoint fontSize='lg'>{LangState.getLang().act2}</ListItemPoint>
                                </UnorderedList>
                            </AccordionPanel>
                        </AccordionItem>
                    </AccordionWrap>
                </EntryBody>
            </EducationEntry>
        </Wrap>
    );
});

const Wrap = styled.div`
    display: flex;
    flex-direction: column;
    padding: 20px;
`;

const EducationEntry = styled(Box)`
    margin: 30px 0px 10px 0px;
    border-radius: 10px;
    border-width: 1px;
    padding: 20px;
`;

const EntryHeader = styled(Box)`
    display: flex;
    flex-direction: row;
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

export { Education };