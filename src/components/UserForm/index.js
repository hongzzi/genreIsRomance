import React from 'react';
import styled from 'styled-components';
import { Form, Radio, TextArea } from 'semantic-ui-react';

import Button from '../Common/Button';
import NoAbatar from '../../assets/image/no-image.png';

function UserForm() {
    // state 선언부분
    const [imageBase64Value, setImageBase64Value] = React.useState(NoAbatar);
    const [value, setValue] = React.useState({
        postImage: '',
        number: '',
        gender: '',
        movie: '',
        memory: '',
        sentence: '',
    });

    // change handlers
    // image file
    const handleImageUpload = (event) => {
        const reader = new FileReader();
        reader.onloadend = (e) => {
            const base64 = reader.result;
            if (base64) {
                setImageBase64Value(base64.toString());
            }
        };
        if (event.target.files[0]) {
            reader.readAsDataURL(event.target.files[0]);
            setValue({ ...value, postImage: event.target.files[0] });
        }
    };
    // radio button
    const handleRadioChange = (event, v) => {
        setValue({ ...value, [v.name]: v.value });
    }
    // input
    const handleChange = (event) => {
        setValue({ ...value, [event.target.name]: event.target.value });
    };

    const handleSubmit = () => {
        console.log(value);
        // axios 날리는 부분
    };

    return (
        <FormWrapper>
            <FormHeader>로맨스 매표소</FormHeader>
            <Form>
                <Form.Field>
                    <FileContainer>
                        <FileLabelContainer htmlFor="img-file">
                            <ImageContainer src={imageBase64Value} />
                            <p>두번째로 잘나온 사진을 1장 올려주세요 </p>
                        </FileLabelContainer>
                        <FileInputContainer
                            id={'img-file'}
                            type={'file'}
                            name="postImage"
                            accept={'image/png, image/jpeg, image/jpg'}
                            onChange={handleImageUpload}
                        />
                    </FileContainer>
                </Form.Field>
                <LabelColor>성별</LabelColor>
                <RadioBox>
                        <RadioLabel for="radio-man">남자</RadioLabel>
                        <RadioCustom
                            id="radio-man"
                            name="gender"
                            value="남자"
                            checked={value.gender === '남자'}
                            onChange={handleRadioChange}
                        />
                        <RadioLabel for="radio-woman">여자</RadioLabel>
                        <RadioCustom
                            id="radio-woman"
                            name="gender"
                            value="여자"
                            checked={value.gender === '여자'}
                            onChange={handleRadioChange}
                        />
                </RadioBox>

                <Form.Field>
                    <LabelColor>핸드폰번호</LabelColor>
                    <PhoneInputContainer
                        type="phone"
                        placeholder="010-xxxx-xxxx"
                        name="number"
                        value={value.number}
                        onChange={handleChange}
                    />
                </Form.Field>

                <Form.Field>
                    <LabelColor>당신의 인생영화는 무엇인가요?</LabelColor>
                    <MovieInputContainer
                        type="text"
                        placeholder="ex) 라라랜드, 어바웃타임, 어벤져스"
                        name="movie"
                        value={value.movie}
                        onChange={handleChange}
                    />
                </Form.Field>
                <Form.Field>
                    <LabelColor>가장 기억에 남는 장면도 알려주세요.</LabelColor>
                    <TextContainer
                        placeholder="비오는 결혼식"
                        name="memory"
                        value={value.memory}
                        onChange={handleChange}
                    />
                </Form.Field>
                <Form.Field>
                    <LabelColor>
                        함께 영화를 보게 될 상대에게 설레는 한 마디 해주세요.
                    </LabelColor>
                    <TextContainer
                        placeholder="혹시 빗속을 걷는걸 좋아하시나요?"
                        name="sentence"
                        value={value.sentence}
                        onChange={handleChange}
                    />
                </Form.Field>
                <SubmitContainer>
                    <BtnWrapper onClick={handleSubmit}>
                    <Button text={'제출하기'} onClick={handleSubmit} />
                    </BtnWrapper>
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
    :focus {
        outline: none !important;
    }
`;

const MovieInputContainer = styled.input`
    background: ${(props) => props.theme.whiteColor} !important;
    width: 500px;
    height: 3rem;
    border: 0px solid;
    border-radius: 0.6rem !important;
    padding: 1.5rem 1rem !important;
    :focus {
        outline: none !important;
    }
`;

const LabelColor = styled.label`
    color: ${(props) => props.theme.whiteGray} !important;
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
    :focus {
        outline: none !important;
    }
`;

const SubmitContainer = styled.div`
    display: flex;
    flex-direction: row-reverse;
    width: 100%;
    height: 100%;
    padding: 2rem 0.5rem 0 0.5rem;
`;

const RadioBox = styled.div`
    width: 200px;
    display: flex;
    align-items: center;
    align-content: center;
    justify-content: space-between;
    padding: 1rem 0 ;
    border-bottom: solid 1px #444;
`;

const RadioLabel = styled.label`
    color: ${(props) => props.theme.textColor} !important;
    /* padding: 1rem 0 2px 0; */
    font-family: 'Noto Sans KR' !important;
    font-weight: normal !important;
`

const RadioCustom = styled(Radio)`
`;

const BtnWrapper = styled.div`
`

export default UserForm;
