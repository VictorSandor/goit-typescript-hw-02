import PropagateLoader from "react-spinners/PropagateLoader"
import s from "./Loader.module.css"


const Loader = () => {
  return (
    <div className={s.loaderBox}> <PropagateLoader className={s.loader} color="black" size="10px" />
  </div>)
   
}

export default Loader