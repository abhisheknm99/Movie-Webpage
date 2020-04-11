import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Anipage2Component } from './anipage2.component';

describe('Anipage2Component', () => {
  let component: Anipage2Component;
  let fixture: ComponentFixture<Anipage2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Anipage2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Anipage2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
