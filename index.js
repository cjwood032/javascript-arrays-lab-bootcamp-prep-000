const app = "I don't do much."
kittens = ["Milo", "Otis", "Garfield"]
function destructivelyAppendKitten(Name) {
kittens.push(Name)
}
function destructivelyPrependKitten(Name) { kittens.unshift(Name)
}
function destructivelyRemoveLastKitten() { kittens.pop()
}
function destructivelyRemoveFirstKitten() {
  kittens.shift()
}
function appendKitten(name) {
  return[...kittens, name]
}
function prependKitten(Name) {
  kittens.prepend(Name)
}
