import {formData} from "./shared";
import {toReverse, max} from "./utils";

console.log('Hello');

const form = document.querySelector('form')!;
form.addEventListener('submit', (e) => {
    e.preventDefault();
    const data = formData(form);
    console.log(data);
});
console.log(1)
console.log(toReverse(['212', 'A', 'c', 23]));
console.log(max([0, 23, -21, 0, 0, 221, 213, -213, 2, 0]));
