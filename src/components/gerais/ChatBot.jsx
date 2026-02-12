import { div } from "motion/react-client";
import { useState, useRef, useEffect } from "react";

function ChatBot() {
    const [messages, setMessages] = useState([
        {
            sender: "Khaléu Sanches Mancini",
            text: "Olá! Sou o Khaléu, um desenvolvedor de software com experiência em C#, React e outras tecnologias. Estou aqui para ajudar com suas dúvidas e fornecer informações sobre meus serviços. Sinta-se à vontade para perguntar qualquer coisa!",
        }
    ]);
    const [sugestions, setSuggestions] = useState([
        "Quanto cobra?",
        "Qual sua experiência com C#?",
        "Já trabalhou com React?"
    ]);
    const [input, setInput] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const messagesEndRef = useRef(null);

    useEffect(() => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
        if (messages[messages.length - 1].sender === "User") {
            setTimeout(() => {
                const botResponse = {
                    sender: "Khaléu Sanches Mancini",
                    text: "Claro! Tenho experiência em desenvolvimento de software, especialmente em C# e React. Já trabalhei em diversos projetos, desde aplicações web até sistemas mais complexos. Se você tiver alguma dúvida específica ou quiser saber mais sobre um projeto em particular, fique à vontade para perguntar!"
                };
                setMessages(prevMessages => [...prevMessages, botResponse]);
                setIsLoading(false);
            }, 5000);
        }
    }, [messages]);

    const handleSendMessage = () => {
        if(isLoading || input.trim() === "") return;        
        const newMessage = {
            sender: "User",
            text: input
        };
        
        setIsLoading(true);
        setMessages([...messages, newMessage]);
        setInput("");
    };

    const handleKeyPress = (event) => {
        if (event.key === "Enter") {
            event.preventDefault();
            handleSendMessage();
        }
    };
    return(
        <div id="chatbot" className="hidden flex-row-reverse items-end w-[58vw] fixed bottom-12 right-12">
            <div className="w-[40vw] h-[50vh] bg-gray-800 rounded-lg shadow-lg p-4">
                <div>
                    <h2 className="text-xl font-bold mb-2">Khaléu Sanches Mancini</h2>
                    <div className="flex flex-col space-y-3">
                        <div className="bg-gray-700 p-3 rounded-lg text-sm h-[32.5vh] overflow-y-auto">
                            {messages.map((message, index) => (
                                <div key={index} className={`mb-2 ${message.sender === "User" ? "flex flex-col items-end" : "text-left"}`}>
                                    <p className="font-bold mb-1">{message.sender}</p>
                                    <p className="max-w-[35vw] bg-blue-400 rounded-lg pr-2 pt-2 pb-2 pl-2">{message.text}</p>
                                </div>
                            ))}
                            <div ref={messagesEndRef} />
                        </div>
                        
                        <input type="text" placeholder="Digite sua mensagem..." value={input} onChange={(event) => setInput(event.target.value)} onKeyPress={handleKeyPress} disabled={isLoading} className="w-full p-2 rounded-lg bg-gray-700 text-md focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:opacity-50 disabled:cursor-not-allowed"/>

                    </div>
                </div>
            </div>
            <div id="Sugestoes" className="w-[15vw] h-[30vh] bg-gray-800 rounded-lg shadow-lg p-4 mr-4">
                <p className="text-xl font-bold mb-2">Sugestões</p>
                <div className="bg-gray-700 p-3 rounded-lg text-sm flex flex-col space-y-2 mt-2">
                    {sugestions.map((sugestion, index) => (
                        <p key={index} className="bg-gray-600 rounded-lg px-2 py-[2px] hover:bg-gray-500 cursor-pointer" onClick={() => {
                            setIsLoading(true);
                            const newMessage = {
                                sender: "User",
                                text: sugestion
                            };
                            setMessages([...messages, newMessage]);
                        }
                        }>
                            {sugestion}
                        </p>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default ChatBot;