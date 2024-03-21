import { ButtonProps as MuiButtonProps, styled, Button as MuiButton } from "@mui/material";

interface ButtonProps extends MuiButtonProps {
  rounded?: "sm" | "md" | "lg"
}
const Button = styled((props: ButtonProps) => (
  <MuiButton {...props} disableRipple>
    {props.children}
  </MuiButton>
))(({ rounded = 'sm', variant = 'contained' }: ButtonProps) => {
  const styles = {
    sm: "3px",
    md: "10px",
    lg: "15px",
  };

  const variantStyles = {
    text: {
      backgroundColor: "transparent",
      color: "#ED801B",
      border: "none",
    },
    outlined: {
      backgroundColor: "transparent",
      color: "#ED801B",
      border: "1px solid #ED801B",
    },
    contained: {
      backgroundColor: "#ED801B",
      color: "white",
      border: "none",
    },
  };

  return {
    padding: "14px",
    fontSize: "16px",
    fontWeight: "500",
    backgroundColor: variantStyles[variant].backgroundColor,
    borderRadius: styles[rounded] || styles.sm,
    color: variantStyles[variant].color,
    border: variantStyles[variant].border,
    "&:hover": {
      backgroundColor: variant === "text" ? "transparent" : "#c66810",
      borderColor: variant === "outlined" ? "#0062cc" : "transparent",
      boxShadow: "none",
    },
    "&:active": {
      boxShadow: "none",
      backgroundColor: variant === "text" ? "transparent" : "#c66810",
      borderColor: variant === "outlined" ? "#005cbf" : "transparent",
    },
    "&:focus": {
      boxShadow: variant !== "text" ? "0 0 0 0.2rem rgba(255,255,255,1)" : "none",
    },
  };
});

export default Button;
