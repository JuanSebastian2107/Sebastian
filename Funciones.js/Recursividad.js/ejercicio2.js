function number(num) {
if (num == 0) {
 return num;
}
console.log(num);
number(num - 1);
}
number();
