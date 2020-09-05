import React from 'react';
import styled from 'styled-components';

import Button from '../Common/Button';
import TicketIcon from '../../assets/image/icon-ticket.png';

const testList = {
    first: '7.2 / 강남 CGV / 인셉션 / 19:30',
    second: '7.2 / 서현 메가박스 / 암살 / 20:45',
    third: '7.5 / 왕십리 CGV / 인셉션 / 17:25',
};

function MovieCard() {
    const [choice, setChoice] = React.useState('');
    const [checkValue, setCheckValue] = React.useState({
        first: false,
        second: false,
        third: false,
    });

    const handleChange = (name) => {
        setCheckValue({
            first: false,
            second: false,
            third: false,
            [name]: true,
        });
        setChoice(testList[name]);
    };

    const handleSubmit = () => {
        if (choice === '') alert('시간표를 선택해주세요!');
        else {
            console.log(choice);
        }
    };

    return (
        <CardWrapper>
            <CardHeader>🎉 매칭이 성사되었습니다! 🎉</CardHeader>
            <Hr />
            <ContentWrapper>
                <IconWrapper>
                    <IconBox src={TicketIcon} />
                </IconWrapper>
                <HeaderContainer>
                    {'상대가 보낸 시간표 중 선택해주세요 !'}
                </HeaderContainer>
                <InputBox>
                    <TicketsContainer
                        bgColor={checkValue.first}
                        onClick={() => handleChange('first')}
                    >
                        {testList['first']}
                    </TicketsContainer>
                    <TicketsContainer
                        bgColor={checkValue.second}
                        onClick={() => handleChange('second')}
                    >
                        {testList['second']}
                    </TicketsContainer>
                    <TicketsContainer
                        bgColor={checkValue.third}
                        onClick={() => handleChange('third')}
                    >
                        {testList['third']}
                    </TicketsContainer>
                </InputBox>
            </ContentWrapper>
            <ButtonContainer>
                <BtnWrapper onClick={handleSubmit}>
                    <Button text={'수락하기'} />
                </BtnWrapper>
                <SpanContainer>혹시 마음에 드는 시간표가 없으신가요?</SpanContainer>
                <HyperLinkContainer href="/">시간표 제안하러가기</HyperLinkContainer>
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
    background: ${(props) => (props.bgColor ? props.theme.pointColor : props.theme.whiteColor)} ;
    width: 100%;
    max-width: 330px;
    height: auto;
    font-size: 1.3rem;
    text-align: center;
    border: 0px solid;
    border-radius: 1.8rem;
    padding: 1.32rem 1.1rem;
    :hover {
        background: ${(props) => (props.bgColor ? props.theme.pointColor : props.theme.grayColor)};
    }
    cursor: pointer;
`;

const ButtonContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    align-content: center;
    padding: 2rem 0 0 0;
`;

const IconBox = styled.img`
    width: 74px;
`;

const BtnWrapper = styled.div``;

const SpanContainer = styled.span`
    color: ${props => props.theme.whiteGray};
    padding: 1.5rem 0 0.5rem 0;
`;

const HyperLinkContainer = styled.a`
    color: ${props => props.theme.pointColor};
    text-decoration: underline;
    :hover {
        color: ${props => props.theme.pointColor};
    }
`

export default MovieCard;
