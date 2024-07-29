module.exports = function reverse (n) {
    const iter = (val, acc) => {
        if (val < 10) return `${acc}${val}`;

        acc += `${val % 10}`;
        return iter(Math.floor(val / 10), acc)
    }

    return iter(Math.abs(n), '');
}


const f = (n) => {
    const val = Math.abs(n);

    if (Math.abs(n) < 10) return `${val}`;

    const result = val % 10;
    const newVal = Math.floor(val / 10);

    return `${result}${f(newVal)}`;
}

