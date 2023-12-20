import { retornaArreglo } from "../../base-pruebas/07-deses-arr"

describe('Pruebas en 07-deses-arr', () => {

  test('Debe retornar un string y un número', () => {
    const [letters, numbers ] = retornaArreglo();
    
    // expect(letters).toBe('ABC');
    // expect(numbers).toBe(123);

    // Se mira que tipo de dato es con typeOf y se le puede decir 
    // que debe recibir ese tipo de dato de la siguiente manera.
    expect(typeof letters).toBe('string');
    expect(typeof numbers).toBe('number');

  })
  
})
