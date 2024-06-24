const pokemon = require("./models/pokemon.json");
console.log(pokemon[0]);

const express = require('express');
const app = express();
const port = 8888;


console.log(pokemon[0]);

app.get('/pokemon', (req, res) => {
    res.json(pokemon);
});

app.get('/pokemon/:indexOfArray', (req, res) => { const index = parseInt(req.params.indexOfArray, 10);  if (index >= 0 && index < pokemon.length) {
        res.json(pokemon[index]);
    } 
    
    else 
    
    
    
    {


        res.send(`Sorry, no Pokémon found at /pokemon/${index}`);
    }

});


app.get('/pokemon/search', (req, res) => { const name = req.query.name; const foundPokemon = pokemon.find(p => p.name.toLowerCase() === name.toLowerCase());
    if (foundPokemon) {



        res.json(foundPokemon);
    } else 
    
    {
        res.send(`Sorry, no Pokémon found with the name ${name}`);
    }
});

app.listen(port, () => {
    console.log(`test http://localhost:${port}`);
});
