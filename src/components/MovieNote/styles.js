import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  padding: 32px;
  border: none;

  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_800};
  border-radius: 16px;

  margin-bottom: 24px;

  display: flex;
  flex-direction: column;

  > button {
    display: flex;
  }

  > h1 {
    color: ${({ theme }) => theme.COLORS.WHITE};
    font-size: 24px;
    font-weight: 700;
  }

  > p {
    height: 45px;
    overflow: hidden;
    color: ${({ theme }) => theme.COLORS.GRAY_500};
    text-overflow: ellipsis;
    font-size: 16px;
    text-align: justify;
    margin: 15px 0;
  }

  > div {
    display: flex;
    gap: 8px;
  }
`;
