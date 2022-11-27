import { ComponentFixture, TestBed } from "@angular/core/testing";
import { MatButtonModule } from "@angular/material/button";
import { MatDialogModule } from "@angular/material/dialog";
import { MatDividerModule } from "@angular/material/divider";
import { MatIconModule } from "@angular/material/icon";
import { MatListModule } from "@angular/material/list";
import { MatToolbarModule } from "@angular/material/toolbar";

import { ContactsListComponent } from "./contacts-list.component";

describe("ContactsListComponent", () => {
  let component: ContactsListComponent;
  let fixture: ComponentFixture<ContactsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        MatDialogModule,
        MatToolbarModule,
        MatButtonModule,
        MatIconModule,
        MatListModule,
        MatDividerModule,
      ],
      declarations: [ContactsListComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ContactsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
