//프로필로 이동한 상태
import { signOut } from "firebase/auth";
import React from "react";
import { useNavigate } from "react-router-dom";
import { authService } from "../../fbase";

const Profile = ({ userObj }) => {
  const navigate = useNavigate();

  const onLogOutClick = () => {
    signOut(authService);
    navigate("/Main", { replace: true });
  };

  return (
    <>
      <div className="byeSent">Are you sure?</div>
      <div className="container2" style={{paddingTop:"10%"}}>
        <span className="formBtn cancleBtn logOut" onClick={onLogOutClick}>
          Log Out
        </span>
      </div>
    </>
  );
};

export default Profile;
