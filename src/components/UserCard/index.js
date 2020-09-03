import React from 'react';
import styled from 'styled-components';

import NoAbatar from '../../assets/image/no-image.png';
import MovieIcon from '../../assets/image/icon-movie.png';

function UserCard() {
    return (
        <CardWrapper>
            <CardHeader>shalL we mOViE</CardHeader>
            <IconWrapper>
                <img src={MovieIcon} width={74} />
            </IconWrapper>
            <CardContainer>
                <ImageContainer>
                    <ImageCard src={NoAbatar} />
                </ImageContainer>
                <ContentWrapper>
                    <HeaderContainer>
                        {'# 나의_영화 \n# 미드나잇_인_파리'}
                    </HeaderContainer>
                    <Hr />
                    <ContentsContainer>
                        {
                            '주인공이 산책하는 밤길과, 마지막에 빗속에서 걷는 다리위를 가보고싶어dssss요dyddydddyd'
                        }
                    </ContentsContainer>
                    <HeaderContainer>
                        {'# 당신에게_보내는_메세지'}
                    </HeaderContainer>
                    <Hr />
                    <ContentsContainer>
                        {'보조개가 예쁜 사람이 좋아요'}
                    </ContentsContainer>
                </ContentWrapper>
            </CardContainer>
        </CardWrapper>
    );
}

const CardWrapper = styled.div`
    position: relative;
    max-width: 620px;
    margin: auto;
    padding: 1rem 1rem;
`;

const CardHeader = styled.h2`
    text-align: center;
    color: ${(props) => props.theme.pointColor};
    font-weight: normal;
    text-decoration: underline;
`;

const IconWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 0 1rem 0.3rem 1rem;
`

const CardContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: auto;
    border: 1px solid ${(props) => props.theme.pointColor};
    border-radius: 1.5rem;
    padding: 1.5rem 0 4rem 0;
    margin: auto;
`;

const ContentWrapper = styled.div`
    width: 100%;
    max-width: 520px;
    margin: auto;
    padding: 1.5rem;
`;

const ImageContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 1.8rem;
`;

const ImageCard = styled.img`
    width: 200px;
    height: 200px;
    border-radius: 1.5rem;
    object-fit: cover;
    overflow: hidden;
`;

const HeaderContainer = styled.div`
    width: 100%;
    max-width: 500px;
    height: auto;
    font-size: 1.6rem;
    font-weight: 300;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: normal;
    white-space: pre;
    color: ${(props) => props.theme.subPointColor};
    padding: 1rem 0;
`;

const ContentsContainer = styled.div`
    width: 100%;
    height: auto;
    font-size: 1.1rem;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.7rem;
    letter-spacing: normal;
    word-break: normal;
    /* white-space: pre; */
    padding: 1rem 0 2.5rem 0;
`;

const Hr = styled.hr`
    width: 100%;
`;

export default UserCard;
