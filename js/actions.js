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
