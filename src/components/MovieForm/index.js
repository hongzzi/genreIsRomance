import React from 'react';
import styled from 'styled-components';

import Button from '../Common/Button';
import TicketIcon from '../../assets/image/icon-ticket.png';

function MovieForm() {
    return (
        <CardWrapper>
            <CardHeader>🎉 매칭이 성사되었습니다! 🎉</CardHeader>
            <Hr />
            <ContentWrapper>
                <IconWrapper>
                    <ImageComponent src={TicketIcon} width={74} />
                </IconWrapper>
                <HeaderContainer>
                    {'상대와 함께 볼 영화를 입력해주세요.'}
                </HeaderContainer>
                <TimeTableContainer>
                    <HrefLink href="http://www.cgv.co.kr/reserve/show-times/" target="_blank">
                        CGV 시간표 - 바로가기
                    </HrefLink>
                    <HrefLink href="https://megabox.co.kr/booking/timetable" target="_blank">
                        메가박스 시간표 - 바로가기
                    </HrefLink>
                    <HrefLink href="https://www.lottecinema.co.kr/NLCHS/Ticketing/Schedule" target="_blank">
                        롯데시네마 시간표 - 바로가기
                    </HrefLink>
                </TimeTableContainer>
                <ContentsContainer>
                    {
                        '위 페이지를 참고하여 \n 날짜 / 영화관 / 영화 / 시간 을 제안해주세요! \n 3개의 옵션을 채워주셔야 합니다. \n ex) 7.2 / 강남 CGV / 인셉션 / 19 : 30'
                    }
                </ContentsContainer>
                <InputBox>
                    <InputContainer
                        type={'text'}
                        placeholder={'날짜 / 영화관 / 영화 / 시간'}
                    />
                    <InputContainer
                        type={'text'}
                        placeholder={'날짜 / 영화관 / 영화 / 시간'}
                    />
                    <InputContainer
                        type={'text'}
                        placeholder={'날짜 / 영화관 / 영화 / 시간'}
                    />
                </InputBox>
            </ContentWrapper>
            <ButtonContainer>
                <Button text={'제안하기'} />
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
    height: 700px;
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

const ContentsContainer = styled.div`
    height: auto;
    font-family: NotoSansKR;
    font-size: 1rem;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.5rem;
    letter-spacing: normal;
    white-space: pre;
    text-align: center;
    color: #929292;
`;

const TimeTableContainer = styled.div`
    font-size: 16px;
    width: 300px;
    height: 100px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border: solid 1px;
    border-radius: 1rem;
`;

const InputBox = styled.div`
    height: 220px;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
`;

const InputContainer = styled.input`
    background: ${(props) => props.theme.whiteColor} !important;
    width: 100%;
    max-width: 330px;
    height: 4rem;
    font-size: 1.3rem;
    text-align: center;
    border: 0px solid;
    border-radius: 1.8rem;
    padding: 0.5rem 1.1rem;
    :focus {
        outline: none !important;
        ::placeholder {
            color:transparent;
        }
    }
`;

const ButtonContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    padding: 2rem 0 0 0;
`;

const ImageComponent = styled.img`
`

const HrefLink = styled.a`
`

export default MovieForm;
