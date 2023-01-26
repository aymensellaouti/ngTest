import { MathService } from './math.service';
fdescribe('MathService', () => {
  let mathService: MathService;
  let loggerSpy: any;
  beforeAll(() => {
    console.log('Called before all specs are run');
  });
  afterAll(() => {
    console.log('Called after all specs are run');
  });

  beforeEach(() => {
    console.log('Called before each spec is run');
    loggerSpy = jasmine.createSpyObj('LoggerService', ['log']);
    mathService = new MathService(loggerSpy);
  });
  afterEach(() => {
    console.log('Called after each spec is run');
  });
  it('add two numbers', () => {
    expect(mathService.add(2, 3)).toEqual(5, 'unexpected sum result');
    expect(loggerSpy.log).toHaveBeenCalledTimes(1);
  });

  it('substract two numbers', () => {
    expect(mathService.substract(3, 2)).toEqual(1, 'unexpected sum result');
  });
});
