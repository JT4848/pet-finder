const express = require('express');
const app = express();
const pets = require('./data.js')

//DONE: show all pets names with /pets
//DONE: be able to see just one pet by typing in the name with pets/:name
//DONE: be able to tpye the owner name and see what dog they have using query using pets/owner

console.log(pets)

//html shows the names
// app.use(express.static('public'))
// app.get('/pets', (req, res) => {
//   const petName = pets.map(pet => pet.name)
  
//   res.send(petName)
// })



const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`)
})


//from url
app.get('/pets', (req, res) => {
  const petName = pets.map(pet => pet.name)
  
  res.send(petName.join(', '))
})

//http://localhost:3000/pets/owner?owner=John synctax for that
app.get('/pets/owner', (req, res) => {
  const owner = pets.find(o => o.owner === req.query.owner);
  if(owner){
    res.send(owner);
  }
  else{
    res.status(404).send({error: "owner not found"})
  }
})

app.get('/pets/:name', (req, res) => {
  const pet = pets.find(p => p.name === req.params.name);
  if(pet){
    res.send(pet);
  }
  else{
    res.status(404).send({error: "pet not found"})
  }
})







