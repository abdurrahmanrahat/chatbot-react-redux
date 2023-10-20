import MessageParser from "../../MessageParser";
import ActionProvider from "../../ActionProvider";
import Chatbot from "react-chatbot-kit";
import "react-chatbot-kit/build/main.css";
import config from "../../config";

const ChatBot = () => {
  return (
    <div className="flex items-center justify-center min-h-full">
      <Chatbot
        config={config}
        messageParser={MessageParser}
        actionProvider={ActionProvider}
      />
    </div>
  );
};

export default ChatBot;
