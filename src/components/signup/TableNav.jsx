import { Box, Typography } from "@mui/material";
import React, { Fragment } from "react";
import dummyusers from "../../assets/images/dummyuser.svg";
import arrows from "../../assets/images/arrows.svg";
import down from "../../assets/images/down.svg";

const TableNav = () => {
  return (
    <Fragment>
      <Box
        sx={{
          padding: { xs: "15px 0px", md: "30px 0px" },
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            flexDirection: { xs: "column", md: "row" },
            gap : {xs : '20px'}
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: "12px",
              borderRadius: "6px",
              background: "var(--gray-gray-100, #F9F9F9)",
              width: {xs : '130px', sm : '180px'},
            }}
          >
            <Box
              sx={{ padding: "11px" }}
              component="img"
              src={dummyusers}
            ></Box>
            <Typography
              sx={{
                color: "var(--gray-gray-600, #7E8299)",
                fontFamily: "Inter",
                fontSize: 12,
                fontStyle: "normal",
                fontWeight: 600,
                lineHeight: "12px", // or use 1 for 100%
              }}
            >
              Search
            </Typography>
          </Box>

          <Box sx={{ display: "flex", gap: {xs : '10px', sm :'20px'} }}>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                borderRadius: "6px",
                background: "var(--primary-primary-light, #EEF6FF)",
                padding: "9px 12px",
                gap: "5px",
              }}
            >
              <Box component="img" src={arrows}></Box>
              <Typography
                sx={{
                  color: "var(--primary-primary, #3E97FF)",
                  fontFamily: "Inter",
                  fontSize: 13,
                  fontStyle: "normal",
                  fontWeight: 700,
                  lineHeight: "14px",
                }}
              >
                Search
              </Typography>
            </Box>

            {/*  */}
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                padding: {xs : "5px 10px", sm : "13px 12px"},
                borderRadius: "6px",
                background: "var(--gray-gray-100, #F9F9F9)",
                width: {sm : '112px'},
                boxSizing: "border-box",
              }}
            >
              <Typography
                sx={{
                  color: "#A1A5B7",
                  fontFamily: "Inter",
                  fontSize: 12,
                  fontStyle: "normal",
                  fontWeight: 600,
                  lineHeight: "12px", // or use 1 for 100%
                }}
              >
                Today
              </Typography>
              <Box component="img" src={down}></Box>
            </Box>

            {/*  */}

            {/*  */}
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                padding: {xs : "5px 10px", sm : "13px 12px"},
                borderRadius: "6px",
                background: "var(--gray-gray-100, #F9F9F9)",
                width: {sm : '112px'},
                boxSizing: "border-box",
              }}
            >
              <Typography
                sx={{
                  color: "#A1A5B7",
                  fontFamily: "Inter",
                  fontSize: 12,
                  fontStyle: "normal",
                  fontWeight: 600,
                  lineHeight: "12px", // or use 1 for 100%
                }}
              >
                status
              </Typography>
              <Box component="img" src={down}></Box>
            </Box>

            {/*  */}
          </Box>
        </Box>
      </Box>
    </Fragment>
  );
};

export default TableNav;
