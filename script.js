let arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
function getSum1(arr1) {
    let num = arr1.pop();
    if (arr1.length === 0) {
        return num;
    } else {
        return (num += getSum1(arr1));
    }
}
console.log (getSum1(arr1));
let arr2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
function getSum2(arr2){
    let num = arr2.pop();
    return arr2.length === 0 ? num : (num += getSum2(arr2));
}
console.log (getSum2(arr2));

function deepCount(arr) {
    let count = arr.length;
    for (const item of arr) {
        Array.isArray(item) ? (count += deepCount(item)) : count;
    } return count;
}
function deepCount(arr) {
    let count = arr.length;
    if (count === 0) {
        return count;
    } else {
        for (const item of arr) {
            if (Array.isArray(item)){
                count += deepCount(item);
            }
        }
        return count;
    }
}
console.log(deepCount([]));
const employees = {
    development: {
      backend: [
        { name: "Mike", salary: 2000 },
        { name: "Nikola", salary: 2500 },
      ],
      frontend: [
        { name: "Artem", salary: 3000 },
        { name: "Alex", salary: 2700 },
      ],
    },
    sales: {
      marketing: {
        internet_marketers: [
          { name: "Nina", salary: 1000 },
          { name: "Olena", salary: 1300 },
        ],
        promotion: [
          { name: "Oleg", salary: 1400 },
          { name: "Masha", salary: 1700 },
        ],
      },
      sellers: [
        { name: "Max", salary: 900 },
        { name: "Donald", salary: 700 },
        { name: "Joe", salary: 1100 },
      ],
    },
    designer: [{ name: "Kate", salary: 1800 }],
  };

function takeSumSalary() {
    let sum = 0;
    return function sumSallary(obj) {
      for (let key in obj) {
        if (Array.isArray(obj[key])) {
          obj[key].forEach((employee) => (sum += employee.salary));
        } else {
          sumSallary(obj[key]);
        }
      }
      return(sum)
    }
  }
  
  let salary = takeSumSalary();
  salary(employees)
  
  console.log(salary());

let arr3 = [2,15,7,3];
let arr4 = [9,3,17,12,4,8];
let arr5 = [6,11,16,15,11];

let numbers = [...arr3, ...arr4, ...arr5];
let maxNumber = Math.max(...numbers)

console.log(maxNumber);