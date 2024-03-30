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
        height: {
          xs: "150px",
          xl: "190px",
        },
        width: {
          xs: "150px",
          xl: "190px",
        },
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
          height: "70%",
        }}
      >
        {children}
      </Box>
      <Box
        sx={{
          backgroundColor: "#F29E20",
          textAlign: "center",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          height: "30%",
          padding: "5px",
          overflow: "hidden",
        }}
      >
        <Typography
          fontSize={{
            xs: "14px",
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
