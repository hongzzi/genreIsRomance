import React from 'react';
import styled from 'styled-components';
import { Icon } from 'semantic-ui-react';

import Nav from '../Nav';

export default (props) => {
    const { visible, setVisible } = props;

    const handlerSidebar = (event) => {
        setVisible(!visible);
    };

    return (
        <WrapperHeader>
            <Container>
                <Nav visible={visible} setVisible={setVisible} />
                <IconWrapper onClick={handlerSidebar}>
                    <Icon size="big" name="bars" color="grey"/>
                </IconWrapper>
            </Container>
        </WrapperHeader>
    );
};

const WrapperHeader = styled.header`
    z-index: 1;
    position: fixed;
    width: 100%;
    height: auto;
    padding: 1.5rem;
`;

const Container = styled.div`
    display: flex;
    flex-direction: row-reverse;
    max-width: 960px;
    margin: auto;
`;

const IconWrapper = styled.div`
    width: auto;
    height: auto;
    padding: 0.5rem;
    cursor: pointer;
`;
