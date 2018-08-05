import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditorTinyComponent } from './editor-tiny.component';

describe('EditorTinyComponent', () => {
  let component: EditorTinyComponent;
  let fixture: ComponentFixture<EditorTinyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditorTinyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditorTinyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
