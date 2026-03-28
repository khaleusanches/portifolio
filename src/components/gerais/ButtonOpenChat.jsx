import chat from '../../../public/chat.png'
function ButtonOpenChat() {
    return (
        <div>
            <button onClick={() => {
                const chatbot = document.getElementById('chatbot');
                const notification = document.getElementById('notification');
                if (chatbot.style.display === 'flex') {
                    chatbot.style.display = 'none';
                    notification.style.display = 'block';
                } else {
                    chatbot.style.display = 'flex';
                    notification.style.display = 'none';
                }
            }} className="btn btn-primary w-16 h-16 rounded-full fixed bottom-6 right-6 bg-white hover:bg-gray-200">
                <img src={chat} alt="" className='w-full h-full p-4'/>
            </button>
            <div id="notification" className="w-6 h-8 bg-red-400 rounded-full fixed bottom-16 right-6"></div>
        </div>
    )
}
export default ButtonOpenChat;