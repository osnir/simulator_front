import { useState, useEffect } from 'react';
import Modal  from 'react-modal';
import './styles.css';


interface InputProps {
    type: string;
    msg: string;
}

Modal.setAppElement("#root");

const Message: React.FC<InputProps> = ({ type, msg, ...props }) => {
    
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        if (!msg) {
            setVisible(false);
            return;
        }

        setVisible(true);

        const timer = setTimeout(() => {
            setVisible(false);
        }, 3000);

        return () => clearTimeout(timer);
    }, [msg]);

    return (
        <>
            {visible && (
                <div className={`message ${type}`}>{msg}</div>
            )}
        </>
    )
} 

export default Message;