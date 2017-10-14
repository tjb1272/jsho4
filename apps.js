const addPriorTwo = length => {
    if (length === 1)
        return [0]
    let arr = addPriorTwo(length - 1)
    arr.push(arr[arr.length - 1] + arr[arr.length - 2] || 1)
    return arr
}
console.log(addPriorTwo(20));

document.getElementById('sequence').innerHTML = (` ${addPriorTwo(20)} `);
