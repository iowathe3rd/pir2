import { Box, Button, Stack, Typography } from "@mui/material";
import ProductImage from "~/assets/product.png";
import SectionTitle from "~/components/common/SectionTitle";

const product = {
  image: ProductImage,
  title: "ПИР плита Фольга/Фольга",
  subTitle: "Размер: 1200х2400х50мм",
  description: `«PIR Плита»® используется для утепления жилых и промышленных помещений, от балконов квартир до плоской кровли производственных предприятий. Обладает европейским сертификатом СЕ: сертифицирована по европейскому стандарту для утеплителей из пенополиизоцианурата с мягкими обкладками EN 13165, класс Е по реакции на огонь. «PIR Плита»® помогает существенно снизить затраты на отопление или кондиционирование за счет низкого коэффициента теплопроводности 0,020 Вт/(м*К), подтвержденной испытаниямиАО«ЦНИИПромзданий». Внимание! Заказ «PIR Плиты»® размером 600х1200 мм любой толщины и типа кромки должен быть кратен 5 шт.`,
  price: {
    oldPrice: "8.500тг/м²",
    newPrice: "7.459тг/м²",
  },
};

const ProductCard = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: {
          xs: "column",
          lg: "row",
        },
        padding: {
          xs: "10px",
          lg: "25px",
        },
        boxShadow: 3,
      }}
    >
      <Box
        sx={{
          backgroundImage: `url(${product.image})`,
          backgroundSize: "contain",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          width: {
            xs: "100%",
            lg: "30%",
          },
        }}
      />
      <Stack
        sx={{
          width: {
            xs: "100%",
            lg: "65%",
          },
        }}
      >
        <SectionTitle title={product.title} subtitle={product.subTitle} />
        <Typography>{product.description}</Typography>
        <Box>
          <Box></Box>
          <Button
            color="primary"
            variant="contained"
            sx={{
              borderRadius: "3px",
            }}
          >
            Оставить заявку
          </Button>
        </Box>
      </Stack>
    </Box>
  );
};
const Products: React.FC = () => {
  return (
    <Stack spacing={2}>
      {[1, 2, 3, 4, 5].map((_value, index) => {
        return <ProductCard key={index} />;
      })}
    </Stack>
  );
};

export default Products;
