const winCondition = function () {
  if ($('#drawing1') && $('#drawing2') && $('#drawing3') === 'X') {
    alert("WINNER!")
  }
};
$(document).ready(function () {
// const sq1 = $('1');
// const sq2 = $('2');
// const sq3 = $('3');
// const sq4 = $('4');
// const sq5 = $('5');
// const sq6 = $('6');
// const sq7 = $('7');
// const sq8 = $('8');
// const sq9 = $('9');
let board;
const player1 = 'X'; //can replace later with images/whatever
const player2 = 'O';
const winCombinations = [ //combinations of winning directions
  [$('#sq1'), $('#sq2'), $('#sq3')],
  [$('#sq4'), $('#sq5'), $('#sq6')],
  [$('#sq7'), $('#sq8'), $('#sq9')],
  [$('#sq1'), $('#sq4'), $('#sq7')],
  [$('#sq2'), $('#sq5'), $('#sq8')],
  [$('#sq3'), $('#sq6'), $('#sq9')],
  [$('#sq1'), $('#sq5'), $('#sq9')],
  [$('#sq3'), $('#sq5'), $('#sq7')],
  // [1,2,3],
  // [4,5,6],
  // [7,8,9],
  // [1,4,7],
  // [2,5,8],
  // [3,6,9],
  // [1,5,9],
  // [3,5,7]
];
// const cells = $('.cell');
let counter = 0;
//
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
// };

$('#sq1').on('click', function() {
  if (counter % 2 === 0) {
    $('#drawing1').text(`${player1}`);
  } else if (counter % 2 != 0) {
    $('#drawing1').text(`${player2}`)
  }
  $('#drawing1').css('display','block')
  counter++
  winCondition();
});

$('#sq2').on('click', function() {
  if (counter % 2 === 0) {
    $('#drawing2').text(`${player1}`);
  } else if (counter % 2 != 0) {
    $('#drawing2').text(`${player2}`)
  }
  $('#drawing2').css('display','block')
  counter++
  winCondition();
});

$('#sq3').on('click', function() {
  if (counter % 2 === 0) {
    $('#drawing3').text(`${player1}`);
  } else if (counter % 2 != 0) {
    $('#drawing3').text(`${player2}`)
  }
  $('#drawing3').css('display','block')
  counter++
  winCondition();
});

$('#sq4').on('click', function() {
  if (counter % 2 === 0) {
    $('#drawing4').text(`${player1}`);
  } else if (counter % 2 != 0) {
    $('#drawing4').text(`${player2}`)
  }
  $('#drawing4').css('display','block')
  counter++
});

$('#sq5').on('click', function() {
  if (counter % 2 === 0) {
    $('#drawing5').text(`${player1}`);
  } else if (counter % 2 != 0) {
    $('#drawing5').text(`${player2}`)
  }
  $('#drawing5').css('display','block')
  counter++
});

$('#sq6').on('click', function() {
  if (counter % 2 === 0) {
    $('#drawing6').text(`${player1}`);
  } else if (counter % 2 != 0) {
    $('#drawing6').text(`${player2}`)
  }
  $('#drawing6').css('display','block')
  counter++
});

$('#sq7').on('click', function() {
  if (counter % 2 === 0) {
    $('#drawing7').text(`${player1}`);
  } else if (counter % 2 != 0) {
    $('#drawing7').text(`${player2}`)
  }
  $('#drawing7').css('display','block')
  counter++
});

$('#sq8').on('click', function() {
  if (counter % 2 === 0) {
    $('#drawing8').text(`${player1}`);
  } else if (counter % 2 != 0) {
    $('#drawing8').text(`${player2}`)
  }
  $('#drawing8').css('display','block')
  counter++
});

$('#sq9').on('click', function() {
  if (counter % 2 === 0) {
    $('#drawing9').text(`${player1}`);
  } else if (counter % 2 != 0) {
    $('#drawing9').text(`${player2}`)
  }
  $('#drawing9').css('display','block')
  counter++
});

$('#reset-button').on('click', function () {
  $('span').css('display','none')
});


//game logic
//restart function
//animations

});
