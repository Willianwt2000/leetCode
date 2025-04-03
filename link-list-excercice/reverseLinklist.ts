/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

function reverseList(head: ListNode | null): ListNode | null {
  if(head === null) return null;

  let current: ListNode = head;
  let prev : ListNode | null = null;
  

  while(current !== null) {
       let pointer : ListNode | null = current.next;
       current.next = prev
      prev = current;
      current = pointer;
      
  }

  return prev;
};