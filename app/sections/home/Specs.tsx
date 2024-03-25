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
          width: "100%",
          height: "1000px", // May need to adjust based on the actual height of the image or container requirement
          overflowY: "hidden", // Ensures no vertical scrolling
          overflowX: "auto", // Enables horizontal scrolling
        }}
      >
        <Box
          component="img" // Treat this Box as an img element
          src={SpecsImage} // Provides the source for the image
          alt="Specifications" // Alternative text for the image
          sx={{
            width: "auto", // Image can be wider than the container
            height: "100%", // Container height is full of the image height
            display: "block", // Prevents inline formatting issues
            margin: "0 auto", // Centers the image if it's not wider than the container
          }}
        />
      </Box>
      <Table columns={columns} data={data} />
    </Box>
  );
};
export default SpecsSection;
