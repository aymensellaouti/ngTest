import { fakeAsync, flush, flushMicrotasks, tick } from '@angular/core/testing';

fdescribe('AsyncTests', () => {
  it('exemple timeout  with done', (done: DoneFn) => {
    let x = 1;
    setTimeout(() => {
      x++;
      expect(x).toBe(2);
      done();
    }, 1000);
  });
  it('exemple timeout fakeAsync + tick()', fakeAsync(() => {
    let x = 1;
    setTimeout(() => {
      x++;
      expect(x).toBe(2);
    }, 1000);

    tick(1000);
  }));
  it('exemple timeout fakeAsync + flush', fakeAsync(() => {
    let x = 1;
    setTimeout(() => {
      x++;
      expect(x).toBe(2);
    }, 1000);
    flush();
  }));
  it('exemple Promesse fakeAsync + flush', fakeAsync(() => {
    let test = false;
    setTimeout(() => {
      console.log('Timout1');
    });
    Promise.resolve().then(() => {
      test = true;
      console.log('Promesse 1');
      return Promise.resolve()
    }).then(() => {
      console.log('Promesse 2');
    });
    flush();
    expect(test).toBeTrue();
  }));
});
