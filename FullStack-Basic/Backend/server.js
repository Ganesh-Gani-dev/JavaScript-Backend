import express from 'express';

const app = express();

app.get("/",(req,res)=>{
    res.send("Server is ready")
})

app.get("/api/jokes",(req,res)=>{
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
        },
        {
            id:4,
            title:"Why can't you give Elsa a balloon?",
            joke:"Because she'll let it go!"
        },
        {
            id:5,
            title:"What do you call cheese that isn't yours?",
            joke:"Nacho cheese!"
        },
        {
            id:6,
            title:"Why did the math book look so sad?",
            joke:"Because it had too many problems!"
        },
        {
            id:7,
            title:"What do you call a fish without eyes?",
            joke:"A fsh!"
        },
        {
            id:8,
            title:"Why did the golfer bring an extra pair of pants?",
            joke:"In case he got a hole in one!"
        },
        {
            id:9,
            title:"What do you call a sleeping dinosaur?",
            joke:"A dino-snore!"
        },
        {
            id:10,
            title:"Why did the tomato turn red?",
            joke:"Because it saw the salad dressing!"
        },
        {
            id:11,
            title:"What do you call a fake noodle?",
            joke:"An impasta!"
        },
        {
            id:12,
            title:"Why don't eggs tell jokes?",
            joke:"Because they'd crack each other up!"
        },
        {
            id:13,
            title:"What do you call a bear with no teeth?",
            joke:"A gummy bear!"
        },
        {
            id:14,
            title:"Why did the coffee file a police report?",
            joke:"Because it got mugged!"
        },
        {
            id:15,
            title:"What do you call a dog that does magic tricks?",
            joke:"A labracadabrador!"
        },
        {
            id:16,
            title:"Why did the stadium get hot after the game?",
            joke:"Because all the fans left!"
        },
        {
            id:17,
            title:"What do you call a snowman with a six-pack?",
            joke:"An abdominal snowman!"
        },
        {
            id:18,
            title:"Why don't skeletons fight each other?",
            joke:"They don't have the guts!"
        },
        {
            id:19,
            title:"What do you call a lazy kangaroo?",
            joke:"A pouch potato!"
        },
        {
            id:20,
            title:"Why did the invisible man turn down the job offer?",
            joke:"He couldn't see himself doing it!"
        },
        {
            id:21,
            title:"What do you call an alligator in a vest?",
            joke:"An investigator!"
        },
        {
            id:22,
            title:"Why did the computer go to the doctor?",
            joke:"Because it had a virus!"
        },
        {
            id:23,
            title:"What do you call a pile of cats?",
            joke:"A meowtain!"
        },
        {
            id:24,
            title:"Why did the belt go to jail?",
            joke:"Because it held up a pair of pants!"
        },
        {
            id:25,
            title:"What do you call a cow on a trampoline?",
            joke:"A milkshake!"
        },
        {
            id:26,
            title:"Why did the banana go to the doctor?",
            joke:"Because it wasn't peeling well!"
        },
        {
            id:27,
            title:"What do you call a train that sneezes?",
            joke:"Achoo-choo train!"
        },
        {
            id:28,
            title:"Why did the teacher wear sunglasses?",
            joke:"Because her students were so bright!"
        },
        {
            id:29,
            title:"What do you call a pig that does karate?",
            joke:"A pork chop!"
        },
        {
            id:30,
            title:"Why did the clock get kicked out of the library?",
            joke:"Because it tocked too much!"
        }
    ]
    res.json(jokes)
})


const port = process.env.PORT || 3000;

app.listen(port,()=>
{
    console.log(`Serve at ${port}`)
})