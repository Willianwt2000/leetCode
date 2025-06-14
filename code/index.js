function sherlockAndAnagrams(s) {
    let count = 0;
    const n = s.length;
    const freqMap = {};

    for (let i = 0; i < n; i++) {
        for (let j = i + 1; j <= n; j++) {

            const substr = s.slice(i, j);
            const key = substr.split('').sort().join('');

            // Count frequency of each sorted substring
            freqMap[key] = (freqMap[key] || 0) + 1;
        }
    }

    for (const key in freqMap) {
        const freq = freqMap[key];
        count += freq * (freq - 1) / 2;
    }

    return count;
}