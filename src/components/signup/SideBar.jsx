import { Box } from "@mui/material";
import React, { Fragment } from "react";
import SideBarComponents from "./SideBarComponents";
import home from '../../assets/images/home.svg';
import addfiles from '../../assets/images/addfiles.svg';
import graph from '../../assets/images/graph.svg';
import messagequestion from '../../assets/images/messagequestion.svg';
import questiontablet from '../../assets/images/questiontablet.svg';
import resque from '../../assets/images/rescue.svg';
import scroll from '../../assets/images/scroll.svg';
import setting from '../../assets/images/setting.svg';

const data = [
    {
        img : home,
        text : 'home'
    },
    {
        img : addfiles,
        text : 'Submit Violations'
    },
    {
        img : scroll,
        text : 'Whitelist'
    },
    {
        img : questiontablet,
        text : 'billing'
    },
    {
        img : graph,
        text : 'Affiliate Program'
    },
    {
        img : setting,
        text : 'Setting'
    },
    {
        img : messagequestion,
        text : 'FAQ'
    },
    {
        img : resque,
        text : 'Support'
    },




]

const SideBar = () => {
  return (
    <Fragment>
      <Box
        sx={{
          borderRight: "1px solid var(--gray-gray-300, #E1E3EA)",
          background: "#FFF",
          padding : {sm : '10px 10px 0px 10px', md : '30px 30px 0px 30px'},
          height : '100%'
        }}
      >
        {data.map((value,index) => (
           <SideBarComponents sidebarImg={value.img} sidebarText={value.text} index={index}/>
        ))}
       
      </Box>
    </Fragment>
  );
};

export default SideBar;
