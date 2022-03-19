function result(roomID) {
    var winner = getWinner(choice1, choice2);
    io.sockets.to(roomID).emit("result", {
        winner: winner,
        choice1: choice1,
        choice2: choice2
    });
    choice1 = "";
    choice2 = "";
}