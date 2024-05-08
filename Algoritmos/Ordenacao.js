function quicksort(array) {
    if (array.length == 0) return []
    if (array.length == 1) return array

    var pivot = array[0]

    var head = array.filter(n => n < pivot)
    var equal = array.filter(n => n == pivot)
    var tail = array.filter(n => n > pivot)

    return quicksort(head).concat(equal).concat(quicksort(tail))
}

module.exports = quicksort;