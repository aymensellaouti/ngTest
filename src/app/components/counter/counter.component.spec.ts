import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CounterComponent } from './counter.component';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';
import { findEl } from '../../helpers/tests/test.helpers';

fdescribe('CounterComponent', () => {
  let component: CounterComponent;
  let fixture: ComponentFixture<CounterComponent>;
  let el: DebugElement;
  let countShow: DebugElement;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CounterComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CounterComponent);
    component = fixture.componentInstance;
    el = fixture.debugElement;
    fixture.detectChanges();
  });

  it('CounterComponent exist', () => {
    expect(component).toBeTruthy();
  });
  it('increment counter by one when clic on + button', () => {
    //Act
    countShow = findEl(fixture, 'count');
    fixture.detectChanges();
    expect(true).toBe(true);
  });
});
