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

function mergeTwoLists(list1: ListNode | null, list2: ListNode | null): ListNode | null {

    if (!list1 && !list2) return null;
    
    let current1: ListNode | null = list1;
    let current2: ListNode | null = list2;
    let head: ListNode | null = new ListNode();
    let current3 = head;




    while (current1 !== null && current2 !== null) {
        if (current1.val <= current2.val) {
            current3.next = current1
            current1 = current1.next;
        } else {
            current3.next = current2;
            current2 = current2.next
        }
        current3 = current3.next;
    }

    console.log("List 3")
    console.log(head)

    if (current1 !== null) {
        current3.next = current1
    } else {
        current3.next = current2
    }



    return head.next;


};