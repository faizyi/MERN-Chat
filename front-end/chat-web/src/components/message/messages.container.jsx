import { Box, Typography, Grid, Paper } from "@mui/material";
import MessageInput from "./message.input";
import messagesHook from "../../../src/customHooks/chatHooks/messages.hook";
import senderIdHook from "../../customHooks/chatHooks/senderId.hook";
import { useEffect, useRef } from "react";
export default function MessagesContainer() {
  const { messages } = messagesHook();
  const { senderId } = senderIdHook();
  const messagesEndRef = useRef(null);
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);
  return (
    <Grid
      container
      direction="column"
      justifyContent="space-between"
      sx={{ flexGrow: 1, height: "100%", position: "relative", }}
    >
      <Grid item xs sx={{ paddingBottom: "64px", overflowY: "auto", }}>
        <Box sx={{ overflowY: "auto", height: "calc(100vh - 64px)", p: 2 }}> 
          {messages.length > 0 ? (
            messages.map((msg, index) => (
              <Paper
                key={index}
                elevation={2}
                sx={{
                  mb: 2,
                  p: 2,
                  maxWidth: "50%",
                  borderRadius: 2,
                  ml: msg.senderId === senderId ? "auto" : "unset",
                  mr: msg.senderId !== senderId ? "auto" : "unset",
                  backgroundColor: msg.senderId === senderId ? "#DCF8C6" : "#FFFFFF",
                  boxShadow: 2,
                }}
              >
                <Typography
                  variant="body2"
                  sx={{
                    textAlign: msg.senderId === senderId ? "right" : "left",
                    color: msg.senderId === senderId ? "#25D366" : "#075E54",
                    fontWeight: "bold",
                    mb: 0.5,
                  }}
                >
                  {msg.senderId === senderId ? "You" : "Friend"}
                </Typography>
                <Typography
                  variant="body2"
                  sx={{ textAlign: msg.senderId === senderId ? "right" : "left", color: "#333" }}
                >
                  {msg.message}
                </Typography>
              </Paper>
            ))
          ) : (
            <Typography variant="body2" sx={{ textAlign: "center",  color: "gray" }}>
              No messages yet
            </Typography>
          )}
          <div ref={messagesEndRef} />
        </Box>
      </Grid>

      <Grid item>
        <MessageInput />
      </Grid>
    </Grid>
  );
}
