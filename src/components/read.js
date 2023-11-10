// imports
import { useEffect, useState } from "react";
import Books from "./books";
import axios from "axios";

function Read(){
 
    const [data, setData] = useState([]); // 
            
    useEffect(
        ()=>{
            // reading read.js from the server instead of hardcoding it and reading from a link online
            axios.get('http://localhost:4000/api/books') // Generating a request to get data
            .then( // when data comes back we use .then to do somehting with it
                (responce)=>{
                    setData(responce.data.myBooks) // responce.data.books is retreving data from data.books
                }
            )
            .catch(
                (error)=>{
                    console.log(error); // display error in console is there is one
                }
            )
        }, []
    );

    return(
        <div>
            <h3>Hello from read</h3>
            {/* Declaring myBooks  */}
            <Books myBooks={data}></Books>
            
        </div>
    );
}


export default Read;