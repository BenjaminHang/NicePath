import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FootmarkComponent } from './footmark.component';

describe('FootmarkComponent', () => {
  let component: FootmarkComponent;
  let fixture: ComponentFixture<FootmarkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FootmarkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FootmarkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
