import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearusuariooComponent } from './crearusuarioo.component';

describe('CrearusuariooComponent', () => {
  let component: CrearusuariooComponent;
  let fixture: ComponentFixture<CrearusuariooComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrearusuariooComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CrearusuariooComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
