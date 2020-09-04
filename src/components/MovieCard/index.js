import React from 'react';
import styled from 'styled-components';

import Button from '../Common/Button';
import TicketIcon from '../../assets/image/icon-ticket.png';

function MovieCard() {
    return (
        <CardWrapper>
            <CardHeader>🎉 매칭이 성사되었습니다! 🎉</CardHeader>
            <Hr />
            <ContentWrapper>
                <IconWrapper>
                    <IconBox src={TicketIcon}/>
                </IconWrapper>
                <HeaderContainer>
                    {'상대가 보낸 시간표 중 선택해주세요 !'}
                </HeaderContainer>
                <InputBox>
                    {/** map으로 변경하기 */}
                    <TicketsContainer>
                        {'날짜 / 영화관 / 영화 / 시간'}
                    </TicketsContainer>
                    <TicketsContainer>
                        {'날짜 / 영화관 / 영화 / 시간'}
                    </TicketsContainer>
                    <TicketsContainer>
                        {'날짜 / 영화관 / 영화 / 시간'}
                    </TicketsContainer>
                </InputBox>
            </ContentWrapper>
            <ButtonContainer>
                <Button text={'수락하기'} />
            </ButtonContainer>
        </CardWrapper>
    );
}

const CardWrapper = styled.div`
    position: relative;
    max-width: 620px;
    margin: auto;
    padding: 1rem;
`;

const CardHeader = styled.div`
    font-size: 1.7rem;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: normal;
    text-align: center;
    color: ${(props) => props.theme.subPointColor};
    padding: 0.5rem;
`;

const Hr = styled.hr`
    width: 100%;
`;

const IconWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 0 1rem 0.3rem 1rem;
`;

const ContentWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    width: auto;
    height: 500px;
    margin: auto;
    padding: 1rem;
`;

const HeaderContainer = styled.div`
    width: 100%;
    height: auto;
    font-family: NotoSansKR;
    font-size: 1.5rem;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: normal;
    text-align: center;
    color: #c1c1c1;
    word-break: keep-all;
    padding: 1rem 0;
`;

const InputBox = styled.div`
    height: 220px;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
`;

const TicketsContainer = styled.div`
    display: table-cell !important;
    color: ${(props) => props.theme.mainColor};
    background: ${(props) => props.theme.pureWhiteColor} !important;
    width: 100%;
    max-width: 330px;
    height: auto;
    font-size: 1.3rem;
    text-align: center;
    border: 0px solid;
    border-radius: 1.8rem;
    padding: 1.32rem 1.1rem;
    :hover {
        background: ${(props) => props.theme.WhiteColor} !important;
    }
    :focus {
        background: ${(props) => props.theme.pointColor} !important;
    }
`;

const ButtonContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    padding: 2rem 0 0 0;
`;

const IconBox = styled.img`
    width: 74px;
`
export default MovieCard;
