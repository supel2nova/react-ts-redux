import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { changeProfile, selectAuthState } from "../redux-toolkit/auth/auth-slice";
import { useAppSelector } from "../redux-toolkit/hooks";

const AboutPage = () => {
  const { profile, email } = useAppSelector(selectAuthState);
  const dispatch = useDispatch();
  const change = () => {
    dispatch(changeProfile());
  };

  return (
    <div>
      <h1>About Page {profile}</h1>
      <button onClick={change}>Change Profile</button>
      <Link to="/" replace={true}>
        กลับหน้าหลัก
      </Link>
    </div>
  );
};

export default AboutPage;
