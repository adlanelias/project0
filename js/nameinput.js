      // Sweetalert input alerts to enter players' names
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
            swal.showInputError("Stop leaving it blank ye twat");
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
            swal.showInputError("Stop leaving it blank ye twat");
            return false
        }
        swal("Let the games begin," + inputValue + " & " + inputValueTwo);
        $(".player-one").text(inputValue);
        $(".player-two").text(inputValueTwo);

    });
});
