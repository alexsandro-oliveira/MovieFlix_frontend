import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: grid;
  grid-template-rows: 116px auto;
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

export const Content = styled.div`
  padding: 0 120px;

  > header {
    display: flex;
    align-items: center;
    justify-content: space-between;

    > .btnAdd {
      display: flex;
      align-items: center;
      padding: 1.3rem 3.2rem;
      gap: 0.8rem;
      border-radius: 0.8rem;
      margin: 4.7rem 0 3.7rem 0;
      border: none;
      background-color: ${({ theme }) => theme.COLORS.PINK};

      color: ${({ theme }) => theme.COLORS.BACKGROUND_850};

      font-weight: 400;
      font-size: 1.6rem;
      line-height: 2.1rem;

      svg {
        width: 2rem;
        height: 2rem;
      }
    }
  }

  .tags {
    margin-top: 40px;
    gap: 8px;
  }
`;

export const SectionMovies = styled.div`
  width: 100%;
  height: 100vh;
  padding: 0 120px;
`;
