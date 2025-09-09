const canAliceWin =  (nums) =>  {
  let alice:number = 0;
  let bob:number = 0;
  let aux:number;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] < 10) {
      alice += nums[i];
    } else {
      bob += nums[i];
    }
  }
  if (alice > bob) {
    return true;
  }
  aux = alice;
  alice = bob;
  bob = aux;

  return alice > bob;
};