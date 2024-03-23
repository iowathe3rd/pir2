import { Box, Typography } from "@mui/material";
import React from "react";

export interface QuickInfoCardProps {
  title: string;
  children: React.ReactNode;
}

const QuickInfoCard: React.FC<QuickInfoCardProps> = ({ title, children }) => {
  return (
    <Box
      sx={{
        height: "190px",
        width: { xl: "190px" },
        color: "#FFFFFF",
        backgroundColor: "#F9F9F9",
        display: "flex",
        flexDirection: "column",
        borderRadius: { xs: "10px", xl: 0 },
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexGrow: 1,
        }}
      >
        {children}
      </Box>
      <Box
        sx={{
          width: "80%",
          backgroundColor: "#FFFFFF",
          height: "2px",
          marginX: "auto",
        }}
      />
      <Box
        sx={{
          backgroundColor: "#F29E20",
          textAlign: "center",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          height: "30%",
          borderRadius: { xs: "10px", xl: 0 },
        }}
      >
        <Typography
          fontSize={{
            xl: "18px",
          }}
          fontWeight={400}
          fontStyle={"italic"}
          fontFamily={"sans-serif"}
        >
          {title}
        </Typography>
      </Box>
    </Box>
  );
};

export default QuickInfoCard;
