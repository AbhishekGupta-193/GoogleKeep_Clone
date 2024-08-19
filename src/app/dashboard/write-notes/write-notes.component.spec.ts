import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WriteNotesComponent } from './write-notes.component';

describe('WriteNotesComponent', () => {
  let component: WriteNotesComponent;
  let fixture: ComponentFixture<WriteNotesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WriteNotesComponent]
    });
    fixture = TestBed.createComponent(WriteNotesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
