import React from 'react';
import styled from 'styled-components';
import { Icon } from 'semantic-ui-react';

export default () => {
    return (
        <WrapperHeader>
            <Container>
                <Icon size="large" name="heart" />
                <Icon size="large" name="bars" />
            </Container>
        </WrapperHeader>
    );
};

const WrapperHeader = styled.header`
    z-index: 1000;
    /* background: ${(props) => props.theme.mainColor}; */
    /* opacity: 0.5; */
    position: fixed;
    width: 100%;
    height: 4rem;
    padding: 1.5rem;
`;

const Container = styled.div`
    display: flex;
    justify-content: space-between;
    max-width: 960px;
    margin: auto;
`