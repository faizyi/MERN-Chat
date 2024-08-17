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
        left: { sm: '340px' },
        right: 0,
        backgroundColor: "#171c1c",
        alignItems: "center",
        zIndex: 1000,
        width: { xs: '100%', sm: 'auto' },
      }}
    >
      <Paper
        component="form"
        sx={{ backgroundColor: "#2A3942", display: 'flex', alignItems: 'center', margin: 1 }}
        onSubmit={(e) => {e.preventDefault()}}
      >
        <InputBase
          fullWidth
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          onKeyPress={(e) => {
            if (e.key === "Enter") handleSend();
          }}
          sx={{ ml: 1, flex: 1, color: "white",p:1}}
          placeholder="Type a message"
        />
        <IconButton
          onClick={handleSend}
          sx={{ color: "white", p: "10px", }}
          aria-label="send"
        >
          <FaPaperPlane />
        </IconButton>
      </Paper>
    </Box>
  );
}
