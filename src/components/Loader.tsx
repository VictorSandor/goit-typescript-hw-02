import { ThreeDots } from "react-loader-spinner";
import s from "./Loader.module.css";

export default function Loader() {
  return (
    <div className={s.container_loader}>
      <ThreeDots wrapperClass={s.loader} color="rgb(19, 136, 231)" />
    </div>
  );
}

