var game;

module("Bowling Game", {
    setup: function () {
        game = new Game();
    }
});

test("Gutter Game", function () {
    rollMany(20, 0);
    equal(game.getScore(), 0, "Gutter Game Passed!!")
});

test("All Ones", function () {
    rollMany(20, 1);
    equal(game.getScore(), 20, "All Ones Game Passed!!")
});

test("One Spare", function () {
    game.roll(5);
    game.roll(5);
    game.roll(3);
    rollMany(17, 0);
    equal(game.getScore(), 16, "One Spare Game Passed!!")
});

test("One Strike", function () {
    game.roll(10);
    game.roll(3);
    game.roll(4);
    rollMany(16, 0);
    equal(game.getScore(), 24, "One Strike Game Passed!!")
});

test("Perfect Game", function () {
    rollMany(12, 10);
    equal(game.getScore(), 300, "Perfect Game Passed!!")
});

function rollMany(rolls, pins) {
    for (var i = 0; i < rolls; i++)
        game.roll(pins);
}