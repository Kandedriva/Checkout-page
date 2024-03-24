import express  from "express";
const port = 3000;


const app = express();

app.get("/", (req, res)=>{
    res.render("checkout.ejs")
})


app.listen(port, ()=>{
    console.log(`Server up and running on ${port}`)
})
// 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 