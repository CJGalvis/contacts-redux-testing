import { ComponentFixture, TestBed } from "@angular/core/testing";
import {
  MatDialogModule,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from "@angular/material/dialog";

import { ConfirmDeleteContactComponent } from "./confirm-delete-contact.component";

describe("ConfirmDeleteContactComponent", () => {
  let component: ConfirmDeleteContactComponent;
  let fixture: ComponentFixture<ConfirmDeleteContactComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MatDialogModule],
      declarations: [ConfirmDeleteContactComponent],
      providers: [{ provide: MatDialogRef, useValue: {} }],
    }).compileComponents();

    fixture = TestBed.createComponent(ConfirmDeleteContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
