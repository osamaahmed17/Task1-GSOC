function getWinner(p, c) {
    if (p === c) {
        return "draw";
    } else if (p === "rock") {
        if (c === "paper") {
            return "2";
        } else {
            return "1";
        }
    } else if (p === "paper") {
        if (c === "scissors") {
            return "2";
        } else {
            return "1";
        }
    } else if (p === "scissors") {
        if (c === "rock") {
            return "2";
        } else {
            return "1";
        }
    }
}