import { Box, Typography } from "@mui/material";
import React, { Fragment } from "react";

import frame from "../../assets/images/frame.svg";

const ShadowBox = ({dataText, dataImg, dataBorder, dataNumber}) => {
  return (
    <Fragment>
     
      <Box
        sx={{
            boxSizing: 'border-box',
          padding: {xs : '10px 10px',sm : '15px 12px' , md : "28px 27px"},
          borderRadius: "12px",
          borderBottom: dataBorder,
          background: "var(--white-dark-white, #FFF)",
        //   width: "200px",
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <Typography
            sx={{
              color: "var(--gray-gray-900, #181C32)",
              fontFamily: "Inter",
              fontSize: {xs : '18px',sm : '24px', md : '34px'},
              fontStyle: "normal",
              fontWeight: 600,
              lineHeight: {xs : '18px',sm : '24px', md : '34px'},
              letterSpacing: "-0.68px",
            }}
          >
        
            {dataNumber}
          </Typography>
          <Box component="img" sx={{width : {xs : '25px',sm : '30px', md : '35px'} , height : {xs : '25px',sm : '30px', md : '35px'}}} src={dataImg}></Box>
        </Box>
        <Typography
          sx={{
            color: "var(--gray-gray-700, #5E6278)",
            fontFamily: "Inter",
            fontSize: {xs : '10px',sm : "13px", md : '16px'},
            fontStyle: "normal",
            fontWeight: 500,
            lineHeight: {xs : '10px',sm : "13px", md : '16px'},
            marginTop: {xs : '8px',sm : "10px", md : '12px'},
          }}
        >
         {dataText}
        </Typography>
      </Box>
    </Fragment>
  );
};

export default ShadowBox;
