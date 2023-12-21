import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: grid;
  grid-template-rows: 105px auto;
  grid-template-areas:
    "header"
    "content";

  > main {
    grid-area: content;
    overflow-y: auto;

    &::-webkit-scrollbar {
      width: 8px;
    }

    &::-webkit-scrollbar-thumb {
      border-radius: 8px;
      background-color: ${({ theme }) => theme.COLORS.PINK};
    }
  }
`;

export const Form = styled.form`
  width: 100%;
  margin: 23px auto;
  padding: 0 120px;

  .btnBack {
    display: flex;

    a {
      color: ${({ theme }) => theme.COLORS.PINK};

      svg {
        margin-right: 8px;
      }
    }
  }

  h1 {
    margin-top: 24px;
    font-size: 36px;
    font-weight: 500;
  }

  .input {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 40px;

    margin: 40px 0 40px;
  }

  > textarea {
  }

  h2 {
    font-size: 20px;
    margin: 40px 0 24px;
    font-weight: normal;
    color: ${({ theme }) => theme.COLORS.GRAY_500};
  }

  .movieTags {
    width: 100%;

    padding: 16px;

    display: flex;
    justify-content: flex-start;
    gap: 24px;
    flex-wrap: wrap;

    border-radius: 8px;
    background: ${({ theme }) => theme.COLORS.BACKGROUND_950};
  }

  > .buttonsWrapper {
    display: flex;
    gap: 48px;
    color: ${({ theme }) => theme.COLORS.BACKGROUND_850};

    > a {
      height: 56px;
      width: 100%;
    }

    .deleteMovie {
      background-color: ${({ theme }) => theme.COLORS.BACKGROUND_950};
      color: ${({ theme }) => theme.COLORS.PINK};
    }

    .changeMovie {
      color: ${({ theme }) => theme.COLORS.BACKGROUND_850};
    }
  }
`;
