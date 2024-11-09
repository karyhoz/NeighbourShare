
// let x = 10
// let y = 5 

// console.log(x % y)
// console.log(++x)
// console.log(--y)

// console.log(x != y)

// const isValidNumber = x > 8 && 8 > y
// console.log(isValidNumber)

// console.log('Bayo ' + 'Adeniyi')

// // tenarry operator
// const isEven = 10 % 2 === 0 ? 'Number is even' : 'Number is odd'
// console.log(isEven)


// // implicit conversion

// console.log(true + '6')
// console.log('5' - '9')


// // explicit conversion
// console.log(Number('5'))
// console.log(parseFloat('3.58'))
// console.log(parseInt(8))
// console.log(String('NAN'))
// console.log(Boolean(10))

// // Equality
// const var1 = 'test'
// const var2 = 'test'

// console.log( var1 == var2)

// // conditional statements
// const num = 0

// if(num > 0){
//     console.log('Number is positive')
// } else if (num < 0) {
//     console.log('Number is negative')
// } else {
//     console.log('Number is zero')
// }

// const color = 'red'

// switch(color){
//     case 'red':
//         console.log('color is red')
//         case 'pink':
//             console.log('color is pink')
//             case 'yellow':
//                 console.log('color is yellow')
//                 default:
//                     console.log('value is invalid')
// }

// let page1 = 100
// let page2 = 125
// let page3 = 190

// if (page1 > 100) {
//     console.log('page overrun');
// } else if (page1 <= 90) {
//     console.log('page is short')
// } else{
//     console.log('page is filled')
// } 

// looping-code========

// for loop---

// for  (let i = 1; i <= 5; i++) {
//     console.log('Iteration number' +i)
// }

// while  loop--

// let i = 1
// while (i <= 5) {
//     console.log('Iteration number ' + i)
//     i++
// }

// do..while..loop--

// let i = 6
// do{
//     console.log('iteration number ' + i)
//     i++
// }while (i <= 5)

    // for..of loop

    // const numArray = [1, 2, 3, 4, 5]

    // for (const num of numArray) {
    //     console.log('iteration number ' + num )
    // }

    // conditional-if/else
    
//     let totalPrice = 19;
//     let shippingCost;

//     if (totalPrice > 20){
//         console.log('shippingCost = 0')
//     }else{
// console.log('shippingCost = 5')}

//     if (totalPrice <= 20) {
//         shippingCost =5
//     }else {
//         shippingCost = 0
//     }

//     if (totalPrice <= 10) {
//         console.log(shippingCost = 5)
//     }else if (totalPrice <= 20) {
//         console.log(shippingCost = 3)
//     } else {
//         console.log(shippingCost = 0)
//     }

//     let userMembership;

//     if (userMembership !== 'premium') {
//         console.log('user not premium')
//     } else {
//         console.log('user is premium')
//     }

//     // logical-operator
//     let todayDate;
//     let birthdayDate;
//     let birthdayDisplay;

//     if (todayDate === birthdayDate && birthdayDisplay === true)
//     {
//         console.log('display birth date')
//     } else {
//         console.log('none')
//     }

    // function

    // function greet (user){
    //     console.log('Good morning ' + user)
    // }

    // greet('Karyhorz')
    // greet('Captain')
    // greet('privats')

    // addition--function

    // function add(a, b){ 
    //     return a + b
    // }

    // const sum = add(5,10)
    // console.log(sum)


    // // arrow--function

    // const arrowsum = (a, b) => {
    //     return  a +  b
    // } 


    function calculateShippingCost (){
        let totalPrice;
        if (totalPrice <= 10) {
            shippingCost = 5
        } else if (totalPrice <= 20) {
            shippingCost = 3
        } else {
            shippingCost = 0
        }
    } 
    calculateShippingCost()

     