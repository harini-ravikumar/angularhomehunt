import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeviewComponent } from './homeview.component';

describe('HomeviewComponent', () => {
  let component: HomeviewComponent;
  let fixture: ComponentFixture<HomeviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HomeviewComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
