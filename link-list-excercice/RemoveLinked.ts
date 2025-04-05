function removeElements(head: ListNode | null, val: number): ListNode | null {
  while(head !== null && head.val === val) {head = head.next}

  if(head === null) return null;

  let current: ListNode | null = head;
  while(current !==null && current.next !== null) {
      if(current.next.val === val) {
          current.next = current.next.next; 
      } else {
          current = current.next;
      }
  }
  return head;
};

