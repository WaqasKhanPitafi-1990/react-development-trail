import { Box, Button, TextField, Typography } from "@mui/material";
import React from "react";
import google from "../../assets/images/google.svg";
import apple from "../../assets/images/apple.svg";
import { Form, useNavigate } from "react-router-dom";

export default function PersonalInfo() {
  const navigate = useNavigate()
  return (
    <Box>
      <Box sx={{ textAlign: "center", mb: "20px" }}>
        <Typography sx={{ fontSize: "20px", fontWeight: "bold" }}>
          Account Details
        </Typography>
        <Typography color="#A1A5B7" sx={{fontSize: '14px'}}>Add your personal info</Typography>
      </Box>
      <Box sx={{ display: "flex", gap: "10px", width: "100%" }}>
        <Button
          sx={{
            px: "10px",
            border: "1px solid  gray",
            py: "5px",
            width: "50%",
            color: "#7E8299",
          }}
        >
          <img src={google} alt="" style={{ paddingRight: "5px" }} /> Sign in
          with Google
        </Button>
        <Button
          sx={{
            px: "10px",
            border: "1px solid  gray",
            py: "5px",
            width: "50%",
            color: "#7E8299",
          }}
        >
          <img src={apple} alt="" style={{ paddingRight: "5px" }} /> Sign in
          with Apple
        </Button>
      </Box>
      <Typography
        color="#A1A5B7"
        sx={{ fontSize: "14px", textAlign: "center", my: "20px " }}
      >
        Or with email
      </Typography>

      <form>
        <Box sx={{ display: "flex", gap: "10px", mb: "15px" }}>
          <TextField placeholder="Firstname" />
          <TextField placeholder="Lastname" />
        </Box>
        <Box sx={{ display: "flex", flexDirection: "column", gap: "15px" }}>
          <TextField placeholder="Creator Name" />
          <TextField placeholder="Email" />
          <TextField placeholder="Phone Number" />
          <TextField placeholder="Password" />
          <TextField placeholder="Confirm Password" />
        </Box>
        <Box sx={{ my: "20px" }}>
          <input type="checkbox" />
          <label htmlFor="">I Accept the Terms</label>
        </Box>
        <Button sx={{ width: "100%", bgcolor: "#006CEA", color: "white" }} onClick={()=>navigate('/home')}>
          Continue
        </Button>
        <Box sx={{ display: "flex", mt: "10px", placeContent: "center" }}>
          <Typography>Already have an account?</Typography>
          <Button sx={{ p: "0" }}>Signin</Button>
        </Box>
      </form>
    </Box>
  );
}
