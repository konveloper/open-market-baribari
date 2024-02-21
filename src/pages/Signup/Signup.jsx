import React, { useState, useEffect } from 'react';
import postUsernameIsValid from 'api/Signup/postUsernameIsValid';
import imgLogo from 'assets/img/logo.svg';
import Input from 'components/Common/Input/Input';
import Button from 'components/Common/Button/Button';
import {
  SignupSection,
  H2IR,
  ImgLogo,
  ContInputForm,
  ContUsername,
} from './SignupStyle';
import postSignup from 'api/Signup/postSignup';

function Signup() {
  const [signupForm, setSignupForm] = useState({
    username: '',
    password: '',
    password2: '',
    phone_number: '',
    name: '',
  });
  const [usernameErr, setUsernameErr] = useState('');
  const [usernameIsValid, setUsernameIsValid] = useState(false);

  const inputChangeHandler = (e) => {
    const { name, value } = e.target;
    setSignupForm({
      ...signupForm,
      [name]: value,
    });
  };

  const usernameHandler = () => {
    const regExp = /^[a-z]+[a-z0-9]{5,19}$/g;
    if (!signupForm.username) {
      setUsernameErr('아이디는 필수 항목입니다.');
      setUsernameIsValid(false);
    } else if (!regExp.test(signupForm.username)) {
      setUsernameErr('아이디는 20자 이내의 영문, 숫자만 사용 가능합니다.');
      setUsernameIsValid(false);
    } else if (signupForm.username.length > 20) {
      setUsernameErr('아이디는 20자 이하여야 합니다.');
      setUsernameIsValid(false);
    }
  };

  const usernameValidationHandler = async () => {
    try {
      const regExp = /^[a-z]+[a-z0-9]{5,19}$/g;
      const usernameData = {
        username: signupForm.username,
      };
      const res = await postUsernameIsValid(usernameData);
      if (!signupForm.username) {
        setUsernameErr('아이디는 필수 항목입니다.');
        setUsernameIsValid(false);
      } else if (!regExp.test(signupForm.username)) {
        setUsernameErr('아이디는 20자 이내의 영문, 숫자만 사용 가능합니다.');
        setUsernameIsValid(false);
      } else if (signupForm.username.length > 20) {
        setUsernameErr('아이디는 20자 이하여야 합니다.');
        setUsernameIsValid(false);
      } else if (res.Success === '멋진 아이디네요 :)') {
        console.log(res);
        setUsernameErr(`${res.Success}`);
        setUsernameIsValid(true);
      }
    } catch (err) {
      if (err.response.data.FAIL_Message === '이미 사용 중인 아이디입니다.') {
        setUsernameErr(`${err.response.data.FAIL_Message}`);
        setUsernameIsValid(false);
      } else {
        setUsernameErr('');
        setUsernameIsValid(false);
      }
    }
  };

  const submitHandler = (e) => {
    e.preventDefault();
  };

  useEffect(() => {
    setUsernameErr();
  }, [signupForm.username]);

  return (
    <SignupSection>
      <H2IR>회원가입 페이지</H2IR>
      <ImgLogo src={imgLogo} />
      <ContInputForm onSubmit={submitHandler}>
        <ContUsername>
          <Input
            label='아이디'
            type='text'
            name='username'
            placeholder='영문, 숫자만 사용 가능합니다.'
            defaultValue={signupForm.username}
            onBlur={usernameHandler}
            onChange={inputChangeHandler}
            message={usernameErr}
          />
          <Button onClick={usernameValidationHandler} type='button' onsize='s'>
            중복 확인
          </Button>
        </ContUsername>
        <div>
          <Input
            label='비밀번호'
            type='password'
            name='password'
            placeholder='8자리 이상의 비밀번호를 설정해주세요.'
            min='8'
            max='20'
            onChange={inputChangeHandler}
          />
        </div>
        <div>
          <Input
            label='비밀번호 재확인'
            type='password'
            name='password2'
            placeholder='동일한 비밀번호를 입력해주세요.'
            min='8'
            max='20'
            onChange={inputChangeHandler}
          />
        </div>
        <div>
          <Input
            label='이름'
            type='text'
            name='name'
            placeholder='이름을 입력해주세요.'
            min='2'
            onChange={inputChangeHandler}
          />
        </div>
        <div>
          <Input
            label='휴대폰번호'
            type='text'
            name='phone_number'
            placeholder='휴대폰번호를 입력해주세요.'
            min='11'
            onChange={inputChangeHandler}
          />
        </div>
        <Button size='m'>{'오픈 마켓 시작하기'}</Button>
      </ContInputForm>
    </SignupSection>
  );
}

export default Signup;
