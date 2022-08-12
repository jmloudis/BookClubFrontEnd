import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllClubsComponent } from './all-clubs.component';

describe('AllClubsComponent', () => {
  let component: AllClubsComponent;
  let fixture: ComponentFixture<AllClubsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllClubsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AllClubsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
