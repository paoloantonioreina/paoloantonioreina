import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SimplePromptComponent } from './simple-prompt.component';

describe('SimplePromptComponent', () => {
  let component: SimplePromptComponent;
  let fixture: ComponentFixture<SimplePromptComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SimplePromptComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SimplePromptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
