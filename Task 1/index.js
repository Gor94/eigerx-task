function commonPrefix(inputs) {
    function calculateCommonPrefixLength(str) {
        let sum = 0;
        const n = str.length;

        for (let i = 0; i < n; i++) {
            const suffix = str.slice(i);
            let commonLength = 0;

            for (let j = 0; j < suffix.length && j < n; j++) {
                if (suffix[j] === str[j]) {
                    commonLength++;
                } else {
                    break;
                }
            }
            sum += commonLength;
        }

        return sum;
    }

    return inputs.map(calculateCommonPrefixLength);
}

const inputs = ['ababaa', 'aa'];
console.log(commonPrefix(inputs));