import { Link } from "react-router-dom";
import styled from "styled-components";

export const Container = styled.header`
  grid-area: header;

  height: 105px;
  width: 100%;

  border-bottom-width: 1px;
  border-bottom-style: solid;
  border-bottom-color: ${({ theme }) => theme.COLORS.BACKGROUND_700};

  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 0 120px;
`;

export const Brand = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  > h1 {
    font-size: 24px;
    color: ${({ theme }) => theme.COLORS.PINK};
  }
`;

export const Search = styled.div`
  grid-area: search;

  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 64px;
`;

export const User = styled.div`
  margin-right: 10px;
  line-height: 24px;
  display: flex;
  flex-direction: column;
  width: 250px;
  text-align: right;

  strong {
    font-size: 14px;
    font-weight: 700;
    color: ${({ theme }) => theme.COLORS.WHITE};
  }

  button {
    color: ${({ theme }) => theme.COLORS.GRAY_300};
    font-size: 14px;
    text-decoration: none;
    border: none;
    background: none;
    text-align: right;
  }
`;

export const Profile = styled(Link)`
  display: flex;
  align-items: center;

  > div {
    display: flex;
    flex-direction: column;
    margin-right: 10px;
    line-height: 24px;
  }

  strong {
    font-size: 14px;
    font-weight: 700;
    color: ${({ theme }) => theme.COLORS.WHITE};
  }

  a {
    color: ${({ theme }) => theme.COLORS.GRAY_300};
    font-size: 14px;
    text-decoration: none;
  }

  > img {
    width: 56px;
    height: 56px;
    border-radius: 50%;
  }
`;
