import styled from "@emotion/styled";
import { ContainerProps, Container as MuiContainer } from "@mui/material";

const Container = styled((props: ContainerProps) => (
  <MuiContainer {...props}>{props.children}</MuiContainer>
))(({ theme }) => ({
	// Увеличиваем ширину контейнера на больших устройствах
	[theme.breakpoints.up("lg")]: {
		maxWidth: "1536px",
	},
}));

export default Container
