function commonPrefix(inputs) {
    function calculateCommonPrefixLength(str) {
        let sum = 0;
        const n = str.length;

        // Compare the suffixes with the original string
        for (let i = 0; i < n; i++) {
            const suffix = str.slice(i);
            let commonLength = 0;

            // Find the common prefix length of the suffix with the original string
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

// Example usage:
const inputs = ['ababaa', 'aa'];
console.log(commonPrefix(inputs)); // Output: [11, 3]