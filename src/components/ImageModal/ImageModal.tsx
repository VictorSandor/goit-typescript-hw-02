import Modal from "react-modal"
import s from "./ImageModal.module.css"
import { useEffect } from "react"
import { Image } from "../../assets/unsplash-api"
Modal.setAppElement("#root")

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    padding: "0",
    border: "none",
    borderRadius: "0",
    backgroundColor: "transparent",
    zIndex: "4",
  },
  overlay: {
    backgroundColor: "rgba(0, 0, 0, 0.6)",
    backdropFilter: "blur(10px)",
    zIndex: "3",
  },
}

interface ImageModalProps {
  isOpen: boolean
  isClose: ()=> void
  image: Image | null
}

const ImageModal: React.FC<ImageModalProps> = ({ isOpen, isClose, image }) => {

  if(!image) return null
  //Відключення скроллу під модальним вікном
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "auto"
    }

    return () => {
      document.body.style.overflow = "auto"
    }
  }, [isOpen])

  return (
    <div>
      <Modal
        isOpen={isOpen}
        style={customStyles}
        onRequestClose={isClose}
        contentLabel="Example Modal"
      >
        <img
          className={s.fullImg}
          src={image.urls.regular}
          alt={image.alt_description}
        />
      </Modal>
    </div>
  )
}

export default ImageModal
