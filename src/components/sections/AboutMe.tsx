import React from 'react';
import styled from 'styled-components';

import { 
    Box,
    Heading,
    Text,
} from '@chakra-ui/react';

import { LangState } from '../../lang';
import { observer } from 'mobx-react';
import ReactPlayer from 'react-player';

const AboutMe = observer(() => {
    return (
        <Wrap>
            <Heading size='3xl'>{LangState.getLang().welcome}</Heading>
            <AboutWrap flexDirection={{ base: 'column' }}>
                <Content fontSize='2xl'>
                    {LangState.getLang().aboutme}
                </Content>
                <VideoWrap>
                    <ReactPlayer url='https://www.youtube.com/watch?v=GK1QurF8fWs' />
                </VideoWrap>
            </AboutWrap>
        </Wrap>
    );
});

const Wrap = styled.div`
    display: flex;
    flex-direction: column;
    padding: 20px;
`;

const VideoWrap = styled(Box)`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%
`;

const AboutWrap = styled(Box)`
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
    font-weight: light;
    padding: 30px;
`;

export { AboutMe };