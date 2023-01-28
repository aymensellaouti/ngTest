import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginComponent } from './login.component';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';
import { AuthService } from '../../services/auth.service';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  let debugElement: DebugElement;
  let authServiceSpy: any;
  let authService: AuthService;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LoginComponent],
      providers: [AuthService],
    }).compileComponents();
    authService = TestBed.inject(AuthService);
    console.log({ authService });
    authServiceSpy = spyOn(authService, 'isAuthentified');
    console.log({ authServiceSpy });
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    debugElement = fixture.debugElement;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('show USER Logged in <h1> if the user is logged', () => {
    authServiceSpy.and.returnValue(true);
    component.login();
    fixture.detectChanges();
    const h1: DebugElement = debugElement.query(By.css('h1'));
    console.log(h1);
    expect(h1.nativeElement.innerHTML).toContain('User Logged');
  });
  it('show USER not Logged in <h1> if the user is not logged', () => {
    authServiceSpy.and.returnValue(false);
    component.login();
    fixture.detectChanges();
    const h1: DebugElement = debugElement.query(By.css('h1'));
    expect(h1.nativeElement.innerHTML).toContain('User not Logged');
  });
});
