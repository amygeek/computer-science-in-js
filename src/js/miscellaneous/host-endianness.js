/**
 * Write a program to determine the host byte order (endianness) of any system. Let's scope this to big endian and little endian systems.
 In the bigendian systems, those bytes happened to be zeros (making the system appear to work properly),
 while on the little-endian systems, they were nonzero, causing the string to appear to be corrupted.
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