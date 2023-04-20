import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FightObsVsPromComponent } from './fight-obs-vs-prom.component';

describe('FightObsVsPromComponent', () => {
  let component: FightObsVsPromComponent;
  let fixture: ComponentFixture<FightObsVsPromComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ FightObsVsPromComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FightObsVsPromComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
