import { nanoid } from "nanoid";
import StyledNavLink from "../StyledNavLink/StyledNavLink";

const Navigation = ({ pagesDict }) => {
  return (
    <ul>
      {Object.keys(pagesDict).map((page) => (
        <li key={nanoid()}>
          <StyledNavLink to={pagesDict[page]}>{page}</StyledNavLink>
        </li>
      ))}
    </ul>
  );
};

export default Navigation;
