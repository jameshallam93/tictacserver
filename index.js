const express = require("express")
const app = express()

const cors = require("cors")

const PORT = process.env.PORT || 3005


app.use(express.static("build"))

app.listen(PORT, ()=>{
    console.log(`app listening on port ${PORT}`);
}, PORT)

