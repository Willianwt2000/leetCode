function findShortestSubArray(nums: number[]): number {
    const count: Record<number, number> = {};
    const first: Record<number, number> = {};
    const last: Record<number, number> = {};

    for (let i = 0; i < nums.length; i++) {
        const num = nums[i];

        if (first[num] === undefined) {
            first[num] = i;
        }
        last[num] = i;
        count[num] = (count[num] || 0) + 1;
    }

    const degree = Math.max(...Object.values(count));
    let minLen = nums.length;
    for (const num in count) {
        if (count[num] === degree) {
            const length = last[num] - first[num] + 1;
            if (length < minLen) {
                minLen = length;
            }
        }
    }

    return minLen;
}
