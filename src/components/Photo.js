import React from "react";
import styled from "styled-components";
import profilePic from "../assets/pic.png";

const Img = styled.img`
  width: 130px;
  height: 130px;
  border-radius: 50%;
  border: 4px solid ${({ theme }) => theme.accent};
  object-fit: cover;
  box-shadow: 0 2px 10px rgba(30,30,30,0.07);
  margin-bottom: 1rem;
`;

export const Photo = () => (
  <Img src={profilePic} alt="Profile: devbyrico logo" />
);
