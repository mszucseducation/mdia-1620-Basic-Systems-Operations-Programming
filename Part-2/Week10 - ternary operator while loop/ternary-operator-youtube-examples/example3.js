function example(num) {
    return num == 1 ? "You guessed 1"
        : num == 2 ? "You guessed 2"
        : num == 3 ? "You guessed 3"
        : "You did not guess any right numbers"
}

console.log(example(1))
console.log(example(2))
console.log(example(3))
console.log(example(4))