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
