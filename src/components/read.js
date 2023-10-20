// imports
import { useEffect, useState } from "react";
import Books from "./books";
import axios from "axios";

function Read(){
 
    const [data, setData] = useState([]); // 
            
    useEffect(
        ()=>{
            axios.get('https://jsonblob.com/api/jsonblob/1161593332966481920') // Generating a request to get data
            .then( // when data comes back we use .then to do somehting with it
                (responce)=>{
                    setData(responce.data.books) // responce.data.books is retreving data from data.books
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