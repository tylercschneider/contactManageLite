class Contact {
	constructor(name, email, phone, relation) {
		this.name = name;
		this.email = email;
		this.phone = phone;
		this.relation = relation;
	}
}
class AddressBook {
	constructor(contacts) {
		this.contacts = contacts;
	}
	add() {
		let name = prompt(`What is your contact's name?`);
		let email = prompt(`What is your contact's email?`);
		let phone = prompt(`What is your contact's phone number?`);
		let relation = prompt(`What is your relationship to this contact?`);
		let contact = new Contact(name, email, phone, relation);
		this.contacts.push(contact);
		console.log(`${name} has been added to your contacts`);
	}
	deleteAt() {
		let choice = prompt('What # contact would you like to delete?', 'Enter your number here.');
		let confirm = prompt(`Delete ${this.contacts[choice].name}, with email ${this.contacts[choice].email}?`, "Please enter yes or no here");
				if(confirm === "yes" || confirm === ""){
					console.log(`${this.contacts[choice].name} has been deleted.`);
					this.contacts.splice(choice, 1);
				}
				else {
					console.log(`${this.contacts[choice].name} was not deleted.`);
				}
	}
	print() {
		for(let i= 0; i<this.contacts.length; i++){
			console.log(`${i} => NAME: ${this.contacts[i].name}`);
			console.log(`    EMAIL: ${this.contacts[i].email}`);
			console.log(`    PHONE: ${this.contacts[i].phone}`);
			console.log(`    RELATION: ${this.contacts[i].relation}`);
			console.log('');
		}
	}
	deleteByName() {
		let name = prompt("Who do you want to delete", "Enter name here...spelling counts.");
		for(let i= 0; i<this.contacts.length; i++){
			if(this.contacts[i].name === name){
				let confirm = prompt(`Delete ${this.contacts[i].name}, with email ${this.contacts[i].email}?`, "Please enter yes or no here");
				if(confirm === "yes" || confirm === ""){
					console.log(`${this.contacts[i].name} has been deleted.`);
					this.contacts.splice(i, 1);
				}
				else {
					console.log(`${this.contacts[i].name} was not deleted.`);
				}
			}
		}
	}
	quit() {
		console.log("Goodbye.");
	}
}
let contacts = [{
	name: "Tyler",
	email: "tyler@email.com",
	phone: 8108109024,
	relation: "none"
	},
	{
	name: "Deborah",
	email: "deb@email.com",
	phone: 3137148929,
	relation: "person"
	},
	{
	name: "Tim",
	email: "timmy@email.com",
	phone: 7036781209,
	relation: "bud"
	},
	{
	name: "Alex",
	email: "allie@email.com",
	phone: 6162897987,
	relation: "sis"
	} 
];
let book = new AddressBook(contacts);