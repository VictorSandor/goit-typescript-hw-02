import s from "./SearchBar.module.css"
import toast, { Toaster } from 'react-hot-toast';
import { IoSearchSharp } from "react-icons/io5";


interface SearchBarProps{
  onSubmit: (value: string) => void
}

const SearchBar: React.FC<SearchBarProps> = ({onSubmit}) => {

const handleSubmit = (e: React.FormEvent<HTMLFormElement>)=>{
e.preventDefault()
const form = e.currentTarget;
const value = (form.elements.namedItem("searchQuery") as HTMLInputElement).value;
if (value.trim()=== ""){
  form.reset()
  toast.error("Please enter your request!")
  return
}
onSubmit(value);
form.reset()

}

  return (
    <header className={s.header}>
      <Toaster   position="top-right"
  reverseOrder={true}/>
  <form className={s.form} onSubmit={handleSubmit}>
    <input className={s.input}
      type="text"
      autoComplete="off"
      placeholder="Search images and photos"
      name="searchQuery"
    />
    <button className={s.searchBtn} type="submit"><IoSearchSharp size="18px" /></button>
  </form>
</header>

  )
}

export default SearchBar