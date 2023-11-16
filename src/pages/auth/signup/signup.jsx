import { Box, Button } from "@mui/material";
import React, { useState } from "react";
import logo from "../../../assets/images/Logo.svg";
import PersonalInfo from "../../../components/signup/personalInfo";
import SignupTabs from "../../../components/signup/signupTabs";
import AccountType from "../../../components/signup/accountType";

export default function Signup() {
  const [step, setStep] = useState("1");
  const signupTabs = [
    {
      name: "Account Type",
      description: "Select your account type",
      step: "1",
    },
    {
      name: "Personal Info",
      description: "Setup you personal info",
      step: "2",
    },
    {
      name: "Verification",
      description: "Verify your account",
      step: "3",
    },
    {
      name: "Creator Info",
      description: "Setup creator details",
      step: "4",
    },
    {
      name: "Completed",
      description: "Your account is created",
      step: "5",
    },
  ];
  return (
    <Box
      display="flex"
      sx={{ flexDirection: { xs: "column", sm: "column", md: "row" }, minHeight: '100vh', height: '100%' }}
    >
      <Box
        sx={{
          bgcolor: "#006CEA",
          // height: {sm: 'auto', md: '100%'},
          width: { sm: "100%", md: "40%" },
          height: 'auto',
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Box sx={{mt: "1rem"}}>
          <img src={logo} alt="" />
        </Box>
        <Box sx={{my: '2rem'}}>
          {signupTabs.map((tab, index) => (
            <Box>
              <SignupTabs tabInfo={tab} step={step} setStep={setStep} />
              {index !== signupTabs.length - 1 && (
                <Box
                  sx={{
                    height: "50px",
                    borderLeft: "1px dashed white",
                    position: "relative",
                    left: "20px",
                  }}
                ></Box>
              )}
            </Box>
          ))}
        </Box>
        <Box sx={{ color: "#E3E4E9", mb: "1rem" }}>
          <Button sx={{ color: "#E3E4E9" }}>Terms</Button>
          <Button sx={{ color: "#E3E4E9" }}>Plans</Button>
          <Button sx={{ color: "#E3E4E9" }}>Contact Us</Button>
        </Box>
      </Box>
      <Box
        sx={{
          width: { sm: "100%", md: "60%" },
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: {sm: 'auto', md: '100%'},
          placeSelf: 'center'
        }}
      >
        {step === "1" && <AccountType step={step} setStep={setStep} />}
        {step === "2" && <PersonalInfo />}
      </Box>
    </Box>
  );
}
