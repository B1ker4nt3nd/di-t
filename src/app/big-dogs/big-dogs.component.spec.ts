import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BigDogsComponent } from './big-dogs.component';

describe('BigDogsComponent', () => {
  let component: BigDogsComponent;
  let fixture: ComponentFixture<BigDogsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ BigDogsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BigDogsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
