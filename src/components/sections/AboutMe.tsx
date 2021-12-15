import React from 'react';
import styled from 'styled-components';

import { 
    Box,
    Heading,
    Text,
    Image,
    Tab,
    TabList,
    TabPanel,
    TabPanels,
    Tabs
} from '@chakra-ui/react';

import aboutme1 from '../../images/aboutme1.jpeg';
import aboutme2 from '../../images/aboutme2.jpg';
import aboutme3 from '../../images/aboutme3.jpeg';
import aboutme4 from '../../images/aboutme4.jpeg';
import aboutme5 from '../../images/aboutme5.jpeg';
import aboutme6 from '../../images/aboutme6.jpeg';

import { LangState } from '../../lang';
import { observer } from 'mobx-react';

const AboutMe = observer(() => {
    return (
        <Wrap>
            <Heading size='3xl'>{LangState.getLang().welcome}</Heading>
            <AboutWrap flexDirection={{ base: 'column' }}>
                <Content fontSize='2xl'>
                    {LangState.getLang().aboutme}
                </Content>
                <Pictures>
                    <Tabs
                        align='center'
                        colorScheme='blackAlpha'
                        variant='enclosed'
                    >
                        <TabList>
                            <Tab>{LangState.getLang().shizuoka}</Tab>
                            <Tab>{LangState.getLang().takenoko}</Tab>
                            <Tab>{LangState.getLang().snow}</Tab>
                            <Tab>{LangState.getLang().gtdl}</Tab>
                            <Tab>{LangState.getLang().guitar}</Tab>
                            <Tab>{LangState.getLang().kimono}</Tab>
                        </TabList>
                        <TabPanels>
                            <TabPanel>
                                <AboutPic src={aboutme1} alt='Ito, Shizuoka' />
                            </TabPanel>
                            <TabPanel>
                                <AboutPic src={aboutme2} alt='Harvesting Takenoko' />
                            </TabPanel>
                            <TabPanel>
                                <AboutPic src={aboutme3} alt='Snowing in Tokyo' />
                            </TabPanel>
                            <TabPanel>
                                <AboutPic src={aboutme4} alt='GT drumline freshman year' />
                            </TabPanel>
                            <TabPanel>
                                <AboutPic src={aboutme5} alt='Guitar recording' />
                            </TabPanel>
                            <TabPanel>
                                <AboutPic src={aboutme6} alt='Me in a kimono at a temple' />
                            </TabPanel>
                        </TabPanels>
                    </Tabs>
                </Pictures>
            </AboutWrap>
        </Wrap>
    );
});

const Wrap = styled.div`
    display: flex;
    flex-direction: column;
    padding: 20px;
`;

const Pictures = styled(Box)`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
`;

const AboutWrap = styled(Box)`
    display: flex;
    margin: 30px 0px 10px 0px;
    border-radius: 10px;
    border-width: 1px;
    padding: 10px;
    align-items: center;
`;

const Content = styled(Text)`
    display: flex;
    flex-direction: row;
    text-align: center;
    font-weight: bolder;
    padding: 30px;
`;

const AboutPic = styled(Image)`
    max-height: 500px;
    border-radius: 15px;
`;

export { AboutMe };