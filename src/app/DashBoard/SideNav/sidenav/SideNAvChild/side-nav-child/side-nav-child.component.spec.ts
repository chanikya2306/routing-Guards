import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SideNavChildComponent } from './side-nav-child.component';

describe('SideNavChildComponent', () => {
  let component: SideNavChildComponent;
  let fixture: ComponentFixture<SideNavChildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SideNavChildComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SideNavChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
