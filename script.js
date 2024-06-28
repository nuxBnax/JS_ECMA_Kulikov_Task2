// Задание 1. Управление библиотекой книг.
class Book {
	constructor (title, author, pages) {
		this.title = title;
		this.author = author;
		this.pages = pages;
	}
	displayInfo() {
		console.log(`Title: ${this.title}, Author: ${this.author}, Pages: ${this.pages}`);
	}
}
 const book = new Book("Bookname1","Author1",123);
 book.displayInfo();

 
 class Student {
 	constructor(name, age, grade) {
 		this.name = name;
 		this.age = age;
 		this.grade = grade;
 	}
 	displayInfo() {
		console.log(`Name: ${this.name}, Age: ${this.age}, Grade: ${this.grade}`);
	}
 }

 const student = new Student("John Smith", 16, "10th grade");
 student.displayInfo();