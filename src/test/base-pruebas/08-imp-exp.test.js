import { getHeroeById, getHeroesByOwner } from "../../base-pruebas/08-imp-exp";

describe('Prubas de 08-imp-exp', () => {
  test('getHeroeById debe retornar un heroe por id', () => {
    const id = 1;

    const hero = getHeroeById(id);

    console.log(hero);

    expect(hero).toEqual( { id: 1, name: 'Batman', owner: 'DC' })
  });

  test('getHeroeById debe retornar un undefined si el heroe no existe', () => {
    const id = 100;

    const hero = getHeroeById(id);
    expect( hero ).toBeFalsy();
  });

  test('getHeroesByOwner Debe retornar un arreglo de los héroes de DC', () => {
    const owner = 'DC';
    const arr = getHeroesByOwner(owner);

    expect(arr.length).toBe(3);
    expect(arr).toEqual(arr.filter( (heroe) => heroe.owner === owner ));

  });

  test('getHeroesByOwner Debe retornar un arreglo de los héroes de Marvel', () => {
    const owner = 'Marvel';
    const arrHeroesMarvel = getHeroesByOwner(owner);

    expect(arrHeroesMarvel.length).toBe(2);
    expect(arrHeroesMarvel).toEqual(arrHeroesMarvel.filter( (heroe) => heroe.owner === owner ))

  });
  
});
