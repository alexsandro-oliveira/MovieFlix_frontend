import styled from "styled-components";

export const Container = styled.button`
  background: transparent;
  border: none;

  > span {
    color: ${({ theme }) => theme.COLORS.PINK};

    .MuiRating-iconEmpty {
      color: ${({ theme }) => theme.COLORS.PINK};
    }
  }
`;
