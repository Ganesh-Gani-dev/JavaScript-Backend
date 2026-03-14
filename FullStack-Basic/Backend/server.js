import express from 'express';

const app = express();

app.get("/",(req,res)=>{
    res.send("Server is ready")
})

app.get("/jokes",(rew,res)=>{
    const jokes = [
        {
            id:1,
            title:"Why did the scarecrow win an award?",
            joke:"Because he was outstanding in his field!"
        },
        {
            id:2,
            title:"Why don't scientists trust atoms?",
            joke:"Because they make up everything!" 

        },
        {
            id:3,
            title:"Why did the bicycle fall over?",
            joke:"Because it was two-tired!"
        }
    ]
    res.json(jokes)
})


const port = process.env.PORT || 3000;

app.listen(port,()=>
{
    console.log(`Serve at ${port}`)
})