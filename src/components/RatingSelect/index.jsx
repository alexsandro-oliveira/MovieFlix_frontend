import Rating from "@mui/material/Rating";
import React from "react";

import { Container } from "./styles";

export function RatingSelect() {
  const [value, setValue] = React.useState();

  return (
    <Container>
      <Rating
        value={value}
        precison={0.5}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      />
    </Container>
  );
}
