import { Dispatch, SetStateAction } from "react"

interface IProps {
    setIsModalShown: Dispatch<SetStateAction<boolean>>,
    txt: string,
    btnStr: string,
    func: any
}

function Modal({ setIsModalShown, txt, btnStr, func }: IProps) {

    function btnClicked() {
        func()
        setIsModalShown(false)
    }

    return (
        <div className="modal animate__animated animate__bounceInRight">
            <p>{txt}</p>
            <button onClick={btnClicked}>{btnStr}</button>
        </div>
    )

}

export default Modal