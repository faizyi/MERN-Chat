import { Box, IconButton, Paper, InputBase } from "@mui/material";
import chatInputHook from "../../customHooks/chatHooks/chatInput.hook";
import { FaPaperPlane } from "react-icons/fa";
export default function MessageInput() {
  const { newMessage, setNewMessage, handleSend } = chatInputHook();
  return (
    <Box
      sx={{
        position: "fixed",
        bottom: 0,
        left: { xs: "0px", sm: '340px', md: "400px", lg: "400px" },
        right: 0,
        backgroundColor: "#1e2a33",
        zIndex: 1000,
      }}
    >
      <Paper
        component="form"
        sx={{ 
          backgroundColor: "#2e3c47", 
          display: 'flex', 
          alignItems: 'center', 
          margin: 1, 
          borderRadius: 3,
          boxShadow: '0px 3px 6px rgba(0,0,0,0.16)',
        }}
        onSubmit={(e) => { e.preventDefault(); }}
      >
        <InputBase
          fullWidth
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          onKeyPress={(e) => {
            if (e.key === "Enter") handleSend();
          }}
          sx={{ ml: 2, flex: 1, color: "white", p: 1 }}
          placeholder="Type a message..."
        />
        <IconButton
          onClick={handleSend}
          sx={{ color: "#4caf50", p: "10px" }}
          aria-label="send"
        >
          <FaPaperPlane />
        </IconButton>
      </Paper>
    </Box>
  );
}
