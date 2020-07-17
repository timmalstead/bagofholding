const space = () => log("---")
const log = (toLog) => console.log(toLog)
const actPrmpt = () => {
  space()
  log("What will you do?")
  space()
}

let act = {}
let items = {}

const bagInv = () => {
  if (Object.keys(items).length) {
    return `The bag currently holds a ${Object.keys(items)
      .toString()
      .replace(/,/g, " and a ")}.`
  } else {
    return "There is nothing in the bag right now."
  }
}

const game = {
  logActions: false,
  switchLog(action) {
    this.logActions = !this.logActions
    action()
    this.logActions = !this.logActions
    return ""
  },
  start() {
    log("Welcome to Bag of Holding")
    space()
    log("type game.cmds() at any time to see available commands")
    space()
    if (bag.level) {
      log("You already have a game in progress.")
      space()
      return eval(`${[bag.level]}.start()`)
    } else {
      bag.clear()
      return log(
        "Would you like to play the game with illustrations? Please type illu(true) or illu(false)"
      )
    }
  },
  cmds() {
    let commands
    Object.keys(items).length
      ? (commands = `
    Available Commands and Inventory:

    ${bagInv()}

    act.
        ${Object.keys(act).toString().replace(/,/g, "()\n        ")}()

    game.
        cmds() : lists game controls
        end() : ends session and erases game
`)
      : (commands = `
    Available Commands:

    act.
        ${Object.keys(act).toString().replace(/,/g, "()\n        ")}()

    game.
        cmds() : lists game controls
        end() : ends session and erases game
`)
    if (game.logActions) {
      log(commands)
    } else {
      return commands
    }
  },
  end() {
    bag.clear()
    return "Don't quite have what it takes, eh? Well, maybe come back and try again sometime."
  },
}

game.start()
