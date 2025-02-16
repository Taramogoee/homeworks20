/*
   what is the difference between an asynchronous function and a synchronous function?
*/

// ! Answer
//Synchronous Functions):
//Definition: Concurrent functions execute sequentially and one after the other. Each line of code must complete before the next line can be executed.
//Behavior: If a concurrent function performs a time-consuming operation (such as reading a file or making a network request), the entire program waits for that operation to complete before moving on to the next line.

//Asynchronous Functions):
//Definition: Asynchronous functions allow a program to continue executing code without waiting for a time-consuming operation to complete.
//Behavior: When an asynchronous function is called, the program does not wait and immediately moves on to the next line. After the asynchronous operation completes, a callback function (or Promise) is execut