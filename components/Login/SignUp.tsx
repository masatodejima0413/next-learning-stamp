import React, { useState } from "react";
import Router from "next/router";
import { databaseRef } from "../../base/base";
import {
  StyledFormTitle,
  StyledInput,
  StyledLabel,
  StyledLabelInputWrapper,
  StyledButton,
} from "./Login.styles";

const SignUp = () => {
  const [inputUserName, setInputUserName] = useState("");
  const [inputPassword, setInputPassword] = useState("");

  const handleSignUp = () => {
    ToMainPage(AddDb());
  };

  const AddDb = () => {
    const ref = databaseRef.child("users").push({
      username: inputUserName,
      password: inputPassword,
      items: {
        firstitem: {
          learned: "Your first item",
          date: "2011-11-11",
          comment: "This is your first learning item!",
        },
      },
    });
    return ref.key;
  };

  const ToMainPage = (newUserId) => {
    // このURLに飛ぶ。<Link to=> だとレンダリングする前にはnewUserIdが空だから無理
    if (newUserId !== undefined) {
      Router.push("/[userId]", `/${newUserId}`);
    } else {
      throw new Error("User not defined.");
    }
  };

  return (
    <>
      <StyledFormTitle>Sign Up</StyledFormTitle>
      <StyledLabelInputWrapper>
        <StyledLabel>username : </StyledLabel>
        <StyledInput
          type="text"
          value={inputUserName}
          onChange={(e) => setInputUserName(e.target.value)}
        />
      </StyledLabelInputWrapper>
      <StyledLabelInputWrapper>
        <StyledLabel>password : </StyledLabel>
        <StyledInput
          type="text"
          value={inputPassword}
          onChange={(e) => setInputPassword(e.target.value)}
        />
      </StyledLabelInputWrapper>
      <StyledButton onClick={handleSignUp}>Sign Up</StyledButton>
    </>
  );
};

export default SignUp;
