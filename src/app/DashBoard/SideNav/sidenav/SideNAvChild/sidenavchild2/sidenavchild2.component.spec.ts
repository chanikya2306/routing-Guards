import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Sidenavchild2Component } from './sidenavchild2.component';

describe('Sidenavchild2Component', () => {
  let component: Sidenavchild2Component;
  let fixture: ComponentFixture<Sidenavchild2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Sidenavchild2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Sidenavchild2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
