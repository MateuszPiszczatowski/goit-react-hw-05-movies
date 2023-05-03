import { nanoid } from "nanoid";
import StyledNavLink from "../StyledNavLink/StyledNavLink";
import css from "./Navigation.module.css";

const Navigation = ({ pagesDict }) => {
  return (
    <nav className={css.Navigation}>
      {Object.keys(pagesDict).map((page) => (
        <StyledNavLink key={nanoid()} to={pagesDict[page]}>
          {page}
        </StyledNavLink>
      ))}
    </nav>
  );
};

export default Navigation;
