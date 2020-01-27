const aFiresideChat = {
  run: false,
  lie: false,
  start() {
    console.log("You find yourself in a clearing.")
    console.log(
      "You cannot remember how you got there or how long you have been there."
    )
    console.log("Night is beginning to fall, and it will be cold soon.")
    console.log(
      "You are starting to get hungry, and to be honest you could use a drink."
    )
    console.log(
      "At the far end of the clearing, you see a flicker of orange light."
    )
    console.log("A campfire perhaps? Could be.")
    console.log("The hunger is starting to grow. Soon you will be ravenous.")
    actPrmpt()
    act = {
      runToLight: () => this.enterCamp(),
      runFromLight: () => run()
    }
    game.switchLog(game.cmds)
  },
  run() {
    this.run = true
    console.log("You begin to run, run faster than you ever have before.")
    console.log("You're really making good time.")
    console.log(
      "You fly through the clearing, the long grass softly crunching under your feet"
    )
    console.log("Who can say how long you run?")
    console.log(
      "You run until your lungs burn and your legs feel like lead weights."
    )
    console.log(
      "Finally, you collapse in a heap. You're sweaty, hungry, tired and you feel very, very silly."
    )
    console.log("'This is dumb' you think, 'why am I running from a campfire'?")
    console.log("You slowly make your way back through the clearing.")
    console.log(
      "Luckliy you're not nearly as fast a runner as you thought you were and it shouldn't take too long to reach the camp, and whoever may be there."
    )
    space()
    this.enterCamp()
  },
  enterCamp() {
    if (this.run) {
      console.log("You enter the camp.")
      console.log(
        "You're sore, sweaty and you can't remember a time when you've been more hungry."
      )
    } else {
      console.log(
        "Spurred on by your hunger, you quickly traverse the field and enter the camp."
      )
    }
    console.log(
      "As you draw closer to the fire, you see a hunched figure with its back to you."
    )
    console.log(
      "All in silhouette, you can't tell anything about how the figure might look."
    )
    console.log("Placed on opposite sides of the fire, are two time worn logs.")
    if (this.run) {
      console.log(
        "When you come close enough for your footfalls to be heard, an old man's voice says in a rasping croak 'You certainly took your time didn't you?'"
      )
    } else {
      console.log(
        "As you draw close enough for the figure to be aware of your presence, you hear 'Ah, you're right on time.'"
      )
      console.log(
        "His voice, you're reasonably sure it's a he, sounds like it comes from far, far away."
      )
    }
    console.log(
      "He whirls around, with a speed that belies the age in his voice."
    )
    console.log("You see a wizened, stooping old man. Eighty if he's a day.")
    console.log(
      "Bald-pated, with a few strands of wispy hair desperately clinging to the sides of his skull, two impossibly bushy eyebrows leep from his forehead like agitated caterpillars."
    )
    console.log(
      "Beneath those fuzzy monsters, two watery, sleepy eyes frame a bulbous nose."
    )
    console.log(
      "He smiles and all at once his face is a mass of fine wrinkles. A few teeth are still fighting the good fight in his gummy mouth. Below that, you see a neck with a fleshy wattle that would put any turkey to shame."
    )
    console.log(
      "He wears a thin, threadbare sweater and shabby grey trousers. There's a rip in one of his beaten up canvas shoes."
    )
    if (this.run) {
      console.log(
        "'I prefer it when people keep their appointments promptly' he says, a thick spittle flying with every 'p' sound."
      )
    } else {
      console.log("'I like prompt people, well done.' he says.")
    }
    console.log(
      "'What are you talking about an appointment?' you say 'I've made no appointment'."
    )
    console.log(
      "'Of course you have an appointment, you just haven't made it yet' he quickly replies 'When you do, I'm sure I'll be the first to know'."
    )
    space()
    space()
    space()
    console.log("...This guy may be crazy.")
    space()
    this.sayYourName()
  },
  sayYourName() {
    console.log("The strange man gestures to the logs 'Come, come, sit down!'")
    console.log(
      "As he moves to the far side of the fire, you notice that there is a large copper pot suspended over the blaze. A thick, brown, chunky liquid bubbles in it. Immediately your mouth begins to water."
    )
    console.log(
      "The man's knees pop as he settles down on the ancient trunk. 'Stew should be ready soon, I reckon. Suppose we should get down to business before dinner'."
    )
  },
  lie() {
    return "I don't like liars"
  },
  tellTheTruth() {}
}
