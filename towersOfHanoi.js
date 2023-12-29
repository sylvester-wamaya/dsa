function move(start, goal){
    let intermediate = [1, 2, 3].filter(x => ![start, goal].includes(x))[0]
    let result = move_text(start, intermediate) + " " + move_text(start, goal) + " " + move_text(intermediate, goal)
    return result
}

function move_text(from, to){
    return `${from}->${to}`
}

console.log(move(1,3))
