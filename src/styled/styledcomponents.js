import styled from "styled-components";
import { InputBase } from "@material-ui/core";

// Design Pattern: Style Component
export const StyledInput = styled(InputBase)`
  z-index: 30;
  background: #fff;
  padding: 25.5px;
  outline-width: 0;
  height: 30px;
  border-radius:5px
 
  border: none;

`;

export const StyledButton = styled.button`
z-index: 15;
background-color:${(props) => (props.color === "gray" ? "lightgray" : "red")};
color: #fff;
border-radius: ${(props) => (props.radius ? "5px" : null)};
padding: 15px;
width: ${({ wide }) => handleWidth(wide)};
  text-transform: inherit;
  cursor: pointer;
  padding: 15px;
  font-size: 1.1rem;
  border: none;
  outline: none;
`;

const handleWidth = (wide) => {
   
  switch (wide) {
    case "fullWidth":
      return "100%";
    case "medium":
      return "260px";
    default:
      return "160px";
  }
};
