import React, { useState } from 'react'
import Avatar from '@material-ui/core/Avatar';

import './ChatScreen.css';

const ChatScreen = () => {
    const [messages, setMessages] = useState([
        {
            name: 'Ellen',
            image: 'https://media-exp1.licdn.com/dms/image/C4E03AQHPGhQDUs0c4Q/profile-displayphoto-shrink_400_400/0?e=1603324800&v=beta&t=7KCl-R76FWI3wAgSKBSCmrI6dPSvBqE7jDkhCOTZCaQ',
            message: 'What up'
        },
        {
            name: 'Ellen',
            image: 'https://media-exp1.licdn.com/dms/image/C4E03AQHPGhQDUs0c4Q/profile-displayphoto-shrink_400_400/0?e=1603324800&v=beta&t=7KCl-R76FWI3wAgSKBSCmrI6dPSvBqE7jDkhCOTZCaQ',
            message: 'Hows it going!'
        },
        {
            message: 'Good!'
        }
    ]);
    const [ input, setInput ]  = useState();
    const handleSend = e => {
        e.preventDefault();
        setMessages([...messages, { message: input }]);
        setInput("");
    }
    return (
        <div className="chatScreen">
            <p className="chatScreen__timestamp">YOU MATCHED WITH ELLEN  ON 10/08/2020</p>
            {
                messages.map(message => (
                    message.name ? (
                        <div className="chatScreen__message">
                            <Avatar 
                                className="chatScreen__image" 
                                alt={message.name}
                                src={message.image}
                            />
                            <p className="chatScreen__text" >{message.message}</p>
                        </div>
                ) : (
                    <div className="chatScreen__message">
                        <p className="chatScreen__textUser" >{message.message}</p>
                    </div>
                    )
                ))
            }
            <form className="chatScreen__input">
                <input 
                    placeholder="Type a message..." 
                    type="text" 
                    className="chatScreen__inputField"
                    value={input}
                    onChange={(e)=>setInput(e.target.value)}
                />
                <button type="submit" onClick={handleSend} className="chatScreen__inputButton">SEND</button>
            </form>
        </div>
    )
}

export default ChatScreen
