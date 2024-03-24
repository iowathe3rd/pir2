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
    temperature: "0.021",
    width: "5",
    volume: "0.3",
    weight: "10",
  },
  {
    name: "EPS",
    temperature: "0.034",
    width: "10",
    volume: "0.5",
    weight: "18",
  },
  {
    name: "Полистирол",
    temperature: "0.034",
    width: "10",
    volume: "0.5",
    weight: "18",
  },
  {
    name: "Мин.вата",
    temperature: "0.034",
    width: "10",
    volume: "0.5",
    weight: "18",
  },
  {
    name: "Древесина",
    temperature: "0.034",
    width: "10",
    volume: "0.5",
    weight: "18",
  },
  {
    name: "Газосиликат",
    temperature: "0.034",
    width: "10",
    volume: "0.5",
    weight: "18",
  },
  {
    name: "Полн. кирпич",
    temperature: "0.034",
    width: "10",
    volume: "0.5",
    weight: "18",
  },
];

const SpecsSection = () => {
  return (
    <Box>
      <Box
        sx={{
          backgroundImage: `url(${SpecsImage})`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "contain",
          width: "100%",
          height: {
            xs: "600px",
          },
          margin: {
            xs: "10px 0px 25px 0px",
            lg: "15px 0px 40px 0px",
          },
        }}
      />
      <Table columns={columns} data={data} />
    </Box>
  );
};

export default SpecsSection;
