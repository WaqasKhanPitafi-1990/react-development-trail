import { Box, Typography } from "@mui/material";
import React from "react";

export default function SignupTabs({ tabInfo, step, setStep }) {
  return (
    <Box
      sx={{ display: "flex", gap: "15px", cursor: 'pointer' }}
      onClick={() => setStep(tabInfo.step)}
    >
      <Box
        sx={{
          width: "40px",
          height: "40px",
          borderRadius: "5px",
          borderColor: "white",
          border: step===tabInfo.step? "1px dashed #50CD89":"1px dashed white",
          textAlign: "center",
          color: "white",
          bgcolor: step === tabInfo.step ? "#50CD89" : "#006CEA",
        }}
      >
        <Typography
          sx={{ fontWeight: "bold", position: "relative", top: "8px" }}
        >
          {tabInfo.step}
        </Typography>
      </Box>
      <Box
        sx={{
          color: "#E3E4E9",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Typography sx={{ fontWeight: "bold", fontSize: "18px" }}>
          {tabInfo.name}
        </Typography>
        <Typography
          sx={{ fontWeight: "300", fontSize: "12px", color: "#E3E4E9" }}
        >
          {tabInfo.description}
        </Typography>
      </Box>
    </Box>
  );
}
