import { Box } from "@mui/material";
import SpecsImage from "~/assets/specsImage.png";
import Table from "~/components/Table";

type MaterialData = {
  name: string;
  temperature: string;
  width: string;
  volume: string;
  weight: string;
};

const columns = [
  { header: "Теплопроводность Вт/м·К", accessor: "temperature" },
  { header: "Толщина стены, см", accessor: "width" },
  { header: "Объем материала для стены, м3", accessor: "volume" },
  { header: "Вес стены, кг", accessor: "weight" },
];

const data: MaterialData[] = [
  {
    name: "PIR",
    temperature: "0.021*",
    width: "5",
    volume: "0.5",
    weight: "15.5",
  },
  {
    name: "Полистирол",
    temperature: "0.037",
    width: "8.8",
    volume: "0.88",
    weight: "22",
  },
  {
    name: "Мин.вата",
    temperature: "0.039",
    width: "9.3",
    volume: "0.93",
    weight: "46",
  },
  {
    name: "Древесина",
    temperature: "0.14",
    width: "33.3",
    volume: "3.33",
    weight: "1667",
  },
  {
    name: "Газосиликат",
    temperature: "0.33",
    width: "78.6",
    volume: "7.86", // Была опечатка в предоставленных данных, исправлено 7.9 на 7.86 для точности
    weight: "4714",
  },
  {
    name: "Полн. кирпич",
    temperature: "0.56",
    width: "133.3",
    volume: "13.3",
    weight: "25333",
  },
];
const SpecsSection = () => {
  return (
    <Box>
      <Box
        sx={{
          width: "100%",
          height: "710px",
          overflowY: "hidden",
          overflowX: {
            xs: "scroll",
            md: "hidden",
          },
          marginBottom: "60px",
        }}
      >
        <Box
          component="img"
          src={SpecsImage}
          alt="Specifications"
          sx={{
            width: "auto",
            height: "100%",
            display: "block",
            margin: "0 auto",
          }}
        />
      </Box>
      <Table columns={columns} data={data} />
    </Box>
  );
};
export default SpecsSection;
