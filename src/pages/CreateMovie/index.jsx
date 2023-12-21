import { useState } from "react";
import { FiArrowLeft } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import { Button } from "../../components/Button";
import { Header } from "../../components/Header";
import { Input } from "../../components/Input";
import { MovieTag } from "../../components/MovieTag";
import { Section } from "../../components/Section";
import { Textarea } from "../../components/Textarea";
import { Container, Form } from "./styles";

export function CreateMovie() {
  const [title, setTitle] = useState("");
  const [rating, setRating] = useState([]);
  const [description, setDescription] = useState("");
  const [tags, setTags] = useState([]);
  const [newTag, setNewTag] = useState("");

  const navigate = useNavigate();

  function handleBack() {
    navigate(-1);
  }

  function handleAddTag() {
    setTags((prevState) => [...prevState, newTag]);
    setNewTag("");
  }

  function handleRemoveTag(deleted) {
    setTags((prevState) => prevState.filter((tag) => tag !== deleted));
  }

  async function handleNewMovie() {
    if (!title) {
      return alert("Digite o título da nota");
    }

    const isRatingValid = rating >= 0 && rating <= 5 && rating !== "";

    if (!isRatingValid) {
      return alert("É necessário dar uma nota entre 0 e 5 para cadastrar um filme.");       
    }    

    if (newTag) {
      return alert(
        "Você deixou uma tag no campo para adicionar, mas não clicou em adicionar. Clique para adicionar ou deixe o campo vazio."
      );
    }

    await api.post("/movies", {
      title,
      rating,
      description,
      tags,
    });

    alert("Filme criado com sucesso!");
    navigate(-1);
  }

  return (
    <Container>
      <Header />

      <main>
        <Form>
          <div className="btnBack">
            <button type="button" onClick={handleBack}>
              <FiArrowLeft />
              Voltar
            </button>
          </div>
          <h1>Novo Filme</h1>

          <div className="input">
            <Input
              placeholder="Titulo"
              onChange={(e) => setTitle(e.target.value)}
            />
            <Input
              placeholder="Sua nota (de 0 a 5)"
              type="number"
              min="0"
              max="5"
              value={rating}
              onChange={(e) => setRating(e.target.value)}
            />
          </div>

          <Textarea
            placeholder="Observações"
            onChange={(e) => setDescription(e.target.value)}
          />

          <Section title="Marcadores">
            <div className="movieTags">
              {tags.map((tag, index) => (
                <MovieTag
                  key={String(index)}
                  value={tag}
                  onClick={() => handleRemoveTag(tag)}
                />
              ))}
              <MovieTag
                isNew
                placeholder="Nova tag"
                onChange={(e) => setNewTag(e.target.value)}
                value={newTag}
                onClick={handleAddTag}
              />
            </div>
          </Section>

          <div className="buttonsWrapper">
            <Button
              className="deleteMovie"
              title="Descartar alterações"
              highlighted={false}
              onClick={handleBack}
            />
            <Button
              className="changeMovie"
              title="Salvar alterações"
              onClick={handleNewMovie}
            />
          </div>
        </Form>
      </main>
    </Container>
  );
}
