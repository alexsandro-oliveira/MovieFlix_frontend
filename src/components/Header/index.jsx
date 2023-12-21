import { FiSearch } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import avatarPlaceholder from "../../assets/avatar_placeholder.svg";
import { Input } from "../../components/Input";
import { useAuth } from "../../hooks/auth";
import { api } from "../../services/api";
import { Brand, Container, Profile, Search, User } from "./styles";

export function Header({ filterMovies }) {
  const { user, signOut } = useAuth();
  const navigate = useNavigate();

  function handleSignOut() {
    navigate("/");
    signOut();
  }

  const avatarUrl = user.avatar
    ? `${api.defaults.baseURL}/files/${user.avatar}`
    : avatarPlaceholder;

  return (
    <Container>
      <Brand>
        <h1>MovieFlix</h1>
      </Brand>
      <Search>
        <Input
          placeholder="Pesquisar pelo título"
          icon={FiSearch}
          onChange={filterMovies}
        />
      </Search>

      <User>
        <strong>{user.name}</strong>
        <button type="button" onClick={handleSignOut}>
          sair
        </button>
      </User>

      <Profile to="/profile">
        <img src={avatarUrl} alt="Foto do usuário" />
      </Profile>
    </Container>
  );
}
