import { Dispatch, SetStateAction } from "react";

interface IProps {
    setIsModalShown: Dispatch<SetStateAction<boolean>>;
}

function Modal({ setIsModalShown }: IProps) {

    return (
        <div className="modal">
            You lost
            <button onClick={() => setIsModalShown(false)}>Retry</button>
        </div>
    )

}

export default Modal