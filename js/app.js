const bag = window.localStorage

const space = () => console.log("---")
const actPrmpt = () => {
  space()
  console.log("What will you do?")
  space()
}

let act = {}
let items = {}

const game = {
  logActions: false,
  switchLog(action) {
    this.logActions = !this.logActions
    action()
    this.logActions = !this.logActions
  },
  start() {
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
        restart() : erases session and restarts game

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
  },
  restart() {
    bag.clear()
    console.log("Restarting...")
    return this.start()
  }
}

game.start()
