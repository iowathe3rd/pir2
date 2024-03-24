import { Box, Button, Stack, Typography } from "@mui/material";
import ProductImage from "~/assets/product.png";
import Price from "~/components/common/Price";
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
        boxShadow: 2,
        gap: "30px",
        zIndex: 3,
      }}
    >
      <Box
        sx={{
          width: {
            xs: "100%",
            lg: "30%",
          },
          height: {
            xs: "400px",
          },
          position: "relative",
          backgroundColor: "#D9D9D936",
          borderRadius: "15px",
        }}
      >
        <Box
          sx={{
            position: "absolute",
            backgroundImage: `url(${product.image})`,
            backgroundSize: "contain",
            backgroundPosition: "30% 40%",
            backgroundRepeat: "no-repeat",
            left: 0,
            right: 0,
            marginLeft: "auto",
            marginRight: "auto",
            width: {
              xs: "90%",
              lg: "115%",
            } /* Need a specific value to work */,
            height: {
              xs: "90%",
              lg: "115%",
            },
            zIndex: 4,
          }}
        />
      </Box>
      <Stack
        sx={{
          width: {
            xs: "100%",
            lg: "65%",
          },
        }}
        spacing={"30px"}
      >
        <SectionTitle
          title={product.title}
          subtitle={product.subTitle}
          isReverse
        />
        <Typography>{product.description}</Typography>
        <Box
          sx={{
            display: "flex",
            justifyContent: "flex-end",
            gap: "18px",
          }}
        >
          <Price
            newPrice={product.price.newPrice}
            oldPrice={product.price.oldPrice}
          />
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
