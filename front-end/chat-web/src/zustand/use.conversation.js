import {create} from "zustand"

export const useConversation = create((set)=>({
    messages : [],
    setMessages : (messages) => set({messages})
}));