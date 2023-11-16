import React, { Fragment } from "react";
import Navbar from "../../../components/signup/Navbar";
import { Box, Typography } from "@mui/material";
import SideBar from "../../../components/signup/SideBar";
import down from "../../../assets/images/down.svg";
import ShadowBox from "../../../components/signup/ShadowBox";
import Grid from "@mui/material/Grid";
import frame from '../../../assets/images/frame.svg';
import scan from '../../../assets/images/scan.svg';
import trush from '../../../assets/images/trush.svg';
import rectangle from '../../../assets/images/rectangle.png';
import HomeTable from "../../../components/signup/HomeTable";
import information from '../../../assets/images/information.svg';

const data = [
    {
        number : '252',
        text : 'Links Scraped',
        img : frame,
        border : '3px solid var(--primary-primary, #3E97FF)'
    },
    {
        number : '252',
        text : 'Links Manually',
        img : scan,
        border : '3px solid var(--info-info, #7239EA)'
    },
    {
        number : '252',
        text : 'Link Violations',
        img : information,
        border : '3px solid var(--warning-warning, #F6C000)'
    },
     {
        number : '252',
        text : 'Link Removed',
        img : trush,
        border : '3px solid #F1416C'
    },
]

const Home = () => {
  return (
    <Fragment>
      <Navbar />
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          background: "#ededed",
          //
            overflow : 'auto',
            height: 'calc(100vh - 80px)'
          //
        //   height: "100vh"
        }}
      >
        <Box sx={{ width: {xs : "10%", sm : "20%"} , position : 'sticky' , top : 0}}>
          <SideBar />
        </Box>
        <Box sx={{  width: {xs : "90%", sm : "80%"}, padding: {xs : '10px',sm : '15px' , md : '30px'}, boxSizing: "border-box" }}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "end",
              alignItems: "center",
              gap: "8px",
            }}
          >
            <Typography
              sx={{
                color: "var(--gray-gray-600, #7E8299)",
                fontFamily: "Inter",
                fontSize: "14px",
                fontStyle: "normal",
                fontWeight: 500,
                lineHeight: "85.714%",
              }}
            >
              Sort by
            </Typography>
            <Box
              sx={{
                // boxSizing : 'border-box',
                width: "120px",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                borderRadius: "6px",
                background: "var(--white-dark-white, #FFF)",
                padding: {xs : '5px', sm : '10px'},
              }}
            >
              <Typography sx={{
                 color: '#3F4254',
                 fontFamily: 'Inter',
                 fontSize: 12,
                 fontStyle: 'normal',
                 fontWeight: 600,
                 lineHeight: '12px', // or use 1 for 100%
              }}>Today</Typography>
              <Box component="img" src={down}></Box>
            </Box>
          </Box>

          <Box sx={{padding : '30px 0px'}}>
            <Box sx={{width : '100%'}}>
              <Grid container spacing={2}>
                
                    {data.map((item) => (
                        <Grid item xs={6} md={3}>
                        <ShadowBox dataImg={item.img} dataText={item.text} dataBorder={item.border} dataNumber={item.number}/>
                        </Grid>
                    ))}
                 
                
              </Grid>
            </Box>
          </Box>

          {/* table component */}
          <HomeTable/>
        </Box>
      </Box>
    </Fragment>
  );
};

export default Home;
