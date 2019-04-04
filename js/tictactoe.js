$(document).ready(function() {

      // Sweetalert for player names
        swal({
        title: "Welcome to Tic-Tac-Toe",
        text: "Player One, please enter your name.",
        type: "input",
        showCancelButton: false,
        closeOnConfirm: false,
        animation: "slide-from-top",
        inputPlaceholder: "Write name"
    }, function(inputValue) {
        if (inputValue === false) return false;
        if (inputValue === "") {
            swal.showInputError("Please enter your name");
            return false
        }
           swal({
        title: "Welcome to Tic-Tac-Toe",
        text: "Player Two, please enter your name.",
        type: "input",
        showCancelButton: false,
        closeOnConfirm: false,
        animation: "slide-from-top",
        inputPlaceholder: "Write name"
    }, function(inputValueTwo) {
        if (inputValueTwo === false) return false;
        if (inputValueTwo === "") {
            swal.showInputError("Please enter your name");
            return false
        }
        swal("Let the games begin, " + inputValue + " & " + inputValueTwo);
        $(".player-one").text(inputValue);
        $(".player-two").text(inputValueTwo);

    });
});

    //Variables
    let $gameCells = $('.cell');
    let moves = ["", "", "", "", "", "", "", "", ""]
    let count = 0;
    let turn = 'X';
    let winner = null;
    let xWins = 0;
    let oWins = 0;
    let tie = 0;

    //Start game function, adds to counter and tracks turns
    function startGame() {
        $($gameCells).on('click', function() {
            $(this).html(turn);
            moves[this.id] = turn;
            count++;
            if (count % 2 === 0) {
                turn = 'X'; //X turn
                checkWinner('O');
            } else {
                turn = 'O'; //O turn
                checkWinner('X');
            }
        });
        console.log(moves, turn, count);
    }

    scoreBoard();
    startGame();

    //Scoreboard to track wins
    function scoreBoard() {
        $('.playerX').html(xWins);
        $('.playerO').html(oWins);
        $('.tie').html(tie);
    }

    //Reset the board
    function resetBoard() {
        $gameCells.removeClass('won');
        $gameCells.html('');
        winner = 'null';
        moves = ["", "", "", "", "", "", "", "", ""];
        turn = 'X';
        count = 0;
    }

    //Button for new game - basically a reset
    $('#newGame').click(function() {
        $(this).on();
        resetBoard();
        startGame();
        console.log(moves, turn, count);
    });

    //Button for resetting the score
    $('#resetScore').click(function() {
        $(this).on();
        winner = null;
        xWins = 0;
        oWins = 0;
        tie = 0;
        scoreBoard();
    });

    //Check winner function and adds to score
    function checkWinner(player) {

        //score keeper
        function score() {
            if (winner === 'X') {
                xWins++;
            } else if (winner === 'O') {
                oWins++;
            } else {
                tie++;
            }
        }

        // checks to see if there is a winner or a draw
        if (moves[0] === player && moves[1] === player && moves[2] === player) {
            $('#0, #1, #2').addClass('won');
            swal('Game Over!', 'Player ' + player + ' wins!', 'success');
            winner = player;
            score();
            scoreBoard();
            $($gameCells).off('click');
        } else if (moves[3] === player && moves[4] === player && moves[5] === player) {
            $('#3, #4, #5').addClass('won');
            swal('Game Over!', 'Player ' + player + ' wins!', 'success');
            winner = player;
            score();
            scoreBoard();
            $($gameCells).off('click');
        } else if (moves[6] === player && moves[7] === player && moves[8] === player) {
            $('#6, #7, #8').addClass('won');
            swal('Game Over!', 'Player ' + player + ' wins!', 'success');
            winner = player;
            score();
            scoreBoard();
            $($gameCells).off('click');
        } else if (moves[0] === player && moves[3] === player && moves[6] === player) {
            $('#0, #3, #6').addClass('won');
            swal('Game Over!', 'Player ' + player + ' wins!', 'success');
            winner = player;
            score();
            scoreBoard();
            $($gameCells).off('click');
        } else if (moves[1] === player && moves[4] === player && moves[7] === player) {
            $('#1, #4, #7').addClass('won');
            swal('Game Over!', 'Player ' + player + ' wins!', 'success');
            winner = player;
            score();
            scoreBoard();
            $($gameCells).off('click');
        } else if (moves[2] === player && moves[5] === player && moves[8] === player) {
            $('#2, #5, #8').addClass('won');
            swal('Game Over!', 'Player ' + player + ' wins!', 'success');
            winner = player;
            score();
            scoreBoard();
            $($gameCells).off('click');
        } else if (moves[0] === player && moves[4] === player && moves[8] === player) {
            $('#0, #4, #8').addClass('won');
            swal('Game Over!', 'Player ' + player + ' wins!', 'success');
            winner = player;
            score();
            scoreBoard();
            $($gameCells).off('click');
        } else if (moves[2] === player && moves[4] === player && moves[6] === player) {
            $('#2, #4, #6').addClass('won');
            swal('Game Over!', 'Player ' + player + ' wins!', 'success');
            winner = player;
            score();
            scoreBoard();
            $($gameCells).off('click');
        } else if (count === 9) {
            sweetAlert("Game over!", "It's a tie", "error");
            score();
            scoreBoard();
            $($gameCells).off('click');
        }
    }

//somewhat hardcoded, need to think of an algorithm to make upgrades to the game


});
