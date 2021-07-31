import mostrarPokemon from '../pokemon.js';
import bulbasaur from '../../__tests__/bulbasaur.json';
import pokedexDocument from '../../__tests__/pokedex.fixture.js';

document.body.innerHTML = pokedexDocument;
const pokemon = bulbasaur;

test('Comprueba si se el contenedor del pokemon', () => {
  mostrarPokemon(pokemon);
  expect(document.querySelector('#pokemon-contenedor').style.display).toBe(
    'block',
  );
});

test('Comprueba si se muestra la información del pokemon', () => {
  mostrarPokemon(pokemon);
  expect(document.querySelector('#pokemon-imagen').src).toBe(pokemon.foto);
  expect(document.querySelector('#pokemon-nombre').textContent).toBe(
    pokemon.nombre,
  );
  expect(document.querySelector('#pokemon-id').textContent).toBe(pokemon.id.toString());
});
