const fn = (msg) => {
    const arr = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]
    const arr2 = [16,17,18,19,20,21,22,23,24,25,26,27]

    const arr3 = [...arr, ...arr2]
    console.log(...arr3, msg)
}

fn('Hello')