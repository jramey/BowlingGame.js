function Game()
{
    var rolls = [];
    var currentRoll = 0; 

    this.roll = function roll(pins) {
        rolls[currentRoll] = pins;
        currentRoll++;
    }

    this.getScore = function getScore() {
        var score = 0;
        var i = 0;

        for (var frame = 0; frame < 10; frame++) {
            if (isStrike(i)) {
                score += 10 + getStikeBonus(i);
                i++;
            } else if (isSpare(i)) {
                score += 10 + getSpareBonus(i);
                i += 2;
            } else {
                score += rolls[i] + rolls[i + 1];
                i += 2;
            }            
        }

        return score;
    }

    var isStrike = function isStrike(frameIndex) {
        return rolls[frameIndex] == 10;
    }

    var getStikeBonus = function getStikeBonus(frameIndex) {
        return rolls[frameIndex + 1] + rolls[frameIndex + 2];
    }

    var isSpare = function isSpare(frameIndex) {
        return rolls[frameIndex] + rolls[frameIndex + 1] == 10;
    }

    var getSpareBonus = function getSpareBonus(frameIndex) {
        return rolls[frameIndex + 2];
    }
}
