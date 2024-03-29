/* 
TODO: Create the DLLNode class and implement the DoublyLinkedList constructor
and the empty methods below the constructor.
*/
class DLLNode {
  /**
   * Executed when the new keyword is used to construct a new node instance.
   * @param {any} data The data the new node will store.
   */
  constructor(data) {
    this.data = data;
    /**
     * By default a new node instance will not be connected to any other nodes,
     * these properties will be set after instantiation to connect the node to
     * a list. However, the head prev should remain null.
     *
     * @type {DLLNode|null}
     */
    this.prev = null;
    /** @type {DLLNode|null} */
    this.next = null;
  }
}
/**
 * A class to represent a doubly linked list and contain all of it's methods.
 * A doubly linked list is a singly linked list that can be traversed in both
 * directions.
 */
class DoublyLinkedList {
  /**
   * Executed when the new keyword is used to construct a new DoublyLInkedList
   * instance that inherits these methods and properties.
   */
  constructor() {
    // TODO: implement the constructor.

    this.head = null;
    this.tail = null;
  }

  /**
* Determines if this list is empty.
* - Time: O(1) constant.
* - Space: O(1) constant.
* @returns {boolean} Indicates if this list is empty.
*/
  isEmpty() {
    return this.head === null;
  }

  /**
   * Creates a new node and adds it at the front of this list.
   * - Time: O(?).
   * - Space: O(?).
   * @param {any} data The data for the new node.
   * @returns {DoublyLinkedList} This list.
   */
  insertAtFront(data) {
    // Create a new node with the given data.
    const newHead = new DLLNode(data);

    // Check if the list is empty.
    if (this.isEmpty()) {
      // If the list is empty, set both the head and tail to the new node.
      this.head = newHead;
      this.tail = newHead;
    } else {
      // If the list is not empty:
      // - Set the old head as the next node of the new node.
      const oldHead = this.head;
      oldHead.prev = newHead;
      newHead.next = oldHead;
      // - Update the head to be the new node.
      this.head = newHead;
    }
    // Return the updated list.
    return this;
  }

  /**
   * Creates a new node and adds it at the back of this list.
   * - Time: O(?).
   * - Space: O(?).
   * @param {any} data The data for the new node.
   * @returns {DoublyLinkedList} This list.
   */
  insertAtBack(data) {
    let newNode = new DLLNode(data);
    if (this.isEmpty()) {
      this.head = newNode;
      this.tail = newNode;
      return this;
    }
    let newTail = newNode;
    this.tail.next = newTail;
    newTail.prev = this.tail;
    this.tail = newTail;
    return this;
  }

  //TODO: EXTRA
  /**
   * Removes the middle node in this list.
   * - Time: O(?).
   * - Space: O(?).
   * @returns {any} The data of the removed node.
   */
  removeMiddleNode() { }
//!====================== 8/18/23 ========================


  /**
 * Inserts a new node with the given newVal after the node that has the
 * given targetVal as it's data.
 * - Time: O(?).
 * - Space: O(?).
 * @param {any} targetVal The node data to find.
 * @param {any} newVal Data for the new node.
 * @returns {boolean} Indicates if the new node was added.
 */
  insertAfter(targetVal, newVal) {
    if (this.head === null) {
      return false;
    }
    
    let currentNode = this.head;

    //while loop to iterate through list with current node...
    while (currentNode) {
      // if currentNode's data == targetVal, then...
      if(currentNode.data == targetVal)
      {
        // create new variable for the newNode to become new DLLNode(newVal)
        let newNode = new DLLNode(newVal);
      
        //establishing prev and next for newNode?
        newNode.next = currentNode.next;

        newNode.prev = currentNode;

        //next node after current is now the new node... linkling into existing list
        currentNode.next = newNode
        return true;
      }
      currentNode = currentNode.next;
    }
    return false;
   }

  /**
   * Inserts a new node with the given newVal before the node that has the
   * given targetVal as it's data.
   * - Time: O(?).
   * - Space: O(?).
   * @param {any} targetVal The node data to find.
   * @param {any} newVal Data for the new node.
   * @returns {boolean} Indicates if the new node was added.
   */
  insertBefore(targetVal, newVal) { 
    if (this.tail === null) {
      return false;
    }

    
    let currentNode = this.tail;

    //while loop to iterate through list with current node...
    while (currentNode) {
      // if currentNode's data == targetVal, then...
      // console.log(currentNode.data);

      if(currentNode.data == targetVal)
      {
        // create new variable for the newNode to become new DLLNode(newVal)
        let newNode = new DLLNode(newVal);
      
        //establishing prev and next for newNode?
        newNode.next = currentNode;

        newNode.prev = currentNode.prev;
        
        //edge case
        if (currentNode === this.head ) {
          this.head = newNode 
        } else {
          //next node after current is now the new node... linkling into existing list
          currentNode.prev.next = newNode
        }
        
        currentNode.prev = newNode

        return true;
      }
      currentNode = currentNode.prev;
    }
    return false;
  }


  //!========================================================
  /**
   * Converts this list to an array of the node's data.
   * - Time: O(n) linear, n = list length.
   * - Space: O(n) linear, array grows as list length increases.
   * @returns {Array<any>} All the data of the nodes.
   */
  toArray() {
    const vals = [];
    let runner = this.head;

    while (runner) {
      vals.push(runner.data);
      runner = runner.next;
    }
    return vals;
  }

  /**
   * Adds all the given items to the back of this list.
   * @param {Array<any>} items Items to be added to the back of this list.
   * @returns {DoublyLinkedList} This list.
   */
  insertAtBackMany(items = []) {
    items.forEach((item) => this.insertAtBack(item));
    return this;
  }
}

const emptyList = new DoublyLinkedList();

const triNodeList = new DoublyLinkedList().insertAtFront(5).insertAtFront(4).insertAtFront(3).insertAtFront(2).insertAtFront(1)
console.log(triNodeList.toArray())


const triNodeList4 = new DoublyLinkedList()
  .insertAtBack(1)
  .insertAtBack(2)
  .insertAtBack(3)
  .insertAtBack(4)
  .insertAtBack(5);

  // console.log(" ================= Insert After TEST ==================");
  // console.log("before:");
  // console.log(triNodeList4.toArray());
  // console.log(triNodeList4.insertAfter(3,6));
  // console.log("after:");
  // console.log(triNodeList4.toArray());

  console.log(" ================= Insert After TEST ==================");
  console.log("before:");
  console.log(triNodeList4.toArray());
  console.log(triNodeList4.insertAfter(5,6));
  console.log("after:");
  console.log(triNodeList4.toArray());

  // console.log(" ================= Insert Before TEST ==================");
  // console.log("before:");
  // console.log(triNodeList4.toArray());
  // console.log(triNodeList4.insertBefore(3, 9));
  // console.log("after:");
  // console.log(triNodeList4.toArray());


  console.log(" ================= Insert Before TEST ==================");
  console.log("before:");
  console.log(triNodeList4.toArray());
  console.log(triNodeList4.insertBefore(1, 9));
  console.log("after:");
  console.log(triNodeList4.toArray());


  
/**************** Uncomment these test lists after insertAtBack is created. ****************/
  // const singleNodeList = new DoublyLinkedList().insertAtBack(1);
  // const biNodeList = new DoublyLinkedList().insertAtBack(1).insertAtBack(2);
  // const firstThreeList = new DoublyLinkedList().insertAtBackMany([1, 2, 3]);
  // const secondThreeList = new DoublyLinkedList().insertAtBackMany([4, 5, 6]);
  // const unorderedList = new DoublyLinkedList().insertAtBackMany([
  //   -5,
  //   -10,
  //   4,
  //   -3,
  //   6,
  //   1,
  //   -7,
  //   -2,
  // ]);