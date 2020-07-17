const aFiresideChat = {
  didRun: false,
  didLie: false,
  start() {
    log("######################")
    log("Part One: A Fireside Chat")
    log("######################")
    space()
    log("You find yourself in a clearing.")
    log(
      "You cannot remember how you got there or how long you have been there."
    )
    log("Night is beginning to fall, and it will be cold soon.")
    log(
      "You are starting to get hungry, and to be honest you could use a drink."
    )
    log("At the far end of the clearing, you see a flicker of orange light.")
    log("A campfire perhaps? Could be.")
    log("The hunger is starting to grow. Soon you will be ravenous.")
    act = {
      runToLight: () => this.enterCamp(),
      runFromLight: () => run(),
    }
    actPrmpt()
    return game.switchLog(game.cmds)
  },
  run() {
    this.didRun = true
    log("You begin to run, run faster than you ever have before.")
    log("You're really making good time.")
    log(
      "You fly through the clearing, the long grass softly crunching under your feet"
    )
    log("Who can say how long you run?")
    log("You run until your lungs burn and your legs feel like lead weights.")
    log(
      "Finally, you collapse in a heap. You're sweaty, hungry, tired and you feel very, very silly."
    )
    log("'This is dumb' you think, 'why am I running from a campfire'?")
    log("You slowly make your way back through the clearing.")
    log(
      "Luckliy you're not nearly as fast a runner as you thought you were and it shouldn't take too long to reach the camp, and whoever may be there."
    )
    space()
    return this.enterCamp()
  },
  enterCamp() {
    if (this.didRun) {
      log("You enter the camp.")
      log(
        "You're sore, sweaty and you can't remember a time when you've been more hungry."
      )
    } else {
      log(
        "Spurred on by your hunger, you quickly traverse the field and enter the camp."
      )
    }
    log(
      "As you draw closer to the fire, you see a hunched figure with its back to you."
    )
    log(
      "All in silhouette, you can't tell anything about how the figure might look."
    )
    log("Placed on opposite sides of the fire, are two time worn logs.")
    if (this.didRun) {
      log(
        "When you come close enough for your footfalls to be heard, an old man's voice says in a rasping croak 'You certainly took your time didn't you?'"
      )
    } else {
      log(
        "As you draw close enough for the figure to be aware of your presence, you hear 'Ah, you're right on time.'"
      )
      log(
        "His voice, you're reasonably sure it's a he, sounds like it comes from far, far away."
      )
    }
    log("He whirls around, with a speed that belies the age in his voice.")
    log("You see a wizened, stooping old man. Eighty if he's a day.")
    log(
      "Bald-pated, with a few strands of wispy hair desperately clinging to the sides of his skull, two impossibly bushy eyebrows leap from his forehead like agitated caterpillars."
    )
    log(
      "Beneath those fuzzy monsters, two watery, sleepy eyes frame a bulbous nose."
    )
    log(
      "He smiles and all at once his face is a mass of fine wrinkles. A few teeth are still fighting the good fight in his gummy mouth. Below that, you see a neck with a fleshy wattle that would put any turkey to shame."
    )
    log(
      "He wears a thin, threadbare sweater and shabby grey trousers. There's a rip in one of his beaten up canvas shoes."
    )
    if (this.didRun) {
      log(
        "'I prefer it when people keep their appointments promptly' he says, a thick spittle flying with every 'p' sound."
      )
    } else {
      log(
        "'I like prompt people, well done.' he says. 'Just in time for our appointment'."
      )
    }
    log(
      "'What are you talking about an appointment?' you say, 'I've made no appointment'."
    )
    log(
      "'Of course you have an appointment, you just haven't made it yet' he quickly replies 'When you do, I'm sure I'll be the first to know'."
    )
    space()
    space()
    space()
    log("...this guy may be crazy.")
    space()
    return this.sayYourName()
  },
  sayYourName() {
    log("The strange man gestures to the logs 'Come, come, sit down!'")
    log(
      "As he moves to the far side of the fire, you notice that there is a large copper pot suspended over the blaze. A thick, brown, chunky liquid bubbles in it. Immediately your mouth begins to water."
    )
    log(
      "The man's knees pop as he settles down on the ancient trunk. 'Stew should be ready soon, I reckon. Suppose we should get down to business before dinner'."
    )
    log("'Ridiculous' you think, 'That stew is clearly ready NOW!'")
    log(
      "Ignoring the now audible rumble in your tum-tum, you gingerly sit on the log opposite the strange man."
    )
    log("'What business?' you ask, 'Who are you and what am I doing here'?")
    log(
      "The man throws up his hands in a mock gesture of surrender. 'So many questions! So many questions! Let's not get ahead of ourselves. First things first. Yes, first things are usually best done first. So they are, so they are.'"
    )
    log(
      "The strange man jabs his bony finger in your direction and says 'And the first thing that we should find out is what we're going to call each other. What's yer, waddaya call it? Yer name?'"
    )
    log("HEY! That's an excellent question. What IS your name?")
    act = {
      sayName: (name) => storeNames(name),
    }
    space()
    if (JSON.parse(bag.illu)) {
      log(oldManIllo)
    }
    return "Please enter act.sayName() with your name between the parentheses, and using quotation marks. For example sayName('Frederick')"
  },
  dinner(name) {
    const oldMan = bag.oldMansName
    log(
      `'My name is ${name}' you say calmly. Man, you would REALLY like some of that stew.`
    )
    log(
      `'${name.toUpperCase()}?' the old man exclaims, 'What kind of name is that? Me, I'm called ${oldMan} and that's a proper name believe you me.'`
    )
    log(`'Pfff, ${name}' sniffs ${oldMan} as he stirs the steaming kettle.`)
    log(
      "'In MY day we had proper names I can tell you, why I remember when...' he mutters to himself as you decide to tune him out."
    )
    log(
      "What are you doing here you wonder. How did you get here? What were you doing before you got here?"
    )
    log(
      "You realize with some alarm that you don't know the answer to any of those questions."
    )
    log(
      `All you can say for sure is that you're ${name} and you're sitting with a crazy man named ${oldMan}, waiting for him to serve dinner.`
    )
    space()
    log(
      `Suddenly your reverie is interrupted by ${oldMan} shouting 'DINNER'S READY'!!! at the top of his lungs.`
    )
    log("'GIT IT WHILES ITS HOT'!!!")
    log(
      `${oldMan} produces a wooden bowl and ladle, seemingly from nowhere, and in one smooth motion scoops a generous portion of stew into the bowl and tosses it to you underhanded over the fire. You'd probably admire the grace and fluidity of it all if you weren't suddenly deathly afraid of molten hot stew splashing on you. Weren't you going to do your business first? Whatever that is.`
    )
    log(
      "'HEY!' you yell, covering your face with one arm and stretching out the other, hoping to bat the bowl out of the air before it gets too close. You need to eat, but you need to not have second degree burns even more."
    )
    log(
      "To your amazement, the bowl plops into your waiting hand without so much as a drop of the contents being spilled. You realize that there's a spoon in there too."
    )
    log("How did he do that?")
    log(
      `'Nice moves' says ${oldMan} sarcastically. He's already going to town on his bowl of stew, eating faster than you have ever seen anyone eat anything...you think.`
    )
    log(
      "'Maybe that's the normal speed that people around here eat' you think, as you blow on a biteful of the stew and then shovel it into your mouth."
    )
    log(
      "A slightly sweet, earthy taste fills your mouth and it is so, so good. This is literally the best thing you can remember ever having tasted."
    )
    log("'What's in this'? you ask after you're finished your bite.")
    log(
      `'Veggies, goatmeal n' some other stuff' says ${oldMan}. It looks like he's eaten almost his entire bowl.`
    )
    log("Goatmeal? Surely he must have meant oatmeal right?")
    log(
      "You decide you don't care as you wolf down the bowl of stew, and then a second one afterwards."
    )
    space()
    return this.downToBusinessFinally(name, oldMan)
  },
  downToBusinessFinally(name, oldMan) {
    if (this.didRun) {
      log(
        "As you eat, the soreness from your muscles numbs and you begin to feel much better."
      )
    }
    log(`After the stew is gone, you and ${oldMan} sit in silence for a time.`)
    log("After a bit, he breaks the silence with a loud belch.")
    log("'BRRRAAAAAAAPPPP'")
    log("'Well, I suppose we should get down to it then' he says.")
    log(
      "'I was asked to give you a certain item, yes a VERY certain item. It's...'"
    )
    log("'Certainly...an item.'")
    log(
      `'You've forgotten what it is, haven't you?' you ask. ${oldMan}'s dithering, so annoying just a few minutes ago, is much more tolerable with a full belly.`
    )
    log(
      `'No, No, I didn't. And I've got it right around here somewhere' ${oldMan} says as he begins to root around in a gunny sack placed just behind the log, in such a way that you could not see it previously.`
    )
    log("'That must be where he kept the bowl and ladle' you think.")
    getInitialItems()
    log(
      `He roots around in the bag a bit, tossing out a few items on the ground, including a ${
        Object.keys(items)[2]
      }, a ${Object.keys(items)[1]} and what appears to be a ${
        Object.keys(items)[0]
      }.`
    )
    log(
      "At length the old man finished his search and said 'Ah yes!, I knew I had it here'."
    )
    log(
      `${oldMan} moves in front of you, still sitting on the log, clears his throat and says'Here we are ${name}, one very special bag'. In his right hand he is holding a decidedly un-special looking canvas drawstring bag, about eight inches wide by ten inches long, cinched with rawhide strings and with a leather loop to attach it to a belt.`
    )
    log(
      "'I hope you'll pardon me for saying so' you say 'But there doesn't seem to be much of anything special about that bag.'"
    )
    log(
      "'It's very special'! the old man says, seemingly hurt by your flippance. 'Not that you deserve it, but I'll give you a demonstration'."
    )
    log(
      `In what seems to be becoming a pattern, you have no idea what ${oldMan} is talking about. Before you can even ask him what he means by it, he has stuffed the ${
        Object.keys(items)[1]
      } into the bag and is reaching toward the ${
        Object.keys(items)[2]
      }. That's not a big deal, but when he stuffs the nearly 5 foot long ${
        Object.keys(items)[0]
      } into the small bag, you are a bit surprised.`
    )
    log(
      "Knocked out of your creeping food coma by the surprise, you stammer 'How did you do that'?"
    )
    log(
      `${oldMan} shrugs and says 'I told you that the bag was special. It's a bag of holding. Bigger on the inside than on the outside. Not too many left these days.'`
    )
    log("He moves to stand in front of you.")
    log(
      `'I was asked to give it to you, ${name}. But before I do, I want to ask you a question: how is it you came to be here? You never did tell me'.`
    )
    log(
      "'Of course I never told you, you old loon' you think 'this is the first time we've met'!"
    )
    log(
      "This is all a bit much. You've just seen something that shouldn't be possible, and you've no memory about how you came to be...wherever you are."
    )
    act = {
      lie: () => this.lie(),
      tellTheTruth: () => this.tellTheTruth(),
    }
    actPrmpt()
    return game.switchLog(game.cmds)
  },
  lie() {
    const oldMan = bag.oldMansName
    const name = bag.name
    this.didLie = true
    log(
      `You think about it for a moment. You don't know this guy, not really. You don't know if he is going to believe you if you tell him that you have no recollection of how you came to be here. You decide to lie.`
    )
    const lie = randomLie()
    log(`Better think of something quickly.'${lie}' you blurt out.`)
    log(`${oldMan} gets very quiet at this.`)
    log("An eerie silence grips the air for what seems like a long time.")
    log(`Finally, the old man says '${name}, do you think me a fool'?`)
    log("'I KNOW WHEN I'M BEING LIED TO!!'")
    log(
      `Once again displaying that uncanny speed of his, ${oldMan} dashes up and clocks you square on the side of the head before you even have a chance to put your fists up.`
    )
    log("'I DON'T LIKE LIARS!!!'")
    log(
      "Pain explodes inside your skull and you reel to the side before collapsing down on the ground"
    )
    log(
      "The last thing you remember before blacking out is the distinct feeling that the worst is yet to come."
    )
    return this.end()
  },
  tellTheTruth() {
    const oldMan = bag.oldMansName
    const name = bag.name
    log("You remember hearing somewhere that honesty is the best policy.")
    log(
      "'Well,' you start 'To be honest I don't really know how I came to be here. Before I came to your camp I kind of just found myself standing in the field over there. I'm not sure of anything before that'"
    )
    log(`${oldMan} gets very quiet at this.`)
    log(`'Thank you for telling me the truth ${name}. I appreciate honesty.'`)
    log(
      "He stretches out his arm to you 'Here, this belongs to you, and I have a feeling it will come in handy'."
    )
    log(`You gladly accept the bag and loop it on your belt.`)
    log(
      "He continues 'The fire won't burn down for a while yet, and I think I've got another bedroll around here somewhere'."
    )
    log("He does, and you sleep soundly through the night.")
    return this.end()
  },
  end() {
    act = {}
    bag.level = "aDestinyMostFateful"
    bag.items = JSON.stringify(items)
    bag.lv1didLie = JSON.stringify(this.didLie)
    bag.lv1didRun = JSON.stringify(this.didRun)
    return aDestinyMostFateful.start()
  },
}

