import { ButtonProps, styled, Button as MuiButton } from "@mui/material";

const Button = styled((props: ButtonProps) => (
  <MuiButton {...props}
  >{props.children}</MuiButton>
))(() => ({
	// Увеличиваем ширину контейнера на больших устройствах
	backgroundColor: "#ED801B",
	color: "white",
	'&:hover': {
    backgroundColor: '#c66810',
    borderColor: '#0062cc',
    boxShadow: 'none',
  },
  '&:active': {
    boxShadow: 'none',
    backgroundColor: '#c66810',
    borderColor: '#005cbf',
  },
  '&:focus': {
    boxShadow: '0 0 0 0.2rem rgba(255,255,255,1)',
  },
}));


export default Button
