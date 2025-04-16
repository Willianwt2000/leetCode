function mergeTwoLists(list1: ListNode | null, list2: ListNode | null): ListNode | null {

  if(list1 === null || list2 === null) return null;
  let current : ListNode = list1;
  let current2 : ListNode = list2;

   while(current.next !== null && current2.next !== null) {
       if(current.val <= current2.val) {
           console.log(current.val);
           console.log(current2.val);

           current2.next = current; //target
           current2 = current2.next;
       } 
       current = current.next;
   }


return list2;


};