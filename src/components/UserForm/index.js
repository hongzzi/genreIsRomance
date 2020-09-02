import React from 'react';
import styled from 'styled-components';
import { Checkbox, Form, TextArea } from 'semantic-ui-react';

import Button from '../Common/Button';

import NoAbatar from '../../assets/image/no-image.png';

function UserForm() {
    const [imageValue, setImageValue] = React.useState(NoAbatar);
    const handleImageUpload = (event) => {
        const reader = new FileReader();
        reader.onloadend = (e) => {
            const base64 = reader.result;
            if (base64) {
                setImageValue(base64.toString());
            }
        };
        if (event.target.files[0]) {
            reader.readAsDataURL(event.target.files[0]);
        }
    };

    return (
        <FormWrapper>
            <FormHeader>로맨스 매표소</FormHeader>
            <Form>
                <Form.Field>
                    <FileContainer>
                        <FileLabelContainer htmlFor="img-file">
                            <ImageContainer src={imageValue} />
                            <p>두번째로 잘나온 사진을 1장 올려주세요 </p>
                        </FileLabelContainer>
                        <FileInputContainer
                            id={'img-file'}
                            type={'file'}
                            accept={'image/png, image/jpeg, image/jpg'}
                            onChange={handleImageUpload}
                        />
                    </FileContainer>
                </Form.Field>
                <Form.Field>
                    <LabelColor>핸드폰번호</LabelColor>
                    <PhoneInputContainer
                        type="phone"
                        placeholder="010-xxxx-xxxx"
                    />
                </Form.Field>

                <Form.Field>
                    <LabelColor>당신의 인생영화는 무엇인가요?</LabelColor>
                    <MovieInputContainer
                        type="text"
                        placeholder="ex) 라라랜드, 어바웃타임, 어벤져스"
                    />
                </Form.Field>
                <Form.Field>
                    <LabelColor>가장 기억에 남는 장면도 알려주세요.</LabelColor>
                    <TextContainer placeholder="비오는 결혼식" />
                </Form.Field>
                <Form.Field>
                    <LabelColor>
                        함께 영화를 보게 될 상대에게 설레는 한 마디 해주세요.
                    </LabelColor>
                    <TextContainer placeholder="혹시 빗속을 걷는걸 좋아하시나요?" />
                </Form.Field>
                <SubmitContainer>
                    <Button text={'제출하기'} />
                </SubmitContainer>
            </Form>
        </FormWrapper>
    );
}

const FormWrapper = styled.div`
    position: relative;
    max-width: 520px;
    margin: auto;
    padding: 1rem 1rem;
`;

const FormHeader = styled.h2`
    text-align: center;
    color: ${(props) => props.theme.pointColor};
    font-weight: normal;
    text-decoration: underline;
`;

const FileContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 2.5rem;
`;

const FileInputContainer = styled.input`
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    border: 0;
`;

const FileLabelContainer = styled.label`
    height: 230px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
`;

const ImageContainer = styled.img`
    width: 200px;
    height: 200px;
    border-radius: 1.5rem;
    object-fit: cover;
    overflow: hidden;
`;

const PhoneInputContainer = styled.input`
    background: ${(props) => props.theme.whiteColor} !important;
    width: 200px;
    height: 3rem;
    border: 0px solid;
    border-radius: 0.6rem;
    padding: 0.6rem 1rem;
`;

const MovieInputContainer = styled.input`
    background: ${(props) => props.theme.whiteColor} !important;
    width: 500px;
    height: 3rem;
    border: 0px solid;
    border-radius: 0.6rem !important;
    padding: 1.5rem 1rem !important;
`;

const LabelColor = styled.label`
    color: ${(props) => props.theme.textColor} !important;
    padding: 1rem 0 2px 0;
    font-family: 'Noto Sans KR' !important;
    font-weight: normal !important;
`;

const TextContainer = styled(TextArea)`
    background: ${(props) => props.theme.whiteColor} !important;
    width: 500px;
    height: 6rem;
    padding: 1rem 0;
    border: 0px solid;
    border-radius: 0.6rem !important;
`;

const SubmitContainer = styled.div`
    display: flex;
    flex-direction: row-reverse;
    width: 100%;
    height: 100%;
    padding: 2rem 0.5rem 0 0.5rem;
`;

export default UserForm;
