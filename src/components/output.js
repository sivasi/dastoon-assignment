import React, { useState } from "react";
import { Box, Tab, Tabs } from "@mui/material";
import CircularProgress from "@mui/material/CircularProgress";

import ImageTab from "./common/imageTab";
function OutputWindow({ url, url1, url2, url3, url4, url5, url6, url7, url8, url9 }) {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const [tab, setTab] = useState(0);

  return (
    <>
      <Box
        sx={{
          width: "100%",
          height: "80%",
          margin: "auto",
          //marginTop: "1%",
          padding: "10px",
          paddingRight: "0px",
          paddingLeft: "0px",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Tabs
          value={value}
          onChange={handleChange}
          variant="scrollable"
          scrollButtons
          allowScrollButtonsMobile
          aria-label="scrollable auto tabs example"
          sx={{
            color: "white",
            width: "100%",
          }}
        >
          {/*Tabs for various images of different panels of comic book*/}
          <Tab label="Page One" sx={{ color: "white", fontSize: "10px" }} onClick={() => setTab(0)} />
          <Tab label="Page Two" sx={{ color: "white", fontSize: "10px" }} onClick={() => setTab(1)} />
          <Tab label="Page Three" sx={{ color: "white", fontSize: "10px" }} onClick={() => setTab(2)} />
          <Tab label="Page Four" sx={{ color: "white", fontSize: "10px" }} onClick={() => setTab(3)} />
          <Tab label="Page Five" sx={{ color: "white", fontSize: "10px" }} onClick={() => setTab(4)} />
          <Tab label="Page Six" sx={{ color: "white", fontSize: "10px" }} onClick={() => setTab(5)} />
          <Tab label="Page Seven" sx={{ color: "white", fontSize: "10px" }} onClick={() => setTab(6)} />
          <Tab label="Page Eight" sx={{ color: "white", fontSize: "10px" }} onClick={() => setTab(7)} />
          <Tab label="Page Nine" sx={{ color: "white", fontSize: "10px" }} onClick={() => setTab(8)} />
          <Tab label="Page Ten" sx={{ color: "white", fontSize: "10px" }} onClick={() => setTab(9)} />
        </Tabs>
        {/*Image rendering according to the tab number. */}
        {(url || url1 || url2 || url3 || url4 || url5 || url6 || url7 || url8 || url9) && (
          <Box>
            {tab === 0 ? (
              url ? (
                <ImageTab src={url} />
              ) : (
                <CircularProgress style={{ color: "#430470", justifyContent: "center", margin: "30%" }} />
              )
            ) : tab === 1 ? (
              url1 ? (
                <ImageTab src={url1} />
              ) : (
                <CircularProgress style={{ color: "#430470", justifyContent: "center", margin: "30%" }} />
              )
            ) : tab === 2 ? (
              url2 ? (
                <ImageTab src={url2} />
              ) : (
                <CircularProgress style={{ color: "#430470", justifyContent: "center", margin: "30%" }} />
              )
            ) : tab === 3 ? (
              url3 ? (
                <ImageTab src={url3} />
              ) : (
                <CircularProgress style={{ color: "#430470", justifyContent: "center", margin: "30%" }} />
              )
            ) : tab === 4 ? (
              url4 ? (
                <ImageTab src={url4} />
              ) : (
                <CircularProgress style={{ color: "#430470", justifyContent: "center", margin: "30%" }} />
              )
            ) : tab === 5 ? (
              url5 ? (
                <ImageTab src={url5} />
              ) : (
                <CircularProgress style={{ color: "#430470", justifyContent: "center", margin: "30%" }} />
              )
            ) : tab === 6 ? (
              url6 ? (
                <ImageTab src={url6} />
              ) : (
                <CircularProgress style={{ color: "#430470", justifyContent: "center", margin: "30%" }} />
              )
            ) : tab === 7 ? (
              url7 ? (
                <ImageTab src={url7} />
              ) : (
                <CircularProgress style={{ color: "#430470", justifyContent: "center", margin: "30%" }} />
              )
            ) : tab === 8 ? (
              url8 ? (
                <ImageTab src={url8} />
              ) : (
                <CircularProgress style={{ color: "#430470", justifyContent: "center", margin: "30%" }} />
              )
            ) : url9 ? (
              <ImageTab src={url9} />
            ) : (
              <CircularProgress style={{ color: "#430470", justifyContent: "center", margin: "30%" }} />
            )}
          </Box>
        )}
      </Box>
    </>
  );
}

export default OutputWindow;
