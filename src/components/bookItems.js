import Card from 'react-bootstrap/Card';


function BasicExample(props) {
    return (
        // Card styled
        <Card style={{ width: '25rem' }}>
            <Card.Body>
                <Card.Title>Books</Card.Title>
                <Card.Text>
                    {/* {Declaring title, Img, authors name from props.myBooks } */} 
                    <h3>{props.myBooks.title}</h3>
                    <img src={props.myBooks.thumbnailUrl}></img>
                    <footer>{props.myBooks.authors[0]}</footer>
                </Card.Text>
            </Card.Body>
        </Card>
    );
}

export default BasicExample;