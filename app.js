//jshint escersion:6

const express = require("express");
const bodyParser = require("body-parser")

const app = express()

var items = []
let workItems = []

app.set("view engine", "ejs")

app.use(bodyParser.urlencoded({
    extended: true
}))
app.use(express.static("public"))

app.get("/", (req, res) => {
    var today = new Date();
    var options = {
        weekday: "long",
        day: "numeric",
        month: "long"
    }

    var day = today.toLocaleDateString("en-US", options)

    res.render("list", {
        listTitle: day,
        newListItems: items
    })

})

app.post("/", (req, res) => {
    var item = req.body.newItem
    items.push(item)
    res.redirect("/")

})
app.listen(3000, () => {
    console.log("this is port 3000")
})


app.get("/work", (req, res) => {
    res.render("list", {
        listTitle: "Work List",
        newListItems: workItems

    })
})

app.post("/work", (req, res) => {
    let item = req.body.newItem
    worlItem.push(item)
    res.redirect("/work")
})