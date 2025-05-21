function intersect(nums1: number[], nums2: number[]): number[] {
    const freqMap = new Map<number, number>();
    const intersection: number[] = [];
    for (const num of nums1) {
        freqMap.set(num, (freqMap.get(num) || 0) + 1);
    }

    for (const num of nums2) {
        if (freqMap.has(num) && freqMap.get(num)! > 0) {
            intersection.push(num);
            freqMap.set(num, freqMap.get(num)! - 1); 
        }
    }

    return intersection;
}