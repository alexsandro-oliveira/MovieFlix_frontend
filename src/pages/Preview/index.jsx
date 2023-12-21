import { useEffect, useState } from "react";
import { FiArrowLeft, FiClock, FiTrash2 } from "react-icons/fi";
import { useNavigate, useParams } from "react-router-dom";
import avatarPlaceholder from "../../assets/avatar_placeholder.svg";
import { Header } from "../../components/Header";
import { Rating } from "../../components/RatingResult";
import { Tags } from "../../components/Tags";
import { useAuth } from "../../hooks/auth";
import { api } from "../../services/api";
import { Container, Content } from "./styles";

export function Preview() {
  const [data, setData] = useState(null);
  const { user } = useAuth();

  const params = useParams();
  const navigate = useNavigate();

  function handleBack() {
    navigate(-1);
  }

  async function handleRemove() {
    const confirm = window.confirm("Deseja realmente remover este filme?");

    if (confirm) {
      await api.delete(`/movies/${params.id}`);
      navigate(-1);
    }
  }

  const avatarUrl = user.avatar
    ? `${api.defaults.baseURL}/files/${user.avatar}`
    : avatarPlaceholder;

  function handleBack() {
    navigate(-1);
  }

  useEffect(() => {
    async function fetchMovie() {
      const response = await api.get(`/movies/${params.id}`);
      setData(response.data);
    }
    fetchMovie();
  });

  return (
    <Container>
      <Header />
      {data && (
        <main>
          <Content>
            <div className="btn">
              <button type="button" onClick={handleBack}>
                <FiArrowLeft />
                Voltar
              </button>

              <button type="button" onClick={handleRemove}>
                <FiTrash2 />
                Remover Filme
              </button>
            </div>

            <div className="title">
              <h1>{data.title}</h1>
              <Rating
                width={"2rem"}
                height={"2rem"}
                margin={"1rem 0 0"}
                rating={data.rating}
              />
            </div>

            <div className="detail">
              <img src={avatarUrl} alt="Imagem do usuário" />
              <p>{`Por ${user.name}`}</p>
              <span>
                <FiClock />
                {data.created_at}
              </span>
            </div>

            {data.tags && (
              <div className="tags">
                {data.tags.map((tag) => (
                  <Tags key={String(tag.id)} title={tag.name} />
                ))}
              </div>
            )}

            <div className="description">
              <p>{data.description}</p>
            </div>
          </Content>
        </main>
      )}
    </Container>
  );
}
