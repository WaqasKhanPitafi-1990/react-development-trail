import React from "react";
import Box from "@mui/material/Box";
import { DataGrid } from "@mui/x-data-grid";
import TableNav from "./TableNav";
import { Grid } from "@mui/material";

const columns = [
  {
    field: "id",
    headerName: "ID",
    width: 1,
    minWidth: 200,
    flex: 0.1,
    editable: true,
    renderCell: (params) => (
      <div
        style={{
          color: "#181C32",
          fontFamily: "Inter",
          fontSize: "14px",
          fontStyle: "normal",
          fontWeight: 600,
          lineHeight: "14px",
        }}
      >
        {params.value}
      </div>
    ),
  },
  {
    field: "dateremoved",
    headerName: "DATE REMOVED",
    width: 1,
    minWidth: 200,
    flex: 0.2,
    editable: true,
    renderCell: (params) => (
      <div
        style={{
          color: "var(--gray-gray-600, #7E8299)",
          fontFamily: "Inter",
          fontSize: "14px",
          fontStyle: "normal",
          fontWeight: 600,
          lineHeight: "14px",
        }}
      >
        {params.value}
      </div>
    ),
  },
  {
    field: "link",
    headerName: "LINK",
    width: 1,
    minWidth: 200,
    flex: 0.2,
    editable: true,
    renderCell: (params) => (
      <div
        style={{
          color: "var(--primary-primary, #3E97FF)",
          fontFamily: "Inter",
          fontSize: "14px",
          fontStyle: "normal",
          fontWeight: 600,
          lineHeight: "14px",
        }}
      >
        {params.value}
      </div>
    ),
  },
  {
    field: "source",
    headerName: "SOURCE",

    width: 1,
    minWidth: 200,
    flex: 0.2,
    editable: true,
    renderCell: (params) => (
      <div
        style={{
          color: "var(--gray-gray-600, #7E8299)",
          fontFamily: "Inter",
          fontSize: "14px",
          fontStyle: "normal",
          fontWeight: 600,
          lineHeight: "14px",
        }}
      >
        {params.value}
      </div>
    ),
  },
  {
    field: "action",
    headerName: "ACTION",

    width: 1,
    minWidth: 200,
    flex: 0.2,
    editable: true,
    renderCell: (params) => (
      <div
        style={{
          color: "#50CD89",
          fontFamily: "Inter",
          fontSize: "12px",
          fontStyle: "normal",
          fontWeight: 600,
          lineHeight: "12px",
          padding: "7px",
          borderRadius: "4px",
          background: "var(--success-success-light, #E8FFF3)",
        }}
      >
        {params.value}
      </div>
    ),
  },
];

const rows = [
  {
    id: 148525,
    dateremoved: "23 sep 2023",
    link: "https//google.com",
    source: "google",
    action: "removed",
  },
  {
    id: 458722,
    dateremoved: "23 sep 2023",
    link: "https//google.com",
    source: "Deddit",
    action: "delisted",
  },
  {
    id: 148527,
    dateremoved: "23 sep 2023",
    link: "https//google.com",
    source: "twitter",
    action: "removed",
  },
  {
    id: 458799,
    dateremoved: "23 sep 2023",
    link: "https//google.com",
    source: "Netflix",
    action: "delisted",
  },
  {
    id: 148500,
    dateremoved: "23 sep 2023",
    link: "https//google.com",
    source: "facebook",
    action: "removed",
  },
  {
    id: 458722,
    dateremoved: "23 sep 2023",
    link: "https//google.com",
    source: "google",
    action: "delisted",
  },
  {
    id: 148511,
    dateremoved: "23 sep 2023",
    link: "https//google.com",
    source: "chrome",
    action: "removed",
  },
  {
    id: 148525,
    dateremoved: "23 sep 2023",
    link: "https//google.com",
    source: "google",
    action: "removed",
  },
  {
    id: 458722,
    dateremoved: "23 sep 2023",
    link: "https//google.com",
    source: "Deddit",
    action: "delisted",
  },
  {
    id: 148527,
    dateremoved: "23 sep 2023",
    link: "https//google.com",
    source: "twitter",
    action: "removed",
  },
  {
    id: 458799,
    dateremoved: "23 sep 2023",
    link: "https//google.com",
    source: "Netflix",
    action: "delisted",
  },
  {
    id: 148500,
    dateremoved: "23 sep 2023",
    link: "https//google.com",
    source: "facebook",
    action: "removed",
  },
  {
    id: 458722,
    dateremoved: "23 sep 2023",
    link: "https//google.com",
    source: "google",
    action: "delisted",
  },
  {
    id: 148511,
    dateremoved: "23 sep 2023",
    link: "https//google.com",
    source: "chrome",
    action: "removed",
  },
  {
    id: 148525,
    dateremoved: "23 sep 2023",
    link: "https//google.com",
    source: "google",
    action: "removed",
  },
  {
    id: 458722,
    dateremoved: "23 sep 2023",
    link: "https//google.com",
    source: "Deddit",
    action: "delisted",
  },
  {
    id: 148527,
    dateremoved: "23 sep 2023",
    link: "https//google.com",
    source: "twitter",
    action: "removed",
  },
  {
    id: 458799,
    dateremoved: "23 sep 2023",
    link: "https//google.com",
    source: "Netflix",
    action: "delisted",
  },
  {
    id: 148500,
    dateremoved: "23 sep 2023",
    link: "https//google.com",
    source: "facebook",
    action: "removed",
  },
  {
    id: 458722,
    dateremoved: "23 sep 2023",
    link: "https//google.com",
    source: "google",
    action: "delisted",
  },
  {
    id: 148511,
    dateremoved: "23 sep 2023",
    link: "https//google.com",
    source: "chrome",
    action: "removed",
  },
  {
    id: 148525,
    dateremoved: "23 sep 2023",
    link: "https//google.com",
    source: "google",
    action: "removed",
  },
  {
    id: 458722,
    dateremoved: "23 sep 2023",
    link: "https//google.com",
    source: "Deddit",
    action: "delisted",
  },
  {
    id: 148527,
    dateremoved: "23 sep 2023",
    link: "https//google.com",
    source: "twitter",
    action: "removed",
  },
  {
    id: 458799,
    dateremoved: "23 sep 2023",
    link: "https//google.com",
    source: "Netflix",
    action: "delisted",
  },
  {
    id: 148500,
    dateremoved: "23 sep 2023",
    link: "https//google.com",
    source: "facebook",
    action: "removed",
  },
  {
    id: 458722,
    dateremoved: "23 sep 2023",
    link: "https//google.com",
    source: "google",
    action: "delisted",
  },
  {
    id: 148511,
    dateremoved: "23 sep 2023",
    link: "https//google.com",
    source: "chrome",
    action: "removed",
  },
];

const HomeTable = () => {
  return (
    <Box sx={{ height: "70%", width: "100%" }}>
        {/* table nav component */}
        {/* <Grid container spacing={2}>
   <Grid item xs={8} md={10} lg={12}> */}
      {/* Your content */}

      <TableNav/>
      <DataGrid
        rows={rows}
        columns={columns}
        
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 10 },
          },
        }}
        checkboxSelection
        pageSizeOptions={[10, 20, 50]}
        disableRowSelectionOnClick
        sx={{
          width: "100%",
          "& .MuiDataGrid-colHeader": {
            color: "red !important", // Replace with your desired color
          },
        }}
      />
   {/* </Grid>
</Grid> */}
      
    </Box>
  );
};

export default HomeTable;
