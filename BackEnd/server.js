// express framework npm intsall express
// npm intsall body-parser
const express = require('express')
const app = express()
const port = 4000

// implementing express
const cors = require('cors');
app.use(cors());
app.use(function(req, res, next) {
res.header("Access-Control-Allow-Origin", "*");
res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
res.header("Access-Control-Allow-Headers",
"Origin, X-Requested-With, Content-Type, Accept");
next();
});
// body-parser
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.send('“Hello world')
})


// req is requesting a responce
app.get('/dataRep', (req, res) => {
    res.send('“Welcome to Data Representation & Querying')
})

// req is requesting a responce
app.get('/whatever', (req, res) => { // /whatever = port 
    res.send("Good Bye!"); // returns
});

// req is requesting a responce
app.get('/hello/:Ted', (req, res) => {
    res.send("Hello " + req.params.Ted);
});

// client to the server for fname and lname
app.get('/name', (req, res)=>{
    res.send('Hello '+req.query.fname+ ' '+req.query.lname);
})

// client to the server
app.get('/post', (req, res)=>{
    res.send('Hello '+req.query.user+ ' '+req.query.pass);
})

// adding to books for the server
app.post('/api/book', (req, res)=>{
    console.log(req.body);
    res.send("Data Recieved");
})

// req is requesting a responce
app.get('/api/books', (req, res) => {
    // json caller
    const books = [
        {
            "title": "Learn Git in a Month of Lunches",
            "isbn": "1617292419",
            "pageCount": 0,
            "thumbnailUrl":
                "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/umali.jpg",
            "status": "MEAP",
            "authors": ["Rick Umali"],
            "categories": []
        },
        {
            "title": "MongoDB in Action, Second Edition",
            "isbn": "1617291609",
            "pageCount": 0,
            "thumbnailUrl":
                "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/banker2.jpg",
            "status": "MEAP",
            "authors": [
                "Kyle Banker",
                "Peter Bakkum",
                "Tim Hawkins",
                "Shaun Verch",
                "Douglas Garrett"
            ],
            "categories": []
        },
        {
            "title": "Getting MEAN with Mongo, Express, Angular, and Node",
            "isbn": "1617292036",
            "pageCount": 0,
            "thumbnailUrl":
                "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/sholmes.jpg",
            "status": "MEAP",
            "authors": ["Simon Holmes"],
            "categories": []
        }
    ];
    res.json({
        myBooks: books,
        "Message": "Hello frome server.js",
        "Status":"Happy"
    })
})


    // listening to what port the server is on
    app.listen(port, () => {
        console.log(`Example app listening on port ${port}`)
    })