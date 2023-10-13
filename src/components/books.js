import BookItems from "./bookItems";

function Books(props){

    return props.myBooks.map(
        // Returning bookitem
        (book)=>{
            // giving each book a unique key 
            return <BookItems myBooks={book} key={book.isbn}></BookItems>
        }
    );
}

export default Books;
