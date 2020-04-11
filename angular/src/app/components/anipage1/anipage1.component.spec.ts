import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Anipage1Component } from './anipage1.component';

describe('Anipage1Component', () => {
  let component: Anipage1Component;
  let fixture: ComponentFixture<Anipage1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Anipage1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Anipage1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
