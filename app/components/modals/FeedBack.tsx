import { Box, Button, Stack, TextField, Typography } from "@mui/material";
import { Link } from "@remix-run/react";

const FeedBackModalContent = () => {
  return (
    <Box>
      <Stack
        spacing={2}
        sx={{
          marginBottom: "20px",
        }}
      >
        <Typography
          variant="h6"
          sx={{
            textAlign: "center",
          }}
        >
          Оставьте ваши данные и наш менеджер свяжется с Вами, чтобы рассчитать
          количество и стоимость материалов
        </Typography>
        <TextField placeholder="Ваше имя" />
        <TextField placeholder="+7 (777) 777 77 77" />
        <Button
          variant="contained"
          color="primary"
          sx={{
            fontSize: "20px",
          }}
        >
          Заказать звонок
        </Button>
        <Typography variant="subtitle1">
          Нажимая на кнопку, вы соглашаетесь с{" "}
          <Link to={""}>условиями обработки персональных данных</Link>
        </Typography>
      </Stack>
    </Box>
  );
};

export default FeedBackModalContent;