const aDestinyMostFateful = {
  bigRoad: true,
  start() {
    items = JSON.parse(bag.items)
    log("######################")
    log("Part Two: A Destiny Most Fateful")
    log("######################")
    space()
    log("Morning comes, as it usually does.")
    if (JSON.parse(bag.lv1didLie)) {
      log(
        "Light stabs your eyes. You can feel a lump the size of a robin's egg grown on the side of your head."
      )
      log("That old fella really packs a wallop.")
      log(
        "You lay for a while with your eyes closed. Once you've decided for certain the sun is not going to change its mind about rising, you decide you have to greet the day."
      )
      log(
        "Slowly, haltingly, you open your eyes. You bring yourself up off your back onto your elbows."
      )
      if (JSON.parse(bag.lv1didRun)) {
        log(
          "In addition to the pain in your head, a sore stiffness has set into your limbs. Running was not a great idea."
        )
      }
      log(
        "You notice you're in a bedroll. The fire has gone out and the old man is nowhere to be seen."
      )
      log(
        "'So he clocks me and then tucks me in'? you think, your right hand going to the pulsing protuberance on your head. The moment you graze it a sharp pain shoots through your head and neck."
      )
      log("'This is NOT going to be my morning' you say out loud to no one.")
      log(
        "It's right about then you notice you are holding the Bag of Holding in your left hand."
      )
    } else {
      log(
        "You awake from a blissful slumber to the sound of birds chirping and the sun shining brilliantly through the trees."
      )
      log("'That may have been the best night's sleep I ever had' you think.")
      log(
        "The old man is nowhere to be seen.'Must have taken off early' you think."
      )
      if (JSON.parse(bag.lv1didRun)) {
        log(
          "You're a little sore from your ill-advised run last night, but other than that you feel great!"
        )
      }
      log("The bag is still hooked to your belt loop right where you left it.")
    }
    log("You get up, stretch, do your necessaries. Morning stuff")
    items.bedroll = true
    log(
      "For better or worse, it's time to go. You roll up the bedroll and stuff it into the Bag of Holding."
    )
    log(
      "Somehow, the bag streches wide enough to allow you to fit the bedroll in. This bag is rad."
    )
    space()
    log(
      "There is a small road that leads out of camp. Without anywhere else to go, you decide to take it."
    )
    if (JSON.parse(bag.lv1didLie)) {
      log(
        "It's a nice enough walk, even with your aching head. Before too long you come to a fork in the path."
      )
    } else {
      log(
        "It's a nice enough walk. Before too long you come to a fork in the path."
      )
    }
    log(
      "The road to your right is wide and well maintained. You can tell it sees regular traffic. It is open and bright and you will be able to see anyone coming up to you for quite a ways."
    )
    log(
      "The road on left is small and dark, overgrown with a canopy of scraggly trees. Barely enough room for two people to stand side by side, the path curves sharply about 60 feet from the fork. If there are many curves like that, you won't be able to tell what's coming up to greet you."
    )
    act = {
      takeBigRoad: () => this.bigRoad(),
      takeSmallRoad: () => this.littleRoad(),
    }
    actPrmpt()
    return game.switchLog(game.cmds)
  },
  bigRoad() {
    act = {}
    log(
      "You're not here to have an adventure. You may not know what you're here for, but it definitely is not that."
    )
    log("You decide to take the main road.")
    const encounter = random(2)
    if (encounter === 0) {
      log("proceed peacefully")
    } else log("something else")
    return "you took the big road"
  },
  littleRoad() {
    act = {}
    log("You decide to take the road less traveled by.")
    log("Slowly stalking down the shadowy path, you take the sharp turn.")
    log("Then another.")
    log("Then another.")
    log("You proceed for a while without incident.")
    log(
      "The further you walk down the path, the thicker the canopy above you becomes. You begin to feel uneasy."
    )
    log(
      "After maybe 45 minutes, the light reaching you has dimmed to the point where it resembles early dusk."
    )
    log(
      "All at once you realize that the normal forest sounds of birds and insects have fallen silent. All you hear as you plod along is the soft crunch of soil and nettles under your feet."
    )
    log(
      "'I haven't even been going this very long' you say aloud to no one, in what may be a habit of yours 'Maybe I can just go back?'"
    )
    if (JSON.parse(bag.lv1didLie))
      log("The lump on your head throbs in silent reply.")
    const encounter = random(3)
    if (encounter === 0) {
      log("fight bandits")
    } else {
      log("Suddenly you hear a deep, slow voice:")
      log(
        "'You can't leave if you've already come in man, it doesn't work that way.'"
      )
      log("You spin around on your heels toward the source of the noise.")
      log(
        "Through the gloom you can just make out a 5 foot tall frog, sitting on a rock wearing cargo shorts."
      )
      log("'Maaaaannnnn, its never worked that way.' he says, with a chuckle.")
      log("'Great' you think, 'another weirdo who speaks in vagueries.'")
      log(
        "The giant frog reaches inside the right pocket of his shorts, pulls out a long wooden pipe and a leather pouch, knocks the pipe against the palm of his left hand and begins packing it."
      )
      log(
        `As he carefully pulls out little bits of tobacco and pinches them into the pipe, the frog says 'So, I guess you must be ${JSON.parse(
          bag.name
        )} then? ${JSON.parse(bag.oldMansName)} said you might be coming along.`
      )
      if (JSON.parse(bag.lv1didLie)) {
        log(
          "'You know that old nut?' you yelp, and pointing to your head continue 'He gave me this lump!'"
        )
        log(
          "Not looking up from his work, the frog mutters 'Yeah. He really doesn't like liars, man.'"
        )
        log("He continues:")
      } else
        log(
          `'Oh, you know ${JSON.parse(
            bag.oldMansName
          )}'' you ask, 'He put me up for the night. Kinda wish he'd stuck around a bit longer though'`
        )
      log(
        `'Yeah, that sounds like ${JSON.parse(
          bag.oldMansName
        )}, bless his wacky old heart.'`
      )
      log(
        "The pipe finally packed to his satisfaction, the frog strikes a match against the stone he's using as a seat, lights the pipe and takes a few slow and deliberate draws from it. A thick smoke leaks from his nostrils as he closes his eyes in pleasure."
      )
      log(
        "After a moment, he opens his eyes and says 'Like I was saying, the road only goes one way, even if you decide to go the other way. It's a lot like life that way, man."
      )
      log(
        "'You can make it through okay though, you just need a friend to show you the way. I guess that's where I come in.'"
      )
      log("'Oh, so now we're friends?' you say 'We've only just met.'")
      log(
        "He thinks about this for a second and then shrugs. 'We might as well be friends. Being enemies is a lot of work, man.'"
      )
      log("You can't argue with that.")
      log(
        "As you've been speaking, the giant frog has continued puffing away at his pipe. The thick smoke has wafted over to you and you're consumed with a smell halfway between tobacco and a sweet, earthy, dry rot."
      )
      log(
        "He continues 'So if you want to reach the end of the road, you gotta ask yourself whyyyyyyyy you wanna go down it in the first place.'"
      )
      log("At that, a long pause falls between the two of you.")
      //
      log(
        "As he walks toward the bag, you say 'So I guess if we're gonna be traveling together, I should know your name.'"
      )
      log("He replies 'What's in a name? You can just call me Frog, man.")
      log("Gotcha. Tt's a pleasure to be traveling with you Frogman.")
      log("At this, he stops and his brow furrows.")
      log("'No', he says flatly, 'Not Frogman. Just Frog, man.'")
      log(
        "You may have found something that actually bothers him. 'That's what I said, Frogman.'"
      )
      log(
        "Frogman begins to protest again but, realizing that a fight would be a lot of effort, simply shrugs and says 'Surrrrreeee. Frogman it is. Call me when you need me, man. Or, you know, just to say hi.'"
      )
      log(
        "With that, Frogman jumps into the Bag of Holding, a thin wisp of pungent sweet rot smoke trailing after."
      )
    }
    return "you took the little road"
  },
}
