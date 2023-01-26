import { DefaultImagePipe } from './default-image.pipe';
import { CONSTANTES } from '../config/const.config';

let pipe: DefaultImagePipe;

fdescribe('DefaultImagePipe', () => {
  beforeEach(() => {
    pipe = new DefaultImagePipe();
  });

  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('return DefaultImage if path is empty', () => {
    const path = '';
    expect(pipe.transform(path)).toEqual(CONSTANTES.defaultImage);
  });

  it('return DefaultImage if path contains only space', () => {
    const path = '         ';
    expect(pipe.transform(path)).toEqual(CONSTANTES.defaultImage);
  });

  it('return same path if path is !empty and contains 1 caracter diffrent from space', () => {
    const path = 'aPath';
    expect(pipe.transform(path)).toEqual(path);
  });
});
