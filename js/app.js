const bag = window.localStorage

const space = () => console.log("---")
const actPrmpt = () => {
  space()
  console.log("What will you do?")
  space()
}

let act = {}
let items = {
  inv() {
    if (Object.keys(this).length > 1) {
      return `The bag currently holds ${Object.keys(this)
        .filter(item => item !== "inv")
        .toString()
        .replace(/,/g, " and a ")}`
    } else {
      return "There is nothing in the bag right now."
    }
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
    bag.clear()
    console.log("Welcome to Bag of Holding")
    space()
    console.log("type game.cmds() at any time to see available commands")
    space()
    if (bag.level) {
      console.log("You already have a game in progress.")
      space()
      return eval(`${[bag.level]}.start()`)
    } else {
      bag.level = "aFiresideChat"
      return aFiresideChat.start()
    }
  },
  cmds() {
    const commands = `
    Available Commands:

    act.
        ${Object.keys(act)
          .toString()
          .replace(/,/g, "()\n        ")}()

    game.
        cmds() : lists game controls
        end() : ends session and erases game
`
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
