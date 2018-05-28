import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WcVideosComponent } from './wc-videos.component';

describe('WcVideosComponent', () => {
  let component: WcVideosComponent;
  let fixture: ComponentFixture<WcVideosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WcVideosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WcVideosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
