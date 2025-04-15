function isSymmetric(root: TreeNode | null): boolean {
  function isSameTree(p: TreeNode | null, q: TreeNode | null): boolean {
  if(p === null && q === null){return true;} else if(p === null || q === null){return false;} 
  if(p.val !== q.val){return false;}
  return isSameTree(p.left, q.right) && isSameTree(p.right, q.left);
};
  if(root === null){return true;}else{return isSameTree(root.left, root.right);}
};