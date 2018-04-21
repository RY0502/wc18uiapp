import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WcNextMatchComponent } from './wc-next-match.component';

describe('WcNextMatchComponent', () => {
  let component: WcNextMatchComponent;
  let fixture: ComponentFixture<WcNextMatchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WcNextMatchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WcNextMatchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
