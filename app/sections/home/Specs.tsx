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
      <img src={SpecsImage} alt="specifications" />
      <Table columns={columns} data={data} />
    </Box>
  );
};

export default SpecsSection;
