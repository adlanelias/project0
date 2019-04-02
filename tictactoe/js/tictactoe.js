let counter = 0;
let square1 = [];
let square2 = [];
let square3 = [];
let square4 = [];
let square5 = [];
let square6 = [];
let square7 = [];
let square8 = [];
let square9 = [];
$(document).ready(function () {
let board;

const player1 = 'X'; //can replace later with images/whatever
const player2 = 'O';
const cells = $('td');
const winCombinations = [ //combinations of winning directions
  [1,2,3],
  [4,5,6],
  [7,8,9],
  [1,4,7],
  [2,5,8],
  [3,6,9],
  [1,5,9],
  [3,5,7]
];

// const turns = function () {
//   for (let i = 0; i < 9; i++) {
//     if (counter % 2 === 0) {
//       // player1
//       counter++;
//     } else if (counter % 2 != 0){
//       // player2
//       counter++;
//     }
//   }
$(cells).on('click', function() {
  if (counter % 2 === 0) {
    $('#drawing').text(`${player1}`);
  } else if (counter % 2 != 0) {
    $('#drawing').text(`${player2}`)
  }
  $('#drawing')
  counter++
})

// $('#sq1').on('click', function() {
//   if (counter % 2 === 0) {
//     $('#drawing1').text(`${player1}`);
//       square1.push('X');
//   } else if (counter % 2 != 0) {
//     $('#drawing1').text(`${player2}`)
//       square1.push('O');
//   }
//   $('#drawing1').css('display','block')
//   counter++
//   winCondition();
//   draw();
// })
//
// $('#sq2').on('click', function() {
//   if (counter % 2 === 0) {
//     $('#drawing2').text(`${player1}`);
//       square2.push('X');
//   } else if (counter % 2 != 0) {
//     $('#drawing2').text(`${player2}`)
//       square2.push('0');
//   }
//   $('#drawing2').css('display','block')
//   counter++
//   winCondition();
//   draw();
// });
//
// $('#sq3').on('click', function() {
//   if (counter % 2 === 0) {
//     $('#drawing3').text(`${player1}`);
//       square3.push('X');
//   } else if (counter % 2 != 0) {
//     $('#drawing3').text(`${player2}`)
//       square3.push('O');
//   }
//   $('#drawing3').css('display','block')
//   counter++
//   winCondition();
//   draw();
// });
//
// $('#sq4').on('click', function() {
//   if (counter % 2 === 0) {
//     $('#drawing4').text(`${player1}`);
//       square4.push('X');
//   } else if (counter % 2 != 0) {
//     $('#drawing4').text(`${player2}`)
//       square4.push('O');
//   }
//   $('#drawing4').css('display','block')
//   counter++
//   winCondition();
//   draw();
// });
//
// $('#sq5').on('click', function() {
//   if (counter % 2 === 0) {
//     $('#drawing5').text(`${player1}`);
//       square5.push('X');
//   } else if (counter % 2 != 0) {
//     $('#drawing5').text(`${player2}`)
//       square5.push('O');
//   }
//   $('#drawing5').css('display','block')
//   counter++
//   winCondition();
//   draw();
// });
//
// $('#sq6').on('click', function() {
//   if (counter % 2 === 0) {
//     $('#drawing6').text(`${player1}`);
//       square6.push('X');
//   } else if (counter % 2 != 0) {
//     $('#drawing6').text(`${player2}`)
//       square6.push('O');
//   }
//   $('#drawing6').css('display','block')
//   counter++
//   winCondition();
//   draw();
// });
//
// $('#sq7').on('click', function() {
//   if (counter % 2 === 0) {
//     $('#drawing7').text(`${player1}`);
//       square7.push('X');
//   } else if (counter % 2 != 0) {
//     $('#drawing7').text(`${player2}`)
//       square7.push('O');
//   }
//   $('#drawing7').css('display','block')
//   counter++
//   winCondition();
//   draw();
// });
//
// $('#sq8').on('click', function() {
//   if (counter % 2 === 0) {
//     $('#drawing8').text(`${player1}`);
//       square8.push('X');
//   } else if (counter % 2 != 0) {
//     $('#drawing8').text(`${player2}`)
//       square8.push('O');
//   }
//   $('#drawing8').css('display','block')
//   counter++
//   winCondition();
//   draw();
// });
//
// $('#sq9').on('click', function() {
//   if (counter % 2 === 0) {
//     $('#drawing9').text(`${player1}`);
//       square9.push('X');
//   } else if (counter % 2 != 0) {
//     $('#drawing9').text(`${player2}`)
//       square9.push('O');
//   }
//   $('#drawing9').css('display','block')
//   counter++
//   winCondition();
//   draw();
// });
//
// $('#reset-button').on('click', function () {
//   $('span').text('');
//   counter = 0;
//   square1 = [];
//   square2 = [];
//   square3 = [];
//   square4 = [];
//   square5 = [];
//   square6 = [];
//   square7 = [];
//   square8 = [];
//   square9 = [];
// });

// const winCondition = function () {
//
//   if (square1[0] === 'X' && square2[0] === 'X' && square3[0] === 'X') {
//     alert("X IS THE WINNER!")
//   } else if (square1[0] === 'O' && square2[0] === 'O' && square3[0] === 'O') {
//     alert("O IS THE WINNER!")
//   }
//
//   if (square4[0] === 'X' && square5[0] === 'X' && square6[0] === 'X') {
//     alert("X IS THE WINNER!")
//   } else if (square4[0] === 'O' && square5[0] === 'O' && square6[0] === 'O') {
//     alert("O IS THE WINNER!")
//   }
//
//   if (square7[0] === 'X' && square8[0] === 'X' && square9[0] === 'X') {
//     alert("X IS THE WINNER!")
//   } else if (square7[0] === 'O'  && square8[0] === 'O'  && square9[0] === 'O') {
//     alert("O IS THE WINNER!")
//   }
//
//   if (square1[0] === 'X' && square4[0] === 'X' && square7[0] === 'X') {
//     alert("X IS THE WINNER!")
//   } else if (square1[0] === 'O'  && square4[0] === 'O'  && square7[0] === 'O') {
//     alert("O IS THE WINNER!")
//   }
//
//   if (square2[0] === 'X' && square5[0] === 'X' && square8[0] === 'X') {
//     alert("X IS THE WINNER!")
//   } else if (square2[0] === 'O' && square5[0] === 'O' && square8[0] === 'O') {
//     alert("O IS THE WINNER!")
//   }
//
//   if (square3[0] === 'X' && square6[0] === 'X' && square9[0] === 'X') {
//     alert("X IS THE WINNER!")
//   } else if (square3[0] === 'O'  && square6[0] === 'O'  && square9[0] === 'O') {
//     alert("O IS THE WINNER!")
//   }
//
//   if (square1[0] === 'X' && square5[0] === 'X' && square9[0] === 'X') {
//     alert("X IS THE WINNER!")
//   } else if (square1[0] === 'O'  && square5[0] === 'O'  && square9[0] === 'O') {
//     alert("O IS THE WINNER!")
//   }
//
//   if (square3[0] === 'X' && square5[0] === 'X' && square7[0] === 'X') {
//     alert("X IS THE WINNER!")
//   } else if (square3[0] === 'O'  && square5[0] === 'O'  && square7[0] === 'O') {
//     alert("O IS THE WINNER!")
//   }
//
// };

// const draw = function () {
//   if (square1.length === 1 && square2.length === 1 && square3.length === 1 && square4.length === 1 && square5.length === 1 && square6.length === 1 && square7.length === 1 && square8.length === 1 && square9.length === 1) {
//     alert(`Game is a draw`);
//   }
// };

//game logic
//restart function
//animations

});
