const express=require('express');
const app=express();
const port=process.env.PORT || 5000;
const cors=require('cors');
const chef=require('./data/chef.json')
app.use(cors());
app.get('/',(req,res)=>{
    res.send('chef table is running');
});
app.get('/chef',(req,res)=>{
    res.send(chef);
});
app.get('/chef/:id',(req,res)=>{
    const id=parseInt(req.params.id);
    const selecteChef=chef.find(n=>n.id===id);
    res.send(selecteChef);
});
app.listen(port,()=>{
    console.log(`chef table is running on port ${port}`)
});