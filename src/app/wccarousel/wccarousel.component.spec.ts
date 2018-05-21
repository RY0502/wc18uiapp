import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WccarouselComponent } from './wccarousel.component';

describe('WccarouselComponent', () => {
  let component: WccarouselComponent;
  let fixture: ComponentFixture<WccarouselComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WccarouselComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WccarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
