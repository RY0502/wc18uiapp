import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WcnavbarComponent } from './wcnavbar.component';

describe('WcnavbarComponent', () => {
  let component: WcnavbarComponent;
  let fixture: ComponentFixture<WcnavbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WcnavbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WcnavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
