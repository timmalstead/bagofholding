const run = () => eval(`${[bag.level]}.run()`)

const storeNames = name => {
  if (name && typeof name === "string") {
    bag.name = name
    const arrayOfNames = [
      "Franklin",
      "Seymour",
      "Bernie",
      "Earl",
      "Homer",
      "Eugene",
      "Harold",
      "Howard",
      "Irving",
      "Marvin",
      "Murray",
      "Norman",
      "Vern",
      "Chester",
      "Clarence",
      "Clifford",
      "Desmond",
      "Earnest",
      "Edgar",
      "Elmer",
      "Emmet",
      "Felix",
      "Oscar",
      "Gus",
      "Horace",
      "Mortimer",
      "Otis"
    ]
    bag.oldMansName =
      arrayOfNames[Math.floor(Math.random() * arrayOfNames.length)]
    act = {}
    return aFiresideChat.dinner(name)
  } else {
    return "Name cannot be blank and name must be enclosed in quotation marks"
  }
}

const getInitialItems = () => {
  const largeItem = ["bazooka", "broom"]
  items[largeItem[Math.floor(Math.random() * largeItem.length)]] = true
  const initialItems = [
    "key",
    "small bottle",
    "small gold bar",
    "knife",
    "pair of gloves",
    "ring",
    "piece of beef jerky",
    "pair of eyeglasses"
  ]
  for (let i = 0; i < 2; i++) {
    const num = Math.floor(Math.random() * initialItems.length)
    items[initialItems[num]] = true
    initialItems.splice(num, 1)
  }
}

const randomLie = () => {
  const lies = [
    "I got seperated from a group of merchants I am travelling with. I'm very wealthy and you will be rewarded for your kindness.",
    "I work for the lord of this land, collecting taxes. Are you all paid up?",
    "I work for crazy old man quarterly. Congratulations, you're been selected as our latest Crazy Old Man of the Year!"
  ]
  return lies[Math.floor(Math.random() * lies.length)]
}
