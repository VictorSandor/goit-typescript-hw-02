import s from "./ErrorMessage.module.css";

export default function ErrorMessage() {
  return (
    <p className={s.error}>
      Whoops, something went wrong! Please try reloading this page!
    </p>
  );
}