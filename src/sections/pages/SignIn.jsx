import React from 'react';
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { authService } from '../../fbase';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGoogle } from '@fortawesome/free-brands-svg-icons';

// 완료, css만 바꾸면 됨
const SignIn = () => {
  const navigate = useNavigate();
  const onSocialClick = async (event) => {
      //google이 아닌 다른 social login을 원하면 이곳에 추가해세요
      const {
        target: { name },
      } = event;
      let provider;
      if (name === "google") {
        provider = new GoogleAuthProvider();
      }
      //else: 다른 social media
    
      const data = await signInWithPopup(authService, provider);
      console.log(data);

      navigate("/Main", { replace: true });
    };
  return (
  //google이 아닌 다른 social login을 원하면 이곳에 이름과 함께 추가하세요
  <>
    <div className="authContainer">
      <div className="welcomeSen">Welcome to KISA UTD</div>
      <div className="authBtns">
        <button onClick={onSocialClick} name="google" className="authBtn">
          Continue with Google <FontAwesomeIcon icon={faGoogle} />
        </button>
      </div>
    </div>
    </>
  );

}

export default SignIn;
