import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { StyledPostsTab } from "../styles/PostsTab.styled";
import { faFilter } from "@fortawesome/free-solid-svg-icons";

export default function PostsTab() {
  const visibilityOptions = [
    "Publiczny",
    "Niepubliczny",
    "Prywatny",
    "Szkic",
    "Dla zweryfikowanych",
  ];

  return (
    <StyledPostsTab>
      <section>
        <FontAwesomeIcon icon={faFilter} />
      </section>
    </StyledPostsTab>
  );
}
