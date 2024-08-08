import { Input, Button } from "antd";
import chatInputHook from "../../customHooks/chatHooks/chatInput.hook";

export default function MessageInput() {
  const { newMessage, setNewMessage, handleSend } = chatInputHook();

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white p-4 border-t border-gray-200 flex items-center">
      <Input
        className="flex-1 mr-2"
        value={newMessage}
        onChange={(e) => setNewMessage(e.target.value)}
        onPressEnter={handleSend}
      />
      <Button type="primary" onClick={handleSend}>
        Send
      </Button>
    </div>
  );
}
