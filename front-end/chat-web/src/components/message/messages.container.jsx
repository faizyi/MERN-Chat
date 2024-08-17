import React, { useEffect, useRef } from 'react';
import { Box, Grid} from "@mui/material";
import MessageInput from "./message.input";
import Navbar from '../navbar/Navbar';
import AllMessages from './allmessages';
export default function MessagesContainer() {


  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', height: '100vh' }}>
      <Navbar />

      <Grid
        container
        direction="column"
        justifyContent="flex-start"
        sx={{ flexGrow: 1, height: "100%", overflow: "hidden", }}
      >
        <AllMessages/>
        <Grid item sx={{ position: "sticky", bottom: 0, zIndex: 1000 }}>
          <MessageInput />
        </Grid>

      </Grid>
    </Box>
  );
}
