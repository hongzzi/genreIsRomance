import React from 'react';
import styled from 'styled-components';

export default ( {text} ) => (
    <ButtonContainer>
        {text}
    </ButtonContainer>
)

const ButtonContainer = styled.div`
    :hover {
        cursor: pointer;
        background: ${props => props.theme.pointColor};
        color: ${props => props.theme.pureWhiteColor};
    }
    font-size: 1.3rem;
    color: ${props => props.theme.pointColor};
    border: 1px solid ${props => props.theme.pointColor};
    border-radius: 1rem;
    padding: 1rem 4rem;
`;