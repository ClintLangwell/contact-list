"use strict";

let contacts = [
  {
    name: "Tom",
    phone: "248-248-2482",
    relation: "friend",
  },
  {
    name: "Jane",
    phone: "248-248-2482",
    relation: "friend",
  },
  {
    name: "John",
    phone: "248-248-2482",
    relation: "friend",
  },
  {
    name: "Jimmy",
    phone: "248-248-2482",
    relation: "friend",
  },
  {
    name: "Bob",
    phone: "248-248-2482",
    relation: "friend",
  },
  {
    name: "Bill",
    phone: "248-248-2482",
    relation: "friend",
  },
  {
    name: "Jackie",
    phone: "248-248-2482",
    relation: "friend",
  },
  {
    name: "Jill",
    phone: "248-248-2482",
    relation: "friend",
  },
  {
    name: "Joey",
    phone: "248-248-2482",
    relation: "friend",
  },
];
console.log(contacts);
let contactsContainer = document.querySelector(".contacts-container");
let display = () => {
  contactsContainer.innerHTML = "";
  contacts.forEach((contact, index) => {
    let card = document.createElement("div");
    card.classList.add("card");
    let name = document.createElement("p");
    name.innerText = `Name: ${contact.name}`;
    let phone = document.createElement("p");
    phone.innerText = `Phone: ${contact.phone}`;
    let relation = document.createElement("p");
    relation.innerText = `Relation: ${contact.relation}`;
    let deleteBtn = document.createElement("button");
    deleteBtn.innerText = "X";
    deleteBtn.classList.add("delete");
    deleteBtn.setAttribute("data-index", index);
    card.append(name, phone, relation, deleteBtn);
    contactsContainer.append(card);
  });
};

display();

contactsContainer.addEventListener("click", (e) => {
  if (e.target.classList.contains("delete")) {
    let index = e.target.getAttribute("data-index");
    contacts.splice(index, 1);
    console.log(contacts);
    display();
  }
});

let contactForm = document.querySelector(".contact-form");
contactForm.addEventListener("submit", (e) => {
  e.preventDefault();
  let snapShot = new FormData(contactForm);
  let name = snapShot.get("name");
  let phone = snapShot.get("phone");
  let relation = snapShot.get("relation");
  let newContact = {
    name: name,
    phone: phone,
    relation: relation,
  };
  contacts.push(newContact);
  display();
});
