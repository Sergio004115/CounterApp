import { getUser, getUsuarioActivo } from "../../base-pruebas/05-funciones"

describe('Pruebas en 05-funciones', () => {

    // 1. Primer Test
    test('getUser debe retornar un objeto', () => {
      const testUser = {
        uid: 'ABC123',
        username: 'El_Papi1502'
      }
      const user = getUser();
      console.log(user);

      expect(testUser).toEqual(user);
    });

    // 2. Test
    test('getUsuarioActivo debe retornar un obj', () => {
      const nombre = 'Sergio';

      const userActive = getUsuarioActivo( nombre );

      expect(userActive).toStrictEqual({
        uid: 'ABC567',
        username: nombre
      });

      console.log('USUARIO ACTIVO: ', userActive);

    })
    
    
  
})
