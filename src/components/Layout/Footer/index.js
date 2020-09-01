import React from 'react';
import styled from 'styled-components';

export default () => {
    return (
        <WrapperFooter>
            <Container>Footer</Container>
        </WrapperFooter>
    );
};

const WrapperFooter = styled.footer`
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 10rem;
    padding: 1.5rem;
`;

const Container = styled.div`
    max-width: ${props => props.theme.containerMaxWith};
    margin: auto;
`