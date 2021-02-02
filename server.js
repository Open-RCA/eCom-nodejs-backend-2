const express = require("express")
const app = express()
const PORT = 3000

app.get('/',(req,res)=>{
    res.json({msg:"Hello from e-commerce"})
})

app.listen(PORT,()=>{
    console.log(`Server has started at ${PORt}`)
})
