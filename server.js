const express = require('express');
const mongoose = require('mongoose');
const TodoRoute = require("./routes/TodoRoute");

const app = express();
app.use(express.json());

mongoose.connect("mongodb://localhost:27017/studentRecords", 
// {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
// }
)
.then(()=>{
    console.log("database is connected")
}).catch((err)=>{console.error("Oops! Error Found, Please verify your code once, Thanks :)", err)});

app.get("/", (req, res) => {
    console.log("Salam ya habibi, kaifa ahluka")
    res.send("Walaikum assalam")
})

app.get("/noman", (req, res) => {
    console.log("noman's request hit")
    res.send("Hello from Noman")
})

// routes working

app.use("/todo", TodoRoute)

app.listen(3000, () => {
    console.log("Server is running on port 3000")
})