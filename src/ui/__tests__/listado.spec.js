import pokedexDocument from '../../__tests__/pokedex.fixture.js';
import {
  actualizarTextoIndicePokemones,
  mostrarListadoPokemones,
} from '../listado.js';

describe('Testea listado de pokemones', () => {
  it('Deberia actualizar el texto del pokemon', () => {
    document.body.innerHTML = pokedexDocument;
    actualizarTextoIndicePokemones('un texto');
    expect(document.querySelector('#indice').textContent).toContain('un texto');
  });
  it('Muestra el listado de pokemones', () => {
    document.body.innerHTML = pokedexDocument;
    mostrarListadoPokemones(['bulbasaur']);
    expect(document.querySelectorAll('.list-group-item')).toHaveLength(1);
  });

  it('Setea funcion de call back', () => {
    const callBackFunction = jest.fn();
    document.body.innerHTML = pokedexDocument;
    mostrarListadoPokemones(['bulbasaur'], callBackFunction);
    document.querySelector('.list-group-item').click();
    expect(callBackFunction).toHaveBeenCalled();
  });
});
