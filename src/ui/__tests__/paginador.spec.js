import mostrarPaginador, { manejarCambioPagina } from '../paginador.js';

import pokedexDocument from '../../__tests__/pokedex.fixture.js';

describe('Paginador pokedex', () => {
  const callBackFunction = jest.fn();
  it('Prueba que el controlador del cambio de pagina funcione', () => {
    document.body.innerHTML = '<li class="page-item"><a class="page-link" href="#" data-pagina="1">1</a></li>';
    const element = document.querySelector('.page-link');
    const e = { target: element, preventDefault: () => {} };
    manejarCambioPagina(e, callBackFunction);
    expect(callBackFunction).toHaveBeenCalled();
  });

  it('controla si el boton "anterior" se deshabilita al cambiar de pagina', () => {
    document.body.innerHTML = pokedexDocument;
    mostrarPaginador(
      1118,
      1,
      'https://pokeapi.co/api/v2/pokemon/?offset=20&limit=20',
      null,
    );
    expect(
      document.querySelector('.page-item').classList.contains('disabled'),
    ).toBe(true);
  });

  it('Controla si el boton "siguiente" se deshabilita al cambiar de pagina', () => {
    document.body.innerHTML = pokedexDocument;
    mostrarPaginador(
      1118,
      1,
      null,
      'https://pokeapi.co/api/v2/pokemon/?offset=20&limit=20',
    );
    expect(
      document
        .querySelector('[data-pagina=Siguiente]')
        .closest('.page-item')
        .classList.contains('disabled'),
    ).toBe(true);
  });

  it('Controla que se creen las paginas correspondientes', () => {
    document.body.innerHTML = pokedexDocument;
    const totalPokemones = 1118;
    const POKEMONES_POR_PAGINA = 20;
    const botonesAnteriorSiguiente = 2;
    const totalPaginas = Math.ceil(totalPokemones / POKEMONES_POR_PAGINA);
    mostrarPaginador(
      totalPokemones,
      1,
      'https://pokeapi.co/api/v2/pokemon/?offset=20&limit=20',
      null,
    );
    expect(document.querySelectorAll('.page-item')).toHaveLength(
      totalPaginas + botonesAnteriorSiguiente,
    );
  });

  it('Controla que se cambie de pagina', () => {
    document.body.innerHTML = pokedexDocument;

    mostrarPaginador(
      1118,
      1,
      'https://pokeapi.co/api/v2/pokemon/?offset=20&limit=20',
      null, callBackFunction,
    );
    document.querySelector('#paginador').click();
    expect(callBackFunction).toHaveBeenCalled();
  });
});
