//方法1 标记法
var getIntersectionNode = function(headA, headB) {
    while(headA){
        headA.flag = true
        headA = headA.next
    }
    while(headB){
        if(headB.flag == true){
            return headB
        }
        headB = headB.next
    }
     return null
  };
  //方法2 拼接链表法
  var getIntersectionNode = function(headA, headB) {
     let curr1 = headA, curr2 = headB
     while(curr1!= curr2){
       curr1 = (curr1 ? curr1.next:headB)
       curr2 = (curr2 ? curr2.next:headA)
     }
     return curr1  
  };
  