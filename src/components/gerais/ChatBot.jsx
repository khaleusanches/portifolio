import { div } from "motion/react-client";

function ChatBot() {
    return(
        <div id="chatbot" className="flex flex-row-reverse items-end w-[58vw] fixed bottom-12 right-12">
            <div className="w-[40vw] h-[50vh] bg-gray-800 rounded-lg shadow-lg p-4">
                <div>
                    <h2 className="text-xl font-bold mb-2">Khaléu Sanches Mancini</h2>
                    <div className="flex flex-col space-y-3">
                        <div className="bg-gray-700 p-3 rounded-lg text-sm h-[32.5vh]">

                        </div>
                        
                        <input type="text" placeholder="Digite sua mensagem..." className="w-full p-2 rounded-lg bg-gray-700 text-md focus:outline-none focus:ring-2 focus:ring-blue-500"/>
                    </div>
                </div>
            </div>
            <div id="Sugestoes" className="w-[15vw] h-[30vh] bg-gray-800 rounded-lg shadow-lg p-4 mr-4">
                <p className="text-xl font-bold mb-2">Sugestões</p>
                <div className="bg-gray-700 p-3 rounded-lg text-sm flex flex-col space-y-2 mt-2">
                    <p className="bg-gray-600 rounded-lg px-2 py-[2px] hover:bg-gray-500 cursor-pointer">Quanto cobra?</p>
                    <p className="bg-gray-600 rounded-lg px-2 py-[2px] hover:bg-gray-500 cursor-pointer">Qual sua experiência com C#?</p>
                    <p className="bg-gray-600 rounded-lg px-2 py-[2px] hover:bg-gray-500 cursor-pointer">Já trabalhou com React?</p>
                </div>
            </div>
        </div>
    )
}

export default ChatBot;