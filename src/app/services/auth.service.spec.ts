import { AuthService } from './auth.service';

fdescribe('AuthService', () => {
  let authService: AuthService;

  beforeEach(() => {
    authService = new AuthService();
    localStorage.removeItem('user');
  });
  it('should be created', () => {
    expect(authService).toBeTruthy();
  });
  it('return true when user is logged In', () => {
    localStorage.setItem('user', 'aymen');
    expect(authService.isAuthentified()).toBeTrue();
  });
  it('return false when user is logged Out', () => {
    expect(authService.isAuthentified()).toBeFalse();
  });
});
