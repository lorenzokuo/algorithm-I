var x = [1,2,3,4,5,10]
for(var i=0; i<5; i++){
	console.log(i);
}
/*
T-diagram
x=[1,2,3,4,5,10]
i=0,1,2,3,4,5

print
0,1,2,3,4
*/

var x = [1,2,3,4,5,10]
for(var i=0; i<5; i++){
	i=i+1;
	console.log(i);
}
/*
T-diagram
x=[1,2,3,4,5,10]
i=0,1,2,3,4,5,6

print
1,3,5
*/

var x = [1,2,3,4,5,10]
for(var i=0; i<5; i++){
	i=i+3;
	console.log(i);
}
/*
T-diagram
x=[1,2,3,4,5,10]
i=0,3,4,7,8

print
3,7
*/

function y(num1, num2){
	return num1+num2;
}
console.log(y(2,3))
console.log(y(3,5))
/*
T-diagram
num1=2,3
num2=3,5
y()=5,8

print
5,8
*/

function y(num1, num2){
   console.log(num1);   
   return num1+num2;
}
console.log(y(2,3))
console.log(y(3,5))
/*
T-diagram
num1=2,3
num2=3,5
y()=5,8

print
2,3
*/

a = 15;
console.log(a);
function y(a){
   console.log(a);   
   return a;
}
b = y(10);
console.log(b);
/*
T-diagram
a=15
b=10
y()=10

print
15,10
*/

a = 15;
console.log(a);
function y(a){
   console.log(a);   
   return a*2;
}
b = y(10);
console.log(b);
/*
T-diagram
a=15
b=20
y()=20

print
15,20
*/