const fs = require('fs')
const { randomInt } = require('crypto')
const readlineSync = require('readline-sync')
const {randomize} = require('./randomize')
const chalk = require('chalk')

let gates = fs.readFileSync('./doors.txt', 'utf-8').split('\n')
let doors = fs.readFileSync('./behinddoor.txt', 'utf-8').split('\n')
randomize(doors)
const n = randomInt(0, 3) // un nombre aléatoire entre 0 et 2

do {
let userInput = readlineSync.keyInSelect(gates,'Please, choose a door between 1 and 3 ')

console.log(`you choose the door ${userInput + 1}`)

let adminChoice = readlineSync.keyInSelect(gates, `Ok, now let's see what's behind one of the 2 other doors`)


if(doors[n] !== 'car' && doors[adminChoice] === 'car') {
 console.log(gates[userInput])
  console.log(`Behind the the doors ${adminChoice + 1} there's a ${doors[n]}`)
}


if(doors[n]  === 'goat') {
  gates[userInput] = doors[n]
  if(readlineSync.keyInYN(`You choose the door ${userInput + 1} would you like to change ?`)) {
    console.log(chalk.green('Congratulation, you"ve won the car'))
  } else {
    console.log(chalk.red('Too bad, the car was behind that doors'))
  }


} else if (doors[n] === 'car'){
  if(readlineSync.keyInYN(`You choose the ${userInput + 1} would you like to change?`)) {
    console.log(chalk.red('Too bad, the car was behind that doors'))
   gates[userInput] = doors[n]
  } else {
    console.log(chalk.green('Congratulation, you"ve won the car'))
  }
  
}

 
}while (readlineSync.keyInYN(`Voulez vous refaire une partie ?`))








