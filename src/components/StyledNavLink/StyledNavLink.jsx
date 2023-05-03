import { NavLink } from "react-router-dom";
import styled from "styled-components";

const StyledNavLink = styled(NavLink)`
  color: black;

  &.active {
    color: red;
  }
`;

export default StyledNavLink;
