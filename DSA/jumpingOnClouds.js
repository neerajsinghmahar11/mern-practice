let c = [1, 1, 1, 0, 1, 1, 0, 0, 0, 0];
let k = 3;

function jumpingOnClouds(c, k) {
    let energy = 100;
    let stop = false;
    let i = 0;

    while (!stop) {
        i = i + k;
        if (i < c.length) {
            if (c[i] == 0) {
                energy--;
            } else {
                energy = energy - 3;
            }
        } else {
            i = i % c.length; //keep moving in circular path
            if (c[i] == 0) {
                energy--;
            } else {
                energy = energy - 3;
            }
        }
        if (i == 0) {
            stop = false;
            break;
        }
    }
    console.log(energy);
}

jumpingOnClouds(c, k);
