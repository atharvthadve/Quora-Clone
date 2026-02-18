const express = require("express");
const app = express();
const port = 2100;
const path = require("path");
const {v4: uuidv4} = require("uuid")
const methodOverride = require('method-override')
app.use(methodOverride('_method'))

app.use(express.urlencoded({extended: true}))

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"))

// Updated to serve the entire public directory
app.use(express.static(path.join(__dirname, "public")));

let posts = [
    {
        id: uuidv4(),
        username: "atharv_08",
        content: "Success doesn’t come from what you do occasionally, it comes from what you do consistently."
    },
    {
        id: uuidv4(),
        username: "push.kar33",
        content: "Your future is created by what you do today, not tomorrow."
    },
    {
        id: uuidv4(),
        username: "misterog",
        content: "Discipline is choosing what you want most over what you want now.”"
    }
]

app.get("/posts", (req, res)=>{
    res.render("index.ejs", {posts});
})

app.get("/posts/new", (req, res)=>{
    res.render("newpost.ejs");
})

app.post("/posts", (req, res)=>{
    let id = uuidv4();
    let {username , content}= req.body;
    posts.push({id, username, content});
    res.redirect("/posts")
})


app.get("/posts/:id", (req, res) => {
    let { id } = req.params;
    let post = posts.find((p) => p.id === id);
    if (post) {
        res.render("detail.ejs", { post });  
    } else {
        res.render("error.ejs");
    }
});

app.patch("/posts/:id", (req, res)=>{
    let {id} = req.params;
    let content = req.body.content;
    let post = posts.find((p)=> id === p.id);
    post.content = content;
    res.redirect("/posts");
})

app.get("/posts/:id/edit", (req, res)=>{
    let {id} = req.params;
    let post = posts.find((p)=> id === p.id)
    res.render("edit.ejs", {post});
})

app.delete("/posts/:id", (req,res)=>{
    let {id} = req.params;
    posts = posts.filter((p)=> id !== p.id)
    res.redirect("/posts")
})

app.listen(port, ()=>{
    console.log(`Server started at http://localhost:${port}`);
})
