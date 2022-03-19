var sokcetUtility = require("../utility/socketUtility");



class resultController {
    constructor() {
        this.getResult = this.getResult.bind(this);
        this.getWinner = this.getWinner.bind(this);
    }

    async getResult(roomID) {
        var choice1 = "";
        var choice2 = "";
        var players = [];
        var getWinner = await this.getWinner(choice1, choice2);
        var getRoom = await this.getRoomID(roomID, players, getWinner);

    }

    async getRoomID(roomID, players, getWinner) {
        sokcetUtility = socketUtility.socketClass.socketFunction(roomID, players, getWinner);
    }

    async getWinner(p, c) {
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
        return "That's not a valid choice";
    }
}
module.exports = new resultController;