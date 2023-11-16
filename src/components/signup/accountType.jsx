import { Box, Button, Typography } from "@mui/material";
import React from "react";
import account from "../../assets/images/account.svg";
import agency from "../../assets/images/agency.svg";
import arrow from "../../assets/images/arrow.svg";

export default function AccountType({ step, setStep }) {
  return (
    <Box sx={{p: "2rem"}}>
      <Typography sx={{ fontSize: "20px", fontWeight: "bold" }}>
        Choose an account type
      </Typography>
      <Box display="flex" sx={{ mb: "20px" }}>
        <Typography color="grey">
          If you need more info, please visit out help page
        </Typography>
        <Button
          sx={{
            textTransform: "lowercase",
            p: "0",
            pl: "5px",
            fontSize: "15px",
            color: "#006CEA",
            position: "relative",
            bottom: "2px",
          }}
        >
          help page
        </Button>
      </Box>
      <Box sx={{ display: "flex", gap: "10px", flexDirection: {xs: "column", sm: "row"}, alignItems: {xs: 'center'}}}>
        <Box
          display="flex"
          gap="10px"
          sx={{
            p: "20px",
            border: "1px dashed #006CEA",
            borderRadius: "5px",
            width: "fit-content",
            pr: "50px",
          }}
        >
          <img src={account} alt="" />
          <Box>
            <Typography sx={{ fontWeight: "bold" }}>Creator</Typography>
            <Typography color="gray">Signup as a creator</Typography>
          </Box>
        </Box>
        <Box
          display="flex"
          gap="10px"
          sx={{
            p: "20px",
            border: "1px dashed gray",
            borderRadius: "5px",
            width: "fit-content",
            pr: "50px",
          }}
        >
          <img src={agency} alt="" />
          <Box>
            <Typography sx={{ fontWeight: "bold" }}>Agency</Typography>
            <Typography color="gray">Signup as an agency</Typography>
          </Box>
        </Box>
      </Box>
      <Button
        sx={{
          py: "10px",
          bgcolor: "#006CEA",
          color: "white",
          float: "right",
          mt: "20px",
          px: "15px",
        }}
        onClick={() => setStep("2")}
      >
        Continue <img src={arrow} alt="" />
      </Button>
    </Box>
  );
}
