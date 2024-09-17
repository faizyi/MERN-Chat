import { Box, Typography, Grid, Paper } from "@mui/material";
import messagesHook from "../../customHooks/chatHooks/messages.hook";
import { useEffect, useRef } from "react";
import Loader from "../loader/loader";

export default function AllMessages() {
  const sender = JSON.parse(localStorage.getItem("userData")) || null;
  const senderId = sender ? sender.userId : "";
  const { messages, isLoading } = messagesHook();
  const messagesEndRef = useRef(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const calculateWidth = (message) => {
    const minWidth = 80; // minimum width in pixels
    const padding = 16; // padding inside the Paper component
    const lengthMultiplier = 8; // multiplier to adjust width per character

    const calculatedWidth = message.length * lengthMultiplier + padding;
    return Math.max(calculatedWidth, minWidth);
  };

  return (
    <Grid
      item
      xs
      sx={{
        backgroundColor: "#2e3333",
        overflowY: "auto",
        height: "calc(100vh - 128px)", // Adjust height to keep it above the input
        paddingBottom: "44px", // Make room for the input at the bottom
        paddingTop: "60px",
        '&::-webkit-scrollbar': {
          width: '10px', // Width of the scrollbar
        },
        '&::-webkit-scrollbar-track': {
          backgroundColor: '#111b21', // Track color
        },
        '&::-webkit-scrollbar-thumb': {
          backgroundColor: '#333', // Thumb color
          borderRadius: '10px', // Rounded corners for the thumb
          border: '2px solid transparent', // Adds space around the thumb
          backgroundClip: 'content-box', // Ensures the border doesn't overlap the thumb color
        },
        '&::-webkit-scrollbar-thumb:hover': {
          backgroundColor: '#555', // Darker thumb color on hover
        },
      }}
    >
      <Box sx={{ p: 2 }}>
        {isLoading ? (
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              height: '70vh', // Full height of the sidebar
            }}
          >
            <Loader />
          </Box>
        ) : messages.length > 0 ? (
          messages.map((msg, index) => (
            <Box key={index}>
              <Paper
                elevation={2}
                sx={{
                  mb: 1,
                  p: 1,
                  maxWidth: { xs: "200px", sm: "200px", md: "400px", lg: "400px" },
                  width: `${calculateWidth(msg.message)}px`,
                  borderRadius: 2,
                  ml: msg.senderId === senderId ? "auto" : "unset",
                  mr: msg.senderId !== senderId ? "auto" : "unset",
                  backgroundColor: msg.senderId === senderId ? "#DCF8C6" : "#FFFFFF",
                  boxShadow: 2,
                }}
              >
                <Typography
                  variant="body2"
                  sx={{ textAlign: "left", color: "#333" }}
                >
                  {msg.message}
                </Typography>
                <Typography
                  variant="caption"
                  sx={{ textAlign: "right", color: "gray", display: "block" }}
                >
                  {new Date(msg.timeStamp).toLocaleTimeString([], {
                    hour: "2-digit",
                    minute: "2-digit",
                  })}
                </Typography>
              </Paper>
            </Box>
          ))
        ) : (
          <Typography variant="body2" sx={{ textAlign: "center", color: "gray" }}>
            No messages yet
          </Typography>
        )}
        <div ref={messagesEndRef} />
      </Box>
    </Grid>
  );
}
