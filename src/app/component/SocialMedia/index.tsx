import { ReactComponent as GithubLogo } from "app/assets/logo-github.svg";
import * as C from "./styles";

export const SocialMedia = () => {
    return (
      <C.Container>
        <li>
          <C.Link href="https://github.com/sonyfebrian/pokedex-react-ts">
            <GithubLogo />
          </C.Link>
        </li>
      </C.Container>
    );
  };