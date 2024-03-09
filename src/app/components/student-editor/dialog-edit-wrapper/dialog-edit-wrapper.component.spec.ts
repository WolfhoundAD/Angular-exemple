import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogEditWrapperComponent } from './dialog-edit-wrapper.component';

describe('DialogEditWrapperComponent', () => {
  let component: DialogEditWrapperComponent;
  let fixture: ComponentFixture<DialogEditWrapperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DialogEditWrapperComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogEditWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
