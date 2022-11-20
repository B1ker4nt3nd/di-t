import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SmallDogsComponent } from './small-dogs.component';

describe('SmallDogsComponent', () => {
  let component: SmallDogsComponent;
  let fixture: ComponentFixture<SmallDogsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ SmallDogsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SmallDogsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
