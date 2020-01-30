const aFiresideChat = {
  didRun: false,
  didLie: false,
  start() {
    console.log("######################")
    console.log("Part One: A Fireside Chat")
    console.log("######################")
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
    act = {
      runToLight: () => this.enterCamp(),
      runFromLight: () => run()
    }
    actPrmpt()
    return game.switchLog(game.cmds)
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
      `${oldMan} produces a wooden bowl and ladel, seemingly from nowhere, and in one smooth motion scoops a generous portion of stew into the bowl and tosses it to you underhanded over the fire. You'd probably admire the grace and fluidity of it all if you weren't suddenly deathly afraid of molten hot stew splashing on you. Weren't you going to do your business first? Whatever that is.`
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
      `'Veggies, goatmeal n' some other stuff' says ${oldMan}. It looks like he's eaten almost his entire bowl.`
    )
    console.log("Goatmeal? Surely he must have meant oatmeal right?")
    console.log(
      "You decide you don't care as you wolf down the bowl of stew, and then a second one afterwards."
    )
    space()
    return this.downToBusinessFinally(name, oldMan)
  },
  downToBusinessFinally(name, oldMan) {
    if (this.didRun) {
      console.log(
        "As you eat, the soreness from your muscles numbs and you begin to feel much better."
      )
    }
    console.log(
      `After the stew is gone, you and ${oldMan} sit in silence for a time.`
    )
    console.log("After a bit, he breaks the silence with a loud belch.")
    console.log("'BRRRAAAAAAAPPPP'")
    console.log("'Well, I suppose we should get down to it then' he says.")
    console.log(
      "'I was asked to give you a certain item, yes a VERY certain item. It's...'"
    )
    console.log("Certainly...an item.")
    console.log(
      `'You've forgotten what it is, haven't you?' you ask. ${oldMan}'s dithering, so annoying just a few minutes ago, is much more tolerable with a full belly.'`
    )
    console.log(
      `'No, No. I've got it right around here somewhere' ${oldMan} says as he begins to root around in a gunny sack placed just behind the log, in such a way that you could not see it previously.`
    )
    console.log("'That must be where he kept the bowl and ladle' you think.")
    getInitialItems()
    console.log(
      `He roots around in the bag a bit, tossing out a few items on the ground, including a ${
        Object.keys(items)[2]
      }, a ${Object.keys(items)[1]} and what appears to be a ${
        Object.keys(items)[0]
      }.`
    )
    console.log(
      "At length the old man finished his search and said 'Ah yes!, I knew I had it here'."
    )
    console.log(
      `${oldMan} moves in front of you, still sitting on the log, clears his throat and says'Here we are ${name}, one very special bag'. In his hands right hand he is holding a decidedly un-special looking canvas drawstring bag, about eight inches wide by ten inches long, cinched with rawhide strinps and with a leather loop to attach it to a belt.`
    )
    console.log(
      "'I hope you'll pardon me for saying so' you say 'But there does't seem to be much of anything special about that bag.'"
    )
    console.log(
      "'It's very special'! the old man says, seemingly hurt by your flippance. 'Not that you deserve it, but I'll give you a demonstration'."
    )
    console.log(
      `In what seems to be becoming a pattern, you have no idea what ${oldMan} is talking about. Before you can even ask him what he means by it, he has stuffed the ${
        Object.keys(items)[1]
      } into the bag and is reaching toward the ${
        Object.keys(items)[2]
      }. That's not a big deal, but when he stuffs the nearly 5 foot long ${
        Object.keys(items)[0]
      } into the small bag, you are a bit surprised.`
    )
    console.log(
      "Knocked out of your creeping food coma by the surprise, you stammer 'How did you do that'?"
    )
    console.log(
      `${oldMan} shrugs and says, simply 'I told you that the bag was special. It's a bag of holding. Bigger on the inside than on the outside. Not too many left these days.'`
    )
    console.log("He moves to stand in front of you.")
    console.log(
      `'I was asked to give it to you, ${name}. But before I do, I want to ask you a question: how is it you came to be here? You never did tell me'.`
    )
    console.log(
      "'Of course I never told you, you old loon' you think 'this is the first time we've met'!"
    )
    console.log(
      "This is all a bit much. You've just seen something that shouldn't be possible, and you've no memory about how to came to be...wherever you are."
    )
    act = {
      lie: (name, oldMan) => this.lie(name, oldMan),
      tellTheTruth: (name, oldMan) => this.tellTheTruth(name, oldMan)
    }
    actPrmpt()
    return game.switchLog(game.cmds)
  },
  lie(name, oldMan) {
    this.didLie = true
    console.log(
      `You think about it for a moment. You don't know this guy, not really. You don't know how he is going to believe you if you tell him that you have no recollection of how you came to be here. You decide to lie`
    )
    const lie = randomLie()
    console.log(`Better think of something quickly.'${lie}' you blurt out.`)
    console.log(`${oldMan} gets very quiet at this.`)
    console.log(
      "An eerie silence grips the air for what seems like a long time."
    )
    console.log(`Finally, the old man says '${name}, do you think me a fool'?`)
    console.log("I KNOW WHEN I'M BEING LIED TO!!")
    console.log(
      `Once again displaying that uncanny speed of his, ${oldMan} dashes up and clocks you square on the side of the head before you even have a chance to put your fists up.`
    )
    console.log("I DON'T LIKE LIARS!!!")
    console.log(
      "Pain explodes inside your skull and you reel to the side, before collapsing down on the ground"
    )
    console.log(
      "The last thing you remember before blacking out is the distinct feeling that the worst is yet to come."
    )
    return this.end()
  },
  tellTheTruth(name, oldMan) {
    console.log(
      "You remember hearing somewhere that honesty is the best policy."
    )
    console.log(
      "'Well,' you start 'To be honest I don't really know how I came to be here. Before I came to your camp I kind of just found myself standing in the field over there. I'm not sure of anything before that'"
    )
    console.log(`${oldMan} gets very quiet at this.`)
    console.log(
      `Thank you for telling me the truth ${name}. I appreciate honesty.`
    )
    console.log(
      "He stretches out his arm to you 'Here, this belongs to you, and I have a feeling it will come in handy'."
    )
    console.log(`You gladly accept the bag and loop it on your belt.`)
    console.log(
      "He continues 'The fire won't burn down for a while yet, and I've got another bedroll around here somewhere'."
    )
    console.log("He does indeed, and you sleep soundly through the night.")
    return this.end()
  },
  end() {
    bag.level = "aDestinyMostFateful"
    bag.items = JSON.stringify(items)
    bag.lv1didLie = this.didLie
    bag.lv1didRun = this.didRun
    return aDestinyMostFateful.start()
  }
}

const aDestinyMostFateful = {
  //remember that you wake up with the bag on you and the old man gone regardless of other things. probably add the bedroll to the bag as well
  start() {
    items = JSON.parse(bag.items)
    console.log("howdy")
    return "level two"
  }
}
