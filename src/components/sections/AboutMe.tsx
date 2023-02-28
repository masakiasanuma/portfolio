import React from 'react';
import styled from 'styled-components';

import { 
    Box,
    Heading,
    Text,
    Image
} from '@chakra-ui/react';

import aboutme from '../../images/aboutme.jpg';

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
                    <AboutPic src={aboutme} alt='About Me Pic' />
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
    font-weight: lighter;
    padding: 30px;
`;

const AboutPic = styled(Image)`
    max-height: 500px;
`;

export { AboutMe };