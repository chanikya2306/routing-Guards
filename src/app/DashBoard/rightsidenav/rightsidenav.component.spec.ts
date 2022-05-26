import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RightsidenavComponent } from './rightsidenav.component';

describe('RightsidenavComponent', () => {
  let component: RightsidenavComponent;
  let fixture: ComponentFixture<RightsidenavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RightsidenavComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RightsidenavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
