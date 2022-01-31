import "./App.css";
import SelectSearch from "react-select-search";
import { useRef, useState } from "react";
 
export default function App() {
 const searchInput = useRef();

 const colaborators = [
      { name: "108.424.074-21", value: "121" },
      { name: "100.424.078-25", value: "222" },
      { name: "220.324.278-25", value: "322" }
 ];
 const [col, setCol] = useState()
 const handleChange = (...args) => {
   setCol(args[0])
   console.log("ARGS:", args[0]);
 };
 
 const handleFilter = (items) => {
   return (searchValue) => {
     if (searchValue.length === 0) {
       return colaborators;
     }
     const updatedItems = items.map((colaborator) => {
       if (colaborator.name.toLowerCase().includes(searchValue.toLowerCase())) {
         return colaborator
       } else {
         return;
       }
     }).filter((element) => element !== undefined)
     
     console.log(updatedItems)
     return updatedItems;
   };
 };
 

 return (
   <div className="App">

     <SelectSearch
       ref={searchInput}
       options={colaborators}
       filterOptions={handleFilter}
       value={col}
       name="selectCpfColaborator"
       placeholder="CPF do colaborador"
       search
       onChange={handleChange}
     />
     {console.log(col)}
   </div>
 );
}

