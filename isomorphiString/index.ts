function isIsomorphic(s: string, t: string): boolean {
    if (s.length !== t.length) return false;

    const sToT = new Map<string, string>();
    const tToS = new Map<string, string>();

    for (let i = 0; i < s.length; i++) {
        const charS = s[i];
        const charT = t[i];

        // Ensure one-to-one mapping
        if ((sToT.has(charS) && sToT.get(charS) !== charT) ||
            (tToS.has(charT) && tToS.get(charT) !== charS)) {
            return false;
        }

        sToT.set(charS, charT);
        tToS.set(charT, charS);
    }

    return true;
}