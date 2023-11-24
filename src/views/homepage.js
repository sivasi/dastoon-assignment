import React from "react";
import { useState } from "react";
import OutputWindow from "../components/output";
import { Stack, Typography, Grid } from "@mui/material";
import MyForm from "../components/common/form";

function Homepage() {
  const [url, setUrl] = useState("");
  const [url1, setUrl1] = useState("");
  const [url2, setUrl2] = useState("");
  const [url3, setUrl3] = useState("");
  const [url4, setUrl4] = useState("");
  const [url5, setUrl5] = useState("");
  const [url6, setUrl6] = useState("");
  const [url7, setUrl7] = useState("");
  const [url8, setUrl8] = useState("");
  const [url9, setUrl9] = useState("");
  const props = {
    url,
    setUrl,
    url1,
    setUrl1,
    url2,
    setUrl2,
    url3,
    setUrl3,
    url4,
    setUrl4,
    url5,
    setUrl5,
    url6,
    setUrl6,
    url7,
    setUrl7,
    url8,
    setUrl8,
    url9,
    setUrl9,
  };
  return (
    <div>
      <Typography
        sx={{
          fontFamily: "cursive",
          fontSize: "20px",
          fontWeight: "bold",
        }}
      >
        " Dashtoon-Comic "
      </Typography>
      <Stack direction={{ xs: "column", sm: "row" }} justifyContent="center" alignItems="center" paddingLeft="10px" paddingRight="10px" marginTop="20px" marginBottom="20px">
        <Grid container spacing={1} alignItems="flex-start" justifyContent="center">
          <Grid item xs={12} sm={6} md={6}>
            <MyForm {...props} />
          </Grid>
          {(url || url1 || url2 || url3 || url4 || url5 || url6 || url7 || url8 || url9) && (
            <Grid item xs={12} sm={6} md={6}>
              <OutputWindow {...props} />
            </Grid>
          )}
        </Grid>
      </Stack>
    </div>
  );
}

export default Homepage;
