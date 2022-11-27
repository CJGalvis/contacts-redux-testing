import { Component, OnInit } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";
import { filter } from "rxjs";
import { Contact } from "src/app/models/Contact";
import { ConfirmDeleteContactComponent } from "../confirm-delete-contact/confirm-delete-contact.component";
import { ContactFormComponent } from "../contact-form/contact-form.component";

@Component({
  selector: "app-contacts-list",
  templateUrl: "./contacts-list.component.html",
  styleUrls: ["./contacts-list.component.css"],
})
export class ContactsListComponent implements OnInit {
  public contacts: Array<Contact> = [];
  constructor(private matDialog: MatDialog) {}

  ngOnInit(): void {
    this.getAllContacts();
  }

  getAllContacts() {
    this.contacts = JSON.parse(localStorage.getItem("contacts")!) || [];
  }

  openModalForm(item?: Contact) {
    let dialogContact = this.matDialog.open(ContactFormComponent, {
      data: { item },
      disableClose: true,
    });

    dialogContact.afterClosed().subscribe((contact) => {
      contact.id ? this.updateContact(contact) : this.createContact(contact);
    });
  }

  openModalConfirm(contact: Contact) {
    let dialogConfirm = this.matDialog.open(ConfirmDeleteContactComponent);
    dialogConfirm
      .afterClosed()
      .pipe(filter((result) => Boolean(result)))
      .subscribe(() => {
        this.deleteContact(contact);
      });
  }

  updateContact(contact: Contact) {
    let contactsStorage =
      JSON.parse(localStorage.getItem("contacts")!) || ([] as Array<Contact>);

    const index = contactsStorage.findIndex(
      (item: Contact) => item.id == contact.id
    );

    contactsStorage[index] = contact;
    localStorage.setItem("contacts", JSON.stringify(contactsStorage));
    this.getAllContacts();
  }

  createContact(contact: Contact) {
    let contactsStorage =
      JSON.parse(localStorage.getItem("contacts")!) || ([] as Array<Contact>);

    const id = Math.random().toString();
    contactsStorage.push({
      id,
      name: contact.name,
      phone: contact.phone,
    });

    localStorage.setItem("contacts", JSON.stringify(contactsStorage));
    this.getAllContacts();
  }

  deleteContact(contact: Contact) {
    let contactsStorage =
      JSON.parse(localStorage.getItem("contacts")!) || ([] as Array<Contact>);

    const index = contactsStorage.findIndex(
      (item: Contact) => item.id == contact.id
    );

    contactsStorage.splice(index, 1);
    localStorage.setItem("contacts", JSON.stringify(contactsStorage));
    this.getAllContacts();
  }
}
