import { useState } from "react";

function Create() {

    const [title, setTitle] = useState(''); // Initalising the values
    const [author, setAuthor] = useState(''); // Initalising the values
    const [url, setUrl] = useState(''); // Initalising the values


    // handles the submition of the book 
    const handleSubmit = (e) =>{ 
        e.preventDefault();

        // output to console.log  for booka
        console.log("Title: " +title+
        " Cover: " +url+
        " Author: " +author);
    }

    return (
        <div>
            <h1>Create</h1>
            <h3>Hello from create</h3>
            <form onSubmit={handleSubmit}> 
                <div className="form-group">
                    <label>Add Book Title: </label> {/* Getting user to enter title*/}
                    <input type="text"
                        className="form-control"
                        value={title}
                        onChange={(e) => { setTitle(e.target.value) }} // when onChange is used it changes the value
                    />
                </div>
                <div className="form-group">
                    <label>Add Book Author: </label> {/* Getting user to enter title*/}
                    <input type="text"
                        className="form-control"
                        value={author}
                        onChange={(e) => { setAuthor(e.target.value) }} // when onChange is used it changes the value
                    />
                </div>
                <div className="form-group">
                    <label>Add Front Page URL: </label> {/* Getting user to enter title*/}
                    <input type="text"
                        className="form-control"
                        value={url}
                        onChange={(e) => { setUrl(e.target.value) }} // when onChange is used it changes the value
                    />
                </div>


                <div> 
                    <input type = "submit" // Button for adding books 
                    value = "Add Book">
                    </input>
                </div>

            </form>
        </div>
    );
}

export default Create;