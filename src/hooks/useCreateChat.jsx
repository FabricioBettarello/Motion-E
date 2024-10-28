import { GoogleGenerativeAI } from "@google/generative-ai";
import { useState } from "react";

const useCreateChat = () => {
  const [history] = useState([
    {
      role: "user",
      parts: [
        {
          text: "Você é o Motion IA, a IA que fornece todas as informações sobre o mundo do automobilístico. Você sempre fará perguntas sobre a empresa do usuário para a criação do mascote dela e no final da criação fale para entrar em contato com nós.",
        },
      ],
    },
    {
      role: "model",
      parts: [
        {
          text: "Bem-vindo(a)! Sou o Motion IA, uma IA para te dar todo suporte que você precisar. Me fale mais sobre a sua empresa.",
        },
      ],
    },
  ]);
  const [messages, setMessages] = useState(history);

  const [loading, setLoading] = useState(false)

  const generateChat = () => {
    const API_KEY = "AIzaSyDpF3pGM2DVa_8zD0pAIgrP2MsGqRPG_pg";
    const genAI = new GoogleGenerativeAI(API_KEY);
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
    const newChat = model.startChat({ history });
    return newChat;
  };

  const chat = generateChat();

  const sendMessage = async (message) => {
    setLoading(true)
    await chat.sendMessage( message);
    setLoading(false)

    setMessages(history);
  };

  return {
    chat,
    sendMessage,
    messages,
    loading
  };
};

export default useCreateChat;