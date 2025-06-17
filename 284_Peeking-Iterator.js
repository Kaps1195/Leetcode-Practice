// https://leetcode.com/problems/peeking-iterator/

// Implement a simple iterator class that iterates over a given collection of items.

// Your iterator should provide a way to move through the elements one at a time,
// returning each element until there are no more.

// Key Requirements
// The iterator should accept a list (or array) of items at initialization.
// Calling next() on the iterator returns the next item.
// Calling hasNext() (or equivalent) returns whether there are more items to
// iterate through.

// assume immutable list for input
// can call hasNext() 0 or more times before calling next()
// Calling next() when hasNext() == false -> return a nice error

// Sample Input and Output:
// items := []int{10, 20, 30, 40}
// iterator := NewSimpleIterator(items)
// iterator.hasNext() -> true
// iterator.next() -> 10
// iterator.hasNext() -> true
// iterator.next() -> 20
// iterator.hasNext() -> true
// iterator.next() -> 30
// iterator.hasNext() -> true
// iterator.next() -> 40
// iterator.hasNext() -> false 
// iterator.next() -> throw an error

/*

iterator = [10, 20, 30, 40];
let index = 0; // Initial state

function hasNext() {
  if(iterator[index]) {
    return true;
  } else {
   return false;
  }
}

function next() {
  if (hasNext()) {
    print the element
    console.log(iterator[index])
    index++;
  } else {
    throw new Error("Index out of bounds!") 
  }

}


*/

const filterFunction = (i) => i % 2 == 0;

class NewSimpleIterator {
  constructor(items, filterFunction) {
    this.filterFunction = filterFunction
    this.items = items;
    this.index = 0;
  }

// items := []int{2, 3, 3, 4, 3, 6, 7}
/*

while not hasNext() {
  index++;
} else {
  print/return
}


*/ 



  hasNext() {
    // if array.contains(element) -> true
    // console.log(this.items[this.index])
    if(this.items[this.index] != undefined && this.filterFunction(this.items[this.index])) { 
      return true;
    } else {
      // skip that 3,3,3,7
      // increment the index
     return false;
    }

    // console.log(this.items[this.index] != undefined)
  }

  next() {
    if (this.hasNext()) {
      // return the current element
      this.index += 1;
      console.log(this.items[this.index-1])
      return this.filterFunction(this.items[this.index-1]);
    } else {
      this.index += 1;
      return;
      // throw new Error("Index out of bounds!") 
    }
  }

  print() {
    console.log(this.index)
    this.index += 1;
  }

}

const filteredIterator = new NewSimpleIterator([2, 3, 3, 4, 3, 6, 7], filterFunction)
// iterator.print()
filteredIterator.hasNext()
filteredIterator.next()
filteredIterator.hasNext()
filteredIterator.next()
filteredIterator.hasNext()
filteredIterator.next()
filteredIterator.hasNext()
filteredIterator.next()
filteredIterator.hasNext()
filteredIterator.next()
filteredIterator.hasNext()
filteredIterator.next()
filteredIterator.hasNext()
filteredIterator.next()



// Extend the Iterator with a predicate function
// Now enhance your iterator to support a predicate function. This could be done by
// wrapping an existing iterator or by implementing a new iterator and integrating the filter logic directly. The idea
// is to create a FilterIterator that takes another iterator and a predicate function.
// When next() is called, it should return the next element that satisfies the
// predicate.
// Key Requirements:
// The FilterIterator should be initialized with a list of integers and a predicate function.
// The FilterIterator should iterate through it’s items based on the predicate function.
// If no more matching elements remain, next() should signal the end as
// Before.

// Sample Input and Output
// items := []int{2, 3, 3, 4, 3, 6, 7}
// isEven = (i ) => i % 2 == 0; 

// filteredIterator = NewFilterIterator(items, isEven )
// // or filteredIterator = NewFilterIterator(SimpleIterator(items) , isEven )
// filteredIterator.hasNext() -> true
// filteredIterator.next() -> 2
// filteredIterator.hasNext() -> true
// filteredIterator.next() -> 4
// filteredIterator.hasNext() -> true
// filteredIterator.next() -> 6
// filteredIterator.hasNext() -> false

// *Online coding competition*

// * Users have already registered + logged in
// * Contest has a given start and end time
// * Users solve algorithmic problems and submit source code
//     * Problems can be solved in any order
//     * Retry is allowed 
// * We take code -> compile -> run secret tests -> pass/fail
// * User can choose any language they wish.. 

// * We are building this as a web application.



// Implement a simple iterator class that iterates over a given collection of items.

// Your iterator should provide a way to move through the elements one at a time,
// returning each element until there are no more.

// Key Requirements
// The iterator should accept a list (or array) of items at initialization.
// Calling next() on the iterator returns the next item.
// Calling hasNext() (or equivalent) returns whether there are more items to
// iterate through.

// assume immutable list for input
// can call hasNext() 0 or more times before calling next()
// Calling next() when hasNext() == false -> return a nice error

// Sample Input and Output:
// items := []int{10, 20, 30, 40}
// iterator := NewSimpleIterator(items)
// iterator.hasNext() -> true
// iterator.next() -> 10
// iterator.hasNext() -> true
// iterator.next() -> 20
// iterator.hasNext() -> true
// iterator.next() -> 30
// iterator.hasNext() -> true
// iterator.next() -> 40
// iterator.hasNext() -> false (if next() is called, throw an error)

// Extend the Iterator with a predicate function
// Now enhance your iterator to support a predicate function. This could be done by
// wrapping an existing iterator or by implementing a new iterator and integrating the filter logic directly. The idea
// is to create a FilterIterator that takes another iterator and a predicate function.
// When next() is called, it should return the next element that satisfies the
// predicate.
// Key Requirements:
// The FilterIterator should be initialized with a list of integers and a predicate function.
// The FilterIterator should iterate through it’s items based on the predicate function.
// If no more matching elements remain, next() should signal the end as
// Before.

// Sample Input and Output
// items := []int{2, 3, 3, 4, 3, 6, 7}
// isEven = (i ) => i % 2 == 0;

// filteredIterator = NewFilterIterator(items, isEven )
// // or filteredIterator = NewFilterIterator(SimpleIterator(items) , isEven )
// filteredIterator.hasNext() -> true
// filteredIterator.next() -> 2
// filteredIterator.hasNext() -> true
// filteredIterator.next() -> 4
// filteredIterator.hasNext() -> true
// filteredIterator.next() -> 6
// filteredIterator.hasNext() -> false

// Finally, implement an InterweavingIterator that takes multiple iterators and yields
// their elements in a round-robin fashion. For example, if you have three iterators
// A , B , and C , the InterweavingIterator should return one element from A , then
// one from B , then one from C , then loop back to A , and so forth, skipping any
// iterators that are exhausted. Interweaving Iterators should be able to take in
// both SimpleIterators and FilterIterators
// Key Requirements:
// Initialize the InterweavingIterator with a list of iterators.
// When next() is called, retrieve the next available element from the next
// available iterator in turn.
// If an iterator is exhausted, skip it in subsequent cycles.
// Stop when all iterators are exhausted.

// Sample Input and Output
// A := NewSimpleIterator([]int{1, 2, 3, 4, 5})
// B := NewFilterIterator( []int{11, 22, 33, 44}, (i ) -> i %2 == 0 )
// C := NewSimpleIterator( []int{100, 200})
// D := NewSimpleIterator( []int{300, 400, 500} )
// interweave := NewInterweavingIterator([A, B, C, D])
// interweave.hasNext() -> true
// interweave.next() -> 1
// nterweave.hasNext() -> true
// interweave.next() -> 22
// interweave.hasNext() -> true
// interweave.next() -> 100
// interweave.hasNext() -> true
// interweave.next() -> 300
// interweave.hasNext() -> true
// interweave.next() -> 2
// interweave.hasNext() -> true
// interweave.next() -> 44
// interweave.hasNext() -> true
// interweave.next() -> 200
// interweave.hasNext() -> true
// interweave.next() -> 400
// interweave.hasNext() -> true
// interweave.next() -> 3
// interweave.hasNext() -> true
// interweave.next() -> 500
// interweave.hasNext() -> true
// interweave.next() -> 4
// interweave.hasNext() -> true
// interweave.next() -> 5
// interweave.hasNext() -> false

// package main

// import "fmt"

// type Predicate[T any] func(T) bool

// type FilterIterator[T any] struct {
// 	items     []T
// 	cursor    int
// 	predicate Predicate[T]
// }

// type Iterators[T any] interface {
// 	next() (T, error)
// 	hasNext() bool
// }

// type InterweavingIterator[T any] struct {
// 	iterators []Iterators[T]
// 	cursor    int
// }

// func NewInterweavingIterator[T any](iterators ...Iterators[T]) *InterweavingIterator[T] {
// 	return &InterweavingIterator[T]{
// 		cursor:    0,
// 		iterators: iterators,
// 	}
// }

// func (it *InterweavingIterator[T]) hasNext() bool {
// 	returnedFalseCount := 0
// 	for {
// 		it.cursor = it.cursor % len(it.iterators)
// 		currIterator := it.iterators[it.cursor]
// 		if currIterator.hasNext() {
// 			return true
// 		} else {
// 			returnedFalseCount++
// 		}

// 		if returnedFalseCount >= len(it.iterators) {
// 			return false
// 		}
// 		it.cursor = (it.cursor + 1) % len(it.iterators)
// 	}
// }

// func (it *InterweavingIterator[T]) next() (T, error) {
// 	if !it.hasNext() {
// 		var z T
// 		return z, fmt.Errorf("no more elements")
// 	}

// 	iterator := it.iterators[it.cursor]
// 	it.cursor++
// 	return iterator.next()
// }

// func NewFilterIterator[T any](items []T, p Predicate[T]) *FilterIterator[T] {
// 	return &FilterIterator[T]{
// 		items:     items,
// 		cursor:    0,
// 		predicate: p,
// 	}
// }

// func (it *FilterIterator[T]) findNextMatch() bool {
// 	for it.cursor < len(it.items) {
// 		if it.predicate(it.items[it.cursor]) {
// 			return true
// 		}
// 		it.cursor++
// 	}
// 	return false
// }

// // func (it *FilterIterator[T]) getNextMatch() {
// //   for it.cursor < len(it.items) {
// //     if it.predicate(it.items[it.cursor]) {
// //       return
// //     }
// //     it.cursor++
// //   }
// //   return
// // }

// func (it *FilterIterator[T]) hasNext() bool {
// 	return it.findNextMatch()
// }

// func (it *FilterIterator[T]) next() (T, error) {
// 	if !it.hasNext() {
// 		var z T
// 		return z, fmt.Errorf("no more elements")
// 	}

// 	item := it.items[it.cursor]
// 	it.cursor++
// 	return item, nil
// }

// type SimpleIterator[T any] struct {
// 	items  []T
// 	cursor int
// }

// func NewSimpleIterator[T any](items []T) *SimpleIterator[T] {
// 	return &SimpleIterator[T]{
// 		items:  items,
// 		cursor: 0,
// 	}
// }

// func (it *SimpleIterator[T]) hasNext() bool {
// 	return it.cursor < len(it.items)
// }

// func (it *SimpleIterator[T]) next() (T, error) {
// 	if !it.hasNext() {
// 		var z T
// 		return z, fmt.Errorf("no more elements")
// 	}
// 	item := it.items[it.cursor]
// 	it.cursor++
// 	return item, nil
// }

// func main() {
// 	A := NewSimpleIterator([]int{1, 2, 3, 4, 5})
// 	B := NewFilterIterator([]int{11, 22, 33, 44}, func(i int) bool {
// 		return i%2 == 0
// 	})
// 	C := NewSimpleIterator([]int{100, 200})
// 	D := NewSimpleIterator([]int{300, 400, 500})

// 	interweave := NewInterweavingIterator([]Iterators[int]{A, B, C, D}...)

// 	fmt.Println(interweave.hasNext())
// 	fmt.Println(interweave.next())

// 	fmt.Println(interweave.hasNext())
// 	fmt.Println(interweave.next())

// 	fmt.Println(interweave.hasNext())
// 	fmt.Println(interweave.next())

// 	fmt.Println(interweave.hasNext())
// 	fmt.Println(interweave.next())

// 	fmt.Println(interweave.hasNext())
// 	fmt.Println(interweave.next())

// 	fmt.Println(interweave.hasNext())
// 	fmt.Println(interweave.next())

// 	fmt.Println(interweave.hasNext())
// 	fmt.Println(interweave.next())

// 	fmt.Println(interweave.hasNext())
// 	fmt.Println(interweave.next())

// 	fmt.Println(interweave.hasNext())
// 	fmt.Println(interweave.next())

// 	fmt.Println(interweave.hasNext())
// 	fmt.Println(interweave.next())

// 	fmt.Println(interweave.hasNext())
// 	fmt.Println(interweave.next())

// 	fmt.Println(interweave.hasNext())
// 	fmt.Println(interweave.next())
// }