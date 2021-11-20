import { Router } from 'express';

const router = Router();

router.get('/', (req, res) => {
  res.json({
    pokemons: [
      {
        name: 'charmander',
        img: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/004.png',
        type: 'fuego'
      },
      {
        name: 'charizard',
        img: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/006.png',
        type: 'fuego'
      },
      {
        name: 'bulbasour',
        img: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png',
        type: 'hoja'
      },
      {
        name: 'ivysaur',
        img: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/002.png',
        type: 'hoja'
      },
      {
        name: 'Squirtle',
        img: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/007.png',
        type: 'agua'
      },
      {
        name: 'Blastoise',
        img: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/009.png',
        type: 'agua'
      }
    ]
  })
})

export default router;

//// "nodemon src/index.js --exect babel-node"