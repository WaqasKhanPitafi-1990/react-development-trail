import { Box, Typography } from "@mui/material";
import React, { Fragment } from "react";
import home from "../../assets/images/home.svg";

const SideBarComponents = ({sidebarImg, sidebarText,index}) => {
  return (
    <Fragment>
      <Box
        sx={{
          padding: "8px 10px",
          background: index === 0 ? 'var(--primary-primary-light, #EEF6FF)' : 'none',
          borderRadius : index === 0 ? '6px' : '0px',
          cursor : 'pointer'
        }}
      >
        <Box sx={{ display: "flex", gap:"12px", alignItems: "center" }}>
          <Box component="img" src={sidebarImg}></Box>
          <Typography
            sx={{
              color: index === 0 ? 'var(--primary-primary, #3E97FF)' : 'var(--gray-gray-700, #5E6278)',
              fontFamily: "Inter",
              fontSize: {sm : '12px', md : '15px'},
              fontStyle: "normal",
              fontWeight: 600,
              display : {xs : 'none', sm : 'block'}
            //   lineHeight: "106.667%",
            }}
          >
        {sidebarText}
          </Typography>
        </Box>
      </Box>
    </Fragment>
  );
};

export default SideBarComponents;
