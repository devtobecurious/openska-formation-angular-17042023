import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResumePlanetsComponent } from './resume-planets.component';

describe('ResumePlanetsComponent', () => {
  let component: ResumePlanetsComponent;
  let fixture: ComponentFixture<ResumePlanetsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResumePlanetsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ResumePlanetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
