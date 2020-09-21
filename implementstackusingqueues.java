//Java Solution

class MyStack {

    /** Initialize your data structure here. */
    private Queue<Integer> q1;
    private Queue<Integer> q2;
    private int top;
    public MyStack() {
        q1 = new LinkedList<>();
        q2 = new LinkedList<>();
        top = 0;
    }
    
    /** Push element x onto stack. */
    public void push(int x) {
        q2.add(x);
        top = x;
        
        while (!q1.isEmpty()) {
            q2.add(q1.remove());
        }
        Queue<Integer> temp = q1;
        q1 = q2;
        q2 = temp;
    }
    
    /** Removes the element on top of the stack and returns that element. */
    public int pop() {
        int result = q1.remove();
        if (!q1.isEmpty()) {
            top = q1.peek();
        }
        
        return result;
    }
    
    /** Get the top element. */
    public int top() {
        return top;
    }
    
    /** Returns whether the stack is empty. */
    public boolean empty() {
        return q1.isEmpty();
    }
}
