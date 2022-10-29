function deleteDuplicates(head: ListNode | null): ListNode | null {
    let node = head;

    if (!node) {
        return null;
    }

    while (node.next) {
        if (node.next.val == node.val) {
            node.next = node.next.next;
        } else {
            node = node.next;
        }
    }
    return head;
}
