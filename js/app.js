const space = () => console.log("---")
const actPrmpt = () => {
  space()
  console.log("What will you do?")
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
    console.log(oldManDark)
    console.log(oldManLight)
    console.log("Welcome to Bag of Holding")
    space()
    console.log("type game.cmds() at any time to see available commands")
    space()
    if (bag.level) {
      console.log("You already have a game in progress.")
      space()
      return eval(`${[bag.level]}.start()`)
    } else {
      bag.clear()
      bag.level = "aFiresideChat"
      return aFiresideChat.start()
    }
  },
  cmds() {
    let commands
    Object.keys(items).length
      ? (commands = `
    Available Commands and Inventory:

    ${bagInv()}

    act.
        ${Object.keys(act)
          .toString()
          .replace(/,/g, "()\n        ")}()

    game.
        cmds() : lists game controls
        end() : ends session and erases game
`)
      : (commands = `
    Available Commands:

    act.
        ${Object.keys(act)
          .toString()
          .replace(/,/g, "()\n        ")}()

    game.
        cmds() : lists game controls
        end() : ends session and erases game
`)
    if (game.logActions) {
      console.log(commands)
    } else {
      return commands
    }
  },
  end() {
    bag.clear()
    return "Don't quite have what it takes, eh? Well, maybe come back and try again sometime."
  }
}

game.start()
