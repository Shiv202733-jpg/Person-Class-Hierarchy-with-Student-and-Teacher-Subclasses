import React from 'react';
import './ClassHierarchyDemo.css';

// 1. The class definitions are placed outside the component.
// This is a good practice as they don't need to be redefined on every render.

// Base Class (Parent)
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  introduce() {
    return `Hello, my name is ${this.name} and I am ${this.age} years old.`;
  }
}

// Student Subclass (Child)
class Student extends Person {
  constructor(name, age, course) {
    super(name, age);
    this.course = course;
  }

  introduce() {
    return `${super.introduce()} I am studying ${this.course}.`;
  }
}

// Teacher Subclass (Child)
class Teacher extends Person {
  constructor(name, age, subject) {
    super(name, age);
    this.subject = subject;
  }

  introduce() {
    return `${super.introduce()} I teach ${this.subject}.`;
  }
}


// --- React Component ---
function ClassHierarchyDemo() {
  // 2. Create instances of the classes inside the component.
  const student1 = new Student('Alice', 20, 'Computer Science');
  const teacher1 = new Teacher('Mr. Smith', 45, 'Mathematics');

  return (
    <div className="demo-container">
      <h2>Class Inheritance in React</h2>
      <div className="person-card">
        <h3>Student Details</h3>
        {/* 3. Call the method and render its output in a JSX element */}
        <p>{student1.introduce()}</p>
      </div>
      <div className="person-card">
        <h3>Teacher Details</h3>
        {/* 3. Call the method and render its output in a JSX element */}
        <p>{teacher1.introduce()}</p>
      </div>
    </div>
  );
}

export default ClassHierarchyDemo;