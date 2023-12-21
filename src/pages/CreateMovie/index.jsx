import { FiArrowLeft } from "react-icons/fi";
import { Link } from "react-router-dom";
import { Button } from "../../components/Button";
import { Header } from "../../components/Header";
import { Input } from "../../components/Input";
import { MovieTag } from "../../components/MovieTag";
import { Section } from "../../components/Section";
import { Textarea } from "../../components/Textarea";
import { Container, Form } from "./styles";

export function CreateMovie() {
  return (
    <Container>
      <Header />

      <main>
        <Form>
          <div className="btnBack">
            <Link to="/">
              <FiArrowLeft />
              Voltar
            </Link>
          </div>
          <h1>Novo Filme</h1>

          <div className="input">
            <Input placeholder="Titulo" />
            <Input
              placeholder="Sua nota (de 0 a 5)"
              type="number"
              min="0"
              max="5"
            />
          </div>

          <Textarea placeholder="Observações" />

          <Section title="Marcadores">
            <div className="movieTags">
              
              <MovieTag isNew placeholder="Novo marcador" />
            </div>
          </Section>

          <div className="buttonsWrapper">
            <Button className="deleteMovie" title="Excluir filme" />
            <Button className="changeMovie" title="Salvar alterações" />
          </div>
        </Form>
      </main>
    </Container>
  );
}
