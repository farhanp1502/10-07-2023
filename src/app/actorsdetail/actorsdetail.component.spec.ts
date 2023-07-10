import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActorsdetailComponent } from './actorsdetail.component';

describe('ActorsdetailComponent', () => {
  let component: ActorsdetailComponent;
  let fixture: ComponentFixture<ActorsdetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActorsdetailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ActorsdetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
