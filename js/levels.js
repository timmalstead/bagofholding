const aFiresideChat = {
  didRun: false,
  didLie: false,
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
    this.didRun = true
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
    return this.enterCamp()
  },
  enterCamp() {
    if (this.didRun) {
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
    if (this.didRun) {
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
    if (this.didRun) {
      console.log(
        "'I prefer it when people keep their appointments promptly' he says, a thick spittle flying with every 'p' sound."
      )
    } else {
      console.log(
        "'I like prompt people, well done.' he says. 'Just in time for our appointment'."
      )
    }
    console.log(
      "'What are you talking about an appointment?' you say, 'I've made no appointment'."
    )
    console.log(
      "'Of course you have an appointment, you just haven't made it yet' he quickly replies 'When you do, I'm sure I'll be the first to know'."
    )
    space()
    space()
    space()
    console.log("...this guy may be crazy.")
    space()
    return this.sayYourName()
  },
  sayYourName() {
    console.log("The strange man gestures to the logs 'Come, come, sit down!'")
    console.log(
      "As he moves to the far side of the fire, you notice that there is a large copper pot suspended over the blaze. A thick, brown, chunky liquid bubbles in it. Immediately your mouth begins to water."
    )
    console.log(
      "The man's knees pop as he settles down on the ancient trunk. 'Stew should be ready soon, I reckon. Suppose we should get down to business before dinner'."
    )
    console.log("'Ridiculous' you think, 'That stew is clearly ready NOW!'")
    console.log(
      "Ignoring the now audible rumble in your tum-tum, you gingerly sit on the log opposite the strange man."
    )
    console.log(
      "'What business?' you ask, 'Who are you and what am I doing here'?"
    )
    console.log(
      "The man throws up his hands in a mock gesture of surrender. 'So many questions! So many questions! Let's not get ahead of ourselves. First things first. Yes, first things are usually best done first. So they are, so they are.'"
    )
    console.log(
      "The strange man jabs his bony finger in your direction and says 'And the first thing that we should find out is what we're going to call each other. What's yer, waddaya call it? Yer name?'"
    )
    console.log("HEY! That's an excellent question. What IS your name?")
    act = {
      sayName: name => storeNames(name)
    }
    space()
    return "Please enter act.sayName() with your name between the parentheses, and using quotation marks. For example sayName('Frederick')"
  },
  dinner(name) {
    const oldMan = bag.oldMansName
    console.log(
      `'My name is ${name}' you say calmly. Man, you would REALLY like some of that stew.`
    )
    console.log(
      `'${name.toUpperCase()}?' the old man exclaims, 'What kind of name is that? Me, I'm called ${oldMan} and that's a proper name believe you me.'`
    )
    console.log(
      `'Pfff, ${name}' sniffs ${oldMan} as he stirs the steaming kettle.`
    )
    console.log(
      "'In MY day we had proper names I can tell you, why I remember when...' he mutters to himself as you decide to tune him out."
    )
    console.log(
      "What are you doing here you wonder. How did you get here? What were you doing before you got here?"
    )
    console.log(
      "You realize with some alarm that you don't know the answer to any of those questions."
    )
    console.log(
      `All you can say for sure is that you're ${name} and you're sitting with a crazy man named ${oldMan}, waiting for him to serve dinner.`
    )
    space()
    console.log(
      `Suddenly your reverie is interrupted by ${oldMan} shouting 'DINNER'S READY'!!! at the top of his lungs.`
    )
    console.log("'GIT IT WHILES ITS HOT'!!!")
    console.log(
      `${oldMan} produces a wooden bowl and ladel, seemingly from nowhere, and in one smooth motion scoops a generous portion of stew into the bowl and tosses it to you underhanded over the fire. You'd probably admire the grace and fluidity of it all if you were'nt suddenly deathly afraid of molten hot stew splashing on you. Weren't you going to do your business first? Whatever that is.`
    )
    console.log(
      "'HEY!' you yell, covering your face with one arm and stretching out the other, hoping to bat the bowl out of the air before it gets too close. You need to eat, but you need to not have second degree burns even more."
    )
    console.log(
      "To your amazement, the bowl plops into your waiting hand without so much as a drop of the contents being spilled. You realize that there's a spoon in there too."
    )
    console.log("How did he do that?")
    console.log(
      `'Nice moves' says ${oldMan} sarcastically. He's already going to town on his bowl of stew, eating faster than you have ever seen anyone eat anything...you think.`
    )
    console.log(
      "'Maybe that's the normal speed that people around here eat' you think, as you blow on a biteful of the stew and then shovel it into your mouth."
    )
    console.log(
      "A slightly sweet, earthy taste fills your mouth and it is so, so good. This is literally the best thing you can remember ever having tasted."
    )
    console.log("'What's in this'? you ask after you're finished your bite.")
    console.log(
      `'Veggies, goatmeal n' some other stuff' says ${oldMan}. It looks like he's eaten almost the entire bowl.`
    )
    console.log("Goatmeal? Surely he must have meant oatmeal right?")
    console.log(
      "You decide you don't care as you wolf down the bowl of stew, and then a second one afterwards."
    )
    space()
    return this.downToBusinessFinally(name, oldMan)
  },
  downToBusinessFinally(name, oldMan) {
    return `${name} and ${oldMan}`
  },
  lie() {
    return "I don't like liars"
  },
  tellTheTruth() {}
}

const aFatefulDestiny = {}
