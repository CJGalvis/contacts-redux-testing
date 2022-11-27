import { Component, Inject, OnInit } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";
import { Contact } from "src/app/models/Contact";

@Component({
  selector: "app-contact-form",
  templateUrl: "./contact-form.component.html",
  styleUrls: ["./contact-form.component.css"],
})
export class ContactFormComponent implements OnInit {
  public form: FormGroup = new FormGroup({
    name: new FormControl("", [Validators.required, Validators.minLength(4)]),
    phone: new FormControl("", [Validators.required, Validators.minLength(7)]),
  });
  constructor(
    public dialogRef: MatDialogRef<any>,
    @Inject(MAT_DIALOG_DATA) public data: { item: Contact }
  ) {}

  ngOnInit(): void {
    if (this.data.item) {
      this.form.patchValue(this.data.item);
    }
  }

  onClick() {
    if (this.form.valid) {
      const item = {
        ...this.form.value,
        id: this.data.item ? this.data.item.id : null,
      };
      this.dialogRef.close({ ...item });
      this.form.reset();
      this.form.markAsUntouched();
    }
  }
}
