import { Box } from "@mui/material";
import logo from "~/assets/logo.png";

const Logo = () => (
  <Box className="mb-7 flex flex-row items-center justify-center">
    <img src={logo} alt="Логотип" title="Логотип" />
  </Box>
);
export default Logo;
