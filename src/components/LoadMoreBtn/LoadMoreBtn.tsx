import s from './LoadMoreBtn.module.css'


interface LoadMoreBtnProps {
  onChangePage:()=> void
}

const LoadMoreBtn: React.FC<LoadMoreBtnProps> = ({onChangePage}) => {
  function handleClick(){
    onChangePage()
  }

  return (
    <div className={s.btnBox}><button className={s.btnLoad} type="button" onClick={handleClick}>Load more...</button></div>
  )
}

export default LoadMoreBtn