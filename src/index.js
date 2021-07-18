
exports.min = function min (arr = []) {
    const data = arr;
    if ( arr.length === 0 ) {
        return 0;
    }

    let res = arr.sort ( function ( a, b ) {
        return a - b;
    } );

    console.log(res);

    return res[0];
}

exports.max = function max ( arr = []) {
    if ( arr.length === 0 ) {
        return 0;
    }

    let res = arr.sort ( function ( a, b ) {
        return b - a;
    } );

    return res[0];
}

exports.avg = function avg ( arr = []) {
    if ( arr.length === 0 ) {
        return 0;
    }

    let res = 0;

    for ( let i = 0; i < arr.length; i++ ) {
        res += arr[i];
    }

    return res / arr.length;
}
