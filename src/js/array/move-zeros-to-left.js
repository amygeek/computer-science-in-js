let move_zeros_to_left = function(arr) {

    let n = arr.length;

    if (n < 1) {
        return;
    }

    let write_index = n - 1;
    let read_index = n - 1;

    while (read_index >= 0) {
        if (arr[read_index] != 0) {
            arr[write_index] = arr[read_index];
            write_index--;
        }

        read_index--;
    }

    while (write_index >= 0) {
        arr[write_index] = 0;
        write_index--;
    }

    return arr;
};

let arr = [1, 0, 3, 0, 4, 5];
console.log(move_zeros_to_left(arr));