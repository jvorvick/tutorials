// const person: {
//   name: string;
//   age: number;
// } = {
// const person: {
//   name: string;
//   age: number;
//   hobbies: string[];
//   role: [number, string];
// } = {
//   name: 'Jesse',
//   age: 31,
//   hobbies: ['Video Games', 'Martial Arts'],
//   role: [2, 'author']
// };

const person = {
  name: 'Jesse',
  age: 31,
  hobbies: ['Video Games', 'Martial Arts'],
  role: 0
};

// person.role.push('admin');
// person.role[1] = 10;

// person.role = [0, 'admin', 'user'];

let favoriteActivities: string[];
favoriteActivities = ['Sports'];

console.log(person.name);

for (const hobby of person.hobbies) {
  console.log(hobby.toUpperCase());
  // console.log(hobby.map()); // !! ERROR !!
}