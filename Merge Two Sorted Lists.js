const mergeTwoLists = (list1, list2) => {
    let newNode = new ListNode();
    const head = newNode;

    while (list1 && list2) {
        if (list1.val < list2.val) {
            newNode.next = list1;
            newNode = newNode.next;
            list1 = list1.next;
        } else {
            newNode.next = list2;
            newNode = newNode.next;
            list2 = list2.next;
        }
    }

    newNode.next = list1 || list2;

    return head.next;
};
