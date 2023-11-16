import { Box } from "@mui/material";
import React, { Fragment } from "react";
import logoo from "../../assets/images/logoo.svg";
import avatar from "../../assets/images/avatar.svg";
import down from "../../assets/images/down.svg";
import icon from "../../assets/images/icon.svg";
import magnifier from "../../assets/images/magnifier.svg";

const Navbar = () => {
  return (
    <Fragment>
      <Box
        sx={{
          borderBottom: "1px solid var(--gray-gray-300, #E1E3EA)",
          background: "var(--white-dark-white, #FFF)",
        //   
          height : '80px',
          display : 'flex',
          alignItems : 'center'
        //   

        //   padding: "20px 30px",
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            //
            width : "100%"
            //
          }}
        >
          <Box component="img" src={logoo}></Box>
          <Box
            sx={{
             
              justifyContent: "space-between",
              alignItems: "center",
              gap : '20px',
              display : {xs : 'none', sm : 'flex'}
            }}
          >
            <Box component="img" src={icon}></Box>
            <Box component="img" src={magnifier}></Box>
            <Box component="img" src={avatar}></Box>
            <Box component="img" src={down}></Box>
          </Box>
        </Box>
      </Box>
    </Fragment>
  );
};

export default Navbar;
