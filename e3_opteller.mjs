// Begin van userInput voorbereiden
import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
import { get } from 'node:http';
const userInput = readline.createInterface({input, output});
// Einde van userInput voorbereiden



// Voeg hier je eigen code in
let dagen = parseFloat(await userInput.question("Geef het aantal dagen: " ))
let uren = parseFloat(await userInput.question("Geef het aantal uren: " ))
let minuten = parseFloat(await userInput.question("Geef het aantal minuten: " ))
let seconden = parseFloat(await userInput.question("Geef het aantal seconden: " ))

let sum = ((dagen*24*60*60) + (uren*60*60) + (minuten*60) + seconden)

console.log("Aantal seconden: " + sum)