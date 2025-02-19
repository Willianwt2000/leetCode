/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
function mergeTwoLists(list1: ListNode | null, list2: ListNode | null): ListNode | null {
  let result = [...list1,...list2]

  return result.sort();
};

console.log(mergeTwoLists([1,2,4],[1,3,4]));
console.log(mergeTwoLists([],[]));
console.log(mergeTwoLists([],[0]));
