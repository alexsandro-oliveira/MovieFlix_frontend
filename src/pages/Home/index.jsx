import { useEffect, useState } from "react";
import { FiPlus } from "react-icons/fi";
import { Link, useNavigate } from "react-router-dom";
import { Header } from "../../components/Header";
import { MovieNote } from "../../components/MovieNote";
import { api } from "../../services/api";
import { Container, Content, SectionMovies } from "./styles";

export function Home() {
  const [movies, setMovies] = useState([]);
  const [search, setSearch] = useState("");

  const navigate = useNavigate();

  function filterMovies(e) {
    setSearch(e.target.value);
  }

  function handlePreview(id) {
    navigate(`/preview/${id}`);
  }

  useEffect(() => {
    async function fetchMovie() {
      const response = await api.get(`/movies?title=${search}`);
      setMovies(response.data);
    }
    fetchMovie();
  });

  return (
    <Container>
      <Header filterMovies={filterMovies} />

      <main>
        <Content>
          <header>
            <h1>Meus Filmes</h1>
            <Link to="/create" className="btnAdd">
              <FiPlus /> Adicionar filme
            </Link>
          </header>
        </Content>

        <SectionMovies>
          {movies.map((movie) => (
            <MovieNote
              key={String(movie.id)}
              data={movie}
              onClick={() => handlePreview(movie.id)}
            />
          ))}
        </SectionMovies>
      </main>
    </Container>
  );
}
