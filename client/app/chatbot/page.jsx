import React from "react";
import AppBar from "@/components/AppBar";
import styles from "../chatbot/chatbot.css";
const chatbot = () => {
  return (
    <div className=" bg-gradientbg min-h-screen">
      <AppBar />
      <div className="justify-center flex align-middle">
          <div className="w-[75%] h-20 flex verify justify-center align-middle font text-2xl text-black font-titleFont">
            ChatBot
          </div>
        </div>
        <div className="h-10 justify-center flex align-middle">
          <div className="w-[75%] h-auto flex items-center justify-center align-middle text-black font-bodyFont text-sm border-black border-b-2">
            Guide to our app
          </div>
        </div>
        <iframe
          width="100%"
          height="500px"
          allow="microphone;"
          src="https://console.dialogflow.com/api-client/demo/embedded/59800092-10e8-4c32-af70-c374baf2b4c4"
          className="absolute bottom-0 "
        ></iframe>
    </div>
  );
};

export default chatbot;
