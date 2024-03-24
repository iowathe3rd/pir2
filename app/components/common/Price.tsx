import { Box, Typography, styled } from "@mui/material";

const OldPrice = styled(Typography)({
  color: "#929191",
  fontSize: "14px",
  fontWeight: 600,
  textDecoration: "line-through",
  textDecorationColor: "#929191",
});

const NewPrice = styled(Typography)({
  fontSize: "26px",
  fontWeight: 600,
});
const Price = ({ oldPrice, newPrice }) => {
  return (
    <Box>
      <OldPrice>{oldPrice}</OldPrice>
      <NewPrice>{newPrice}</NewPrice>
    </Box>
  );
};
export default Price;
