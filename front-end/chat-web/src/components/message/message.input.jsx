import { TextField, Button, Box } from "@mui/material";
import chatInputHook from "../../customHooks/chatHooks/chatInput.hook";

export default function MessageInput() {
  const { newMessage, setNewMessage, handleSend } = chatInputHook();

  return (
    <Box
      sx={{
        position: "fixed",
        bottom: 0,
        left: { sm: '340px' },  // Adjust left position based on the sidebar width
        right: 0,
        backgroundColor: "#202C33",
        p: 2,
        borderTop: "1px solid #ddd",
        display: "flex",
        alignItems: "center",
        zIndex: 1000,
        width: { xs: '100%', sm: 'auto' },
      }}
    >
      <TextField
        fullWidth
        value={newMessage}
        onChange={(e) => setNewMessage(e.target.value)}
        onKeyPress={(e) => {
          if (e.key === "Enter") handleSend();
        }}
        placeholder="Type a message"
        InputProps={{
          style: { color: "white" },
        }}
      />
      <Button
        variant="contained"
        onClick={handleSend}
        sx={{ ml: 1, backgroundColor: "#0084ff", '&:hover': { backgroundColor: "#005bb5" } }}
      >
        Send
      </Button>
    </Box>
  );
}
