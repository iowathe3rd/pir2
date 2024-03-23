import { styled } from "@mui/material/styles";
import { ContainerProps } from "@mui/material/Container";
import {Container as MuiContainer} from "@mui/material";

export const SectionContainer = styled((props: ContainerProps) => (
  <MuiContainer {...props}>{props.children}</MuiContainer>
))(() => ({
	paddingTop: "60px",
	paddingBottom: "60px",
}));

export default SectionContainer;
