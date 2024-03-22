import Button from '@/components/common/Button';
import Input from '@/components/common/Input';
import { useState } from 'react';

const SignUp = () => {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [isPasswordValid, setIsPasswordValid] = useState(true);

  const validatePassword = () => {
    const passwordRegex =
      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    return passwordRegex.test(password);
  };

  // 비밀번호 입력 시 호출되는 함수
  const handlePasswordChange = (error) => {
    setPassword(error.target.value);
    setIsPasswordValid(validatePassword());
  };

  // 비밀번호 확인 입력 시 호출되는 함수
  const handleConfirmPasswordChange = (error) => {
    setConfirmPassword(error.target.value);
  };

  // 회원가입 버튼 클릭 시 호출되는 함수
  const handleSignUp = () => {
    if (password !== confirmPassword) {
      alert('비밀번호가 일치하지 않습니다.');
      return;
    }
  };

  return (
    <div className={'flex justify-center items-center h-screen'}>
      <div className="flex-row items-center justify-center h-screen">
        <form className="mb-[30px]">
          <legend className="mt-[27px] ml-[3px] font-semibold text-hc-grayDark">
            아이디 *
          </legend>
          <div className="flex justify-between">
            <Input
              variant="white"
              size="sm"
              type="text"
            />
            <Button
              variant="primary"
              size="sm"
              children="중복확인"
            />
          </div>

          <legend className="mt-[9px] ml-[3px]  font-semibold text-hc-grayDark">
            닉네임 *
          </legend>
          <div className="flex justify-between">
            <Input
              variant="white"
              size="sm"
              type="text"
            />
            <Button
              variant="primary"
              size="sm"
              children="중복확인"
            />
          </div>

          <legend className="mt-[9px] ml-[3px]  font-semibold text-hc-grayDark">
            비밀번호 *
          </legend>
          <Input
            variant="white"
            placeholder="영어, 특수문자 포함 8자리 이상"
            size="lg"
            type="password"
            value={password}
            onChange={handlePasswordChange}
          />
          {!isPasswordValid && (
            <div>
              <hr className="w-5/6 mt-1 border ml-7 text-hc-coral" />
              <p className="text-[12px] text-hc-coral">
                영어, 특수문자 포함 8자리 이상이어야 합니다.
              </p>
            </div>
          )}

          <legend className="mt-[9px] ml-[3px]  font-semibold text-hc-grayDark">
            비밀번호 확인 *
          </legend>
          <Input
            variant="white"
            size="lg"
            type="password"
            value={confirmPassword}
            onChange={handleConfirmPasswordChange}
          />

          {password !== confirmPassword && confirmPassword.length > 0 && (
            <div>
              <hr className="w-5/6 mt-1 border ml-7 text-hc-coral" />{' '}
              <p className="text-red-500">비밀번호가 일치하지 않습니다.</p>
            </div>
          )}
        </form>

        <Button
          variant="primary"
          size="lg"
          children="회원가입"
          onClick={handleSignUp}
        />
      </div>
    </div>
  );
};
export default SignUp;
