let test_arr_1 = [1, 2, 0, 4, 5];
let test_arr_2 = [8, 2, 3, 4, 5];
let test_arr_3 = [1, 2, 8, 4, 5];
let test_arr_4 = [1, 3, 3, 4, 8];
//============================TDD part==================================

const a = parseInt(prompt("Please enter a number", 0));
const b = parseInt(prompt("Please enter a number", 0));
const c = parseInt(prompt("Please enter a number", 0));
const d = parseInt(prompt("Please enter a number", 0));
const e = parseInt(prompt("Please enter a number", 0));


const arr = [a, b, c, d, e];

const sum = (arr) => {
  let flag = 0;
  for (value of arr) {
    flag += Number(value);
  }
  return flag;
};

// console.log(sum(test_arr_1));
// console.log(sum(test_arr_2));
// console.log(sum(test_arr_3));
// console.log(sum(test_arr_4));

const Ans1_min = (arr) => {
  let arrlen = arr.length;
  let flag = arr[0];
  for (let i = 0; i < arrlen; i++) {
    if (arr[i] < flag) {
      flag = arr[i];
    }
  }
  return flag;

};

let ans1 = document.getElementById("ans1")
ans1.innerText= Ans1_min(arr);

const Ans2_max = (arr) => {
  let arrlen = arr.length;
  let flag = arr[0];
  for (let i = 0; i < arrlen; i++) {
    if (arr[i] > flag) {
      flag = arr[i];
    }
  }
  return flag;
};
let ans2 = document.getElementById("ans2")
ans2.innerText= Ans2_max(arr);


function Ans3(arr) {
  let arrlen = arr.length;
  // console.log("array length",arrlen)
  var flag_For_neg = 0;
  var flag_For_0 = 0;
  var flag_For_pos = 0;
  //   console.log("beforeloop", flag_For_neg, flag_For_0, flag_For_pos);

  for (let i = 0; i < arrlen; i++) {
    const flag = Number(arr[i]);

    if (flag < 0) {
      console.log(arr[i]);
      ++flag_For_neg;
    } else if (flag == 0) {
      console.log(arr[i]);
      ++flag_For_0;
    } else if (flag > 0) {
      console.log(arr[i]);
      ++flag_For_pos;
    }
  }
  //   console.log("afterloop", flag_For_neg, flag_For_0, flag_For_pos);
  let res = [flag_For_neg / arrlen, flag_For_0 / arrlen, flag_For_pos / arrlen];
  return res;
}

let ans = Ans3(arr) 
let ans3 = document.getElementById("ans3")
let r1 = document.createElement("p");
r1.innerText= `
The ratio of 0 vals are ${ans[1]}
The ratio of positive vals are ${ans[2]}
The ratio of neg vals are ${ans[0]}`
ans3.appendChild(r1);


const Ans4_a = (arr) => {
    let value = Ans1_min(arr);
    console.log(value, "value from func ans 4 B");
    const indexofvar = arr.indexOf(value);
    console.log(indexofvar, arr);
    arr.splice(indexofvar, 1);
    console.log(arr);
    return sum(arr);
  };
  
  let ans4a = document.getElementById("ans4")
  ans4a.innerText= Ans4_a(arr);
 
  
const Ans4_b = (arr) => {
  let value = Ans2_max(arr);
  console.log(value, "value from func ans 4 B");
  const indexofvar = arr.indexOf(value);
  console.log(indexofvar, arr);
  arr.splice(indexofvar, 1);
  console.log(arr);
  return sum(arr);
};

let ans4b = document.getElementById("ans5")
ans4b.innerText= Ans4_b(arr);




//===============================================test cases======================

// sum 15/20/22/19

// Ans4_b (1) 10
// Ans4_b (1) 14
// Ans4_b (1) 12
// Ans4_b (1) 11
const test = () => {
  console.log(Ans1_min(test_arr_1));
  console.log(Ans1_min(test_arr_2));
  console.log(Ans1_min(test_arr_3));
  console.log(Ans1_min(test_arr_4));

  console.log(Ans2_max(test_arr_1));
  console.log(Ans2_max(test_arr_2));
  console.log(Ans2_max(test_arr_3));
  console.log(Ans2_max(test_arr_4));

  console.log(Ans3(test_arr_1));
  console.log(Ans3(test_arr_2));
  console.log(Ans3(test_arr_3));
  console.log(Ans3(test_arr_4));

  console.log(Ans4_b(test_arr_1));
  console.log(Ans4_b(test_arr_2));
  console.log(Ans4_b(test_arr_3));
  console.log(Ans4_b(test_arr_4));

  console.log(Ans4_a(test_arr_1));
  console.log(Ans4_a(test_arr_2));
  console.log(Ans4_a(test_arr_3));
  console.log(Ans4_a(test_arr_4));
};
