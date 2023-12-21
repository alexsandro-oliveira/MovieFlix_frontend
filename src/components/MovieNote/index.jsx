import { Tags } from "../../components/Tags";
import { Rating } from "../RatingResult";
import { Container } from "./styles";

export function MovieNote({ data, ...rest }) {
  return (
    <Container {...rest}>
      <h1>{data.title}</h1>
      <Rating rating={data.rating} />

      <p> {data.description}</p>
      {data.tags && (
        <div>
          {data.tags.map((tag) => (
            <Tags key={tag.id} title={tag.name} />
          ))}
        </div>
      )}
    </Container>
  );
}
