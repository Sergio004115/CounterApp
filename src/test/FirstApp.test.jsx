import { render } from '@testing-library/react';
import { FirstApp } from '../FirstApp';


describe('Prueba en FirstApp', () => {
    test('Debe de hacer match con el snapshot', () => {

      const title = 'Hola Soy Sergio'
      render( <FirstApp title={ title } /> )
            
  });
  
})
