import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: grid;
  grid-template-rows: 105px auto;
  grid-template-areas: "header" "content";

  > main {
    grid-area: content;
    padding: 64px 0;
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

export const Content = styled.div`
  grid-area: "content";
  width: 100%;
  margin: 0 auto;

  padding: 0 120px;

  display: flex;
  flex-direction: column;

  .btnBack {
    display: flex;

    button {
      color: ${({ theme }) => theme.COLORS.PINK};
      background: none;
      border: none;

      svg {
        margin-right: 8px;
      }
    }
  }

  .title {
    display: flex;
    align-items: center;
    gap: 19px;
    margin: 24px 0;

    > h1 {
      font-size: 36px;
      font-weight: 500;
    }
  }

  .detail {
    display: flex;
    align-items: center;

    > img,
    svg {
      width: 16px;
      height: 16px;
      border-radius: 50%;
      margin-right: 8px;
    }

    > span,
    p {
      margin-right: 8px;
      font-size: 16px;
      font-weight: 400;
    }
  }

  .tags {
    margin-top: 40px;
    gap: 8px;
  }

  .description {
    margin-top: 40px;
    text-align: justify;
  }
`;
