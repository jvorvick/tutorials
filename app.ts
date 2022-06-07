// const person: {
//   name: string;
//   age: number;
// } = {
const person = {
  name: 'Jesse',
  age: 31,
  hobbies: ['Video Games', 'Martial Arts']
};

let favoriteActivities: string[];
favoriteActivities = ['Sports'];

console.log(person.name);

for (const hobby of person.hobbies) {
  console.log(hobby.toUpperCase());
  // console.log(hobby.map()); // !! ERROR !!
}