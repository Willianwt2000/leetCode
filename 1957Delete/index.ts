function makeFancyString(s: string): string {
  const result: string[] = [];
  let longitud = 0
  
  for (let i = 0; i < s.length; i++) {
    const current: string = s[i]; 
    if (
      longitud >= 2 &&
      result[longitud - 1] === current &&
      result[longitud - 2] === current
    ) {
      continue;
    }
    result[longitud] = current;
    longitud++ 
  }
  return result.join(''); 
}