import { getHeroeByIdAsync } from "../../base-pruebas/09-promesas";

describe('Pruebas en 09-promesas', () => {
  test('getHeroeByIdAsync debe retornar un héroe', (done) => {
    
    const id = 1;

    getHeroeByIdAsync( id )
        .then( hero => {
            expect(hero).toEqual({
                id: 1,
                name: 'Batman',
                owner: 'DC'
            });
            // El done() sirve para parar la prueba cuando
            // es una promesa
            done();
        });
  });

  test('getHeroeByIdAsync debe obtener un error si héroe no existe', (done) => {
    
    const id = 1122212;

    getHeroeByIdAsync( id )
        .catch( error => {
            expect(error).toBe(`No se pudo encontrar el héroe con id: ${ id }`);
            done();
        })
        
  });
  
})
