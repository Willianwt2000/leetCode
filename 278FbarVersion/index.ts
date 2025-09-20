var solution = function(isBadVersion: any) {
  return function(n: number) {
    let left: number = 1;
    let right: number = n;

    while (left < right) {
      let mid = Math.floor(left + (right - left) / 2);

      if (isBadVersion(mid)) {
        right = mid;
      } else {
        left = mid + 1;
      }
    }

    return left;
  };

};


console.log(solution(5))