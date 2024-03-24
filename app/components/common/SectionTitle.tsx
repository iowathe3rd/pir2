import { Box, Typography } from "@mui/material";

interface SectionTitleProps {
  className?: string;
  title: string;
  subtitle: string;
  isReverse?: boolean;
}

export function SectionTitle({
  className = "",
  title = "",
  subtitle,
  isReverse = false,
}: SectionTitleProps) {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: isReverse ? "column-reverse" : "column",
      }}
      className={className}
    >
      {title !== "" && <Typography variant={"subtitle1"}>{title}</Typography>}
      <Typography variant={"h5"} component={"h2"} fontWeight={"bolder"}>
        {subtitle}
      </Typography>
    </Box>
  );
}

export default SectionTitle;
