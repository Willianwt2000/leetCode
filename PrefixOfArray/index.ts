function isPrefixString(s: string, words: string[]): boolean {
    let prefix: string = "";
    const prefixLength: number = s.length;

    for (let i = 0; i < words.length; i++) {
        prefix += words[i];
        
        if (prefix === s) {
            return true;
        }
        
        if (prefix.length > prefixLength || !s.startsWith(prefix)) {
            return false;
        }
    }
    
    return false;
}