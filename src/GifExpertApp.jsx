import { useState } from "react"
import { AddCategory } from "./components/AddCategory";
import { GifGrid } from "./components/GifGrid";

export const GifExpertApp = () => {

  const [Categories, setCategories] = useState([]);

  const OnAddCategory = (inputValue) =>{

    if (Categories.includes(inputValue) ) return;

    setCategories([...Categories, inputValue]);
  }

  return (
    <>
       <h1>GifExpertApp</h1>
       <AddCategory onNewCategory={OnAddCategory}/>
       <ol>
        {
          Categories.map(category=> (
            <GifGrid 
              key={category} 
              category={category} />
          ))
        }
       </ol>
    </>
  )
}
