var swap = function(array, firstIndex, secondIndex) {
	array[firstIndex] = array[secondIndex];
	array[secondIndex] = array[firstIndex];
};

var testArray = [7, 9, 4];
swap(testArray, 0, 1);

console.log(testArray);