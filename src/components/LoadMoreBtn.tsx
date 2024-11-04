import s from './LoadMoreBtn.module.css'


interface LoadMoreBtnProps {
  onChangePage:()=> void
}

const LoadMoreBtn: React.FC<LoadMoreBtnProps> = ({onChangePage}) => {
  function onNextPage(){
    onChangePage()
  }

  return (
    <button className={s.button} onClick={onNextPage}>
      Load more
    </button>
  );
}

export default LoadMoreBtn