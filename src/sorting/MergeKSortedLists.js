/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function(lists) {

    if(lists.length < 1) {
        return '';
    }
    
    if(lists.length === 1) {
        return lists[0]
    }
    let result = '';
    for(let i=0; i<lists.length;i++){
        if(!result){
            result = lists[i];
        }else{
            result = merge(result, lists[i])
        }
    }
    if(!result || result.length ===0)
        result = '';
    return result 
};

const merge = (left, right) => {
    let result = new ListNode(null);
    let lastNode = result;
    while (left && right) {
        if (left.val  < right.val) {
           
            if(lastNode.val === null) {
                lastNode.val = left.val;
            }else{
                lastNode.next = new ListNode(left.val);
                lastNode = lastNode.next;
            }
        
            left = left.next
        } else {

            if(lastNode.val === null) {
                lastNode.val = right.val;
            }else{
                lastNode.next = new ListNode(right.val);
                lastNode = lastNode.next;
            }            
            right=right.next;
        }
    }
    let temp = result;
    if(left){
        if(temp.val !== null){
             while(temp.next){
                temp = temp.next;
            }
            temp.next = left;   
        } else {
            result = left
        }
        
    } else if (right) {
        if(temp.val !== null) {
            while(temp.next){
                temp = temp.next;
            }
            temp.next = right;    
        }else{
            result = right
        }
        
    }
    
    return result;
}

