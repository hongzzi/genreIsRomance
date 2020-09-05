import React from 'react';
import styled from 'styled-components';
import KaKaoLogin from 'react-kakao-login';

export default () => {
    const responseKakao = (res) => {
        const data = {
            access_token: res.response.access_token,
            refresh_token: res.response.refresh_token
        }
        // 서버에 회원가입 혹은 로그인 요청
    };

    const responseFail = (err) => {
        console.error(err);
    };

    return (
        <Wrapper>
            <TextHeader>카카오 계정으로 편하게 이용하세요</TextHeader>
            <KakaoLoginBtn
                jsKey={process.env.REACT_APP_KAKAO_API_KEY}
                buttonText="KAKAO 계정으로 로그인하기"
                onSuccess={responseKakao}
                onFailure={responseFail}
                getProfile={true}
            />
        </Wrapper>
    );
};

const Wrapper = styled.div`
    height: 50vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

const TextHeader = styled.div`
    font-size: 1.5rem;
    padding: 5rem 0;
`

const KakaoLoginBtn = styled(KaKaoLogin)`
    font-weight: bold;
    width: 260px;
    height: 4rem;
    border-radius: 3rem;
    background: #ffd400;
    padding: 1rem;
    border: none;
    cursor: pointer;
`