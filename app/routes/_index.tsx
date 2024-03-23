import { Box, Container } from "@mui/material";
import type { MetaFunction } from "@remix-run/node";
import Hero from "~/sections/home/Hero";
import ProductionSection from "~/sections/home/Production";
import Testimonials from "~/sections/home/Testimonals";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  return (
    <Box component={"main"}>
      <Hero />
      <Container
        sx={{
          displat: "flex",
          flexDirection: "column",
          gap: "20px",
        }}
      >
        <ProductionSection />
        <Testimonials />
      </Container>
    </Box>
  );
}
