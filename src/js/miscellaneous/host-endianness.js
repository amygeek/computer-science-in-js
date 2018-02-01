/**
 * Write a program to determine the host byte order (endianness) of any system. Let's scope this to big endian and little endian systems.
 In the bigendian systems, those bytes happened to be zeros (making the system appear to work properly),
 while on the little-endian systems, they were nonzero, causing the string to appear to be corrupted.

 int *i; // pointer to an int (4 bytes on 32-bit machine)
 i = 0;  // points to location zero, so *i is the value there
 Again we ask: what is the value at i?

 Big endian machine: An int is 4 bytes, and the first is the largest. I read 4 bytes (W X Y Z) and W is the largest. The number is 0x12345678.
 Little endian machine: Sure, an int is 4 bytes, but the first is smallest. I also read W X Y Z, but W belongs way in the back -- it's the littlest.
 The number is 0x78563412.

 Big endian machine: Stores data big-end first. When looking at multiple bytes, the first byte (lowest address) is the biggest.
 Little endian machine: Stores data little-end first. When looking at multiple bytes, the first byte is smallest.
 */
let checkEndian = function() {
    let a = new ArrayBuffer(4);
    let b = new Uint8Array(a);
    let c = new Uint32Array(a);
    b[0] = 0xa1;
    b[1] = 0xb2;
    b[2] = 0xc3;
    b[3] = 0xd4;
    if (c[0] === 0xd4c3b2a1) return "little endian";
    if (c[0] === 0xa1b2c3d4) return "big endian";
    else throw new Error("Something crazy just happened");
};

console.log(checkEndian());