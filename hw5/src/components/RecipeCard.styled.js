import styled from "styled-components";

export const Card = styled.div`
  width: 240px;
  background-color: #ffffff;
  border-radius: 16px;
  padding: 12px;
  box-shadow: ${({ $hard }) =>
    $hard ? "0 0 0 3px #ff6b6b" : "0 4px 12px rgba(0,0,0,0.1)"};
`;

export const Image = styled.img`
  width: 100%;
  height: 160px;
  object-fit: cover;
  border-radius: 12px;
`;

export const Title = styled.h3`
  font-size: 14px;
  text-align: center;
`;

export const Info = styled.div`
  display: flex;
  justify-content: space-around;
  font-size: 12px;
`;
