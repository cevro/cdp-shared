"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const turnouts_1 = require("@app/consts/objects/zst/pu/turnouts");
const turnouts = Object.assign({}, turnouts_1.default);
function getTurnoutDefinition(key) {
    return turnouts[key];
}
exports.getTurnoutDefinition = getTurnoutDefinition;
function getAllTurnouts() {
    const turnoutsArray = [];
    for (const index in turnouts) {
        if (turnouts.hasOwnProperty(index)) {
            turnoutsArray.push(turnouts[index]);
        }
    }
    return turnoutsArray;
}
exports.getAllTurnouts = getAllTurnouts;
