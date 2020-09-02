import React from 'react';
import styled from 'styled-components';
import { Icon } from 'semantic-ui-react';

export default (props) => {
  const { visible, setVisible } = props;

    const handlerSidebar = (event) => {
        console.log('click');
        setVisible(!visible);
    };

    return (
        <WrapperHeader>
            <Container>
                <IconWrapper size="large" name="heart" />
                <IconWrapper size="large" name="bars" onClick={handlerSidebar} />
            </Container>
        </WrapperHeader>
    );
};

const WrapperHeader = styled.header`
    z-index: 2;
    /* background: ${(props) => props.theme.mainColor}; */
    /* opacity: 0.5; */
    position: fixed;
    width: 100%;
    height: 4rem;
    padding: 2rem 1.5rem;
`;

const Container = styled.div`
    display: flex;
    justify-content: space-between;
    max-width: 960px;
    margin: auto;
`;

const IconWrapper = styled(Icon)`
    /* padding: 1rem; */
`