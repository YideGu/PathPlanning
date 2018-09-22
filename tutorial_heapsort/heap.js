/*|\/||\/||\/||\/||\/||\/||\/||\/||\/||\/||\/||\/||\/||\/||\/||\/||\/||\/||\/||\
|\/||\/||\/||\/||\/||\/||\/||\/||\/||\/||\/||\/||\/||\/||\/||\/||\/||\/||\/||\/|
||\/||\/||\/||\/||\/||\/||\/||\/||\/||\/||\/||\/||\/||\/||\/||\/||\/||\/||\/||\/
/||\/||\/||\/||\/||\/||\/||\/||\/||\/||\/||\/||\/||\/||\/||\/||\/||\/||\/||\/||\

    Heap Sort Stencil | JavaScript support functions

    Quick JavaScript Code-by-Example Tutorial 
     
    @author ohseejay / https://github.com/ohseejay
                     / https://bitbucket.org/ohseejay

    Chad Jenkins
    Laboratory for Perception RObotics and Grounded REasoning Systems
    University of Michigan

    License: Michigan Honor License 

|\/||\/||\/||\/||\/||\/||\/||\/||\/||\/||\/||\/||\/||\/||\/||\/||\/||\/||\/||\/|
||\/||\/||\/||\/||\/||\/||\/||\/||\/||\/||\/||\/||\/||\/||\/||\/||\/||\/||\/||\/
/||\/||\/||\/||\/||\/||\/||\/||\/||\/||\/||\/||\/||\/||\/||\/||\/||\/||\/||\/||\
\/||\/||\/||\/||\/||\/||\/||\/||\/||\/||\/||\/||\/||\/||\/||\/||\/||\/||\/||\/*/


// create empty object 
minheaper = {}; 

// define insert function for min binary heap
function minheap_insert(heap, new_element) {
    var index = heap.length;
    var temp;
    heap[index] = new_element;
    //console.log("successfully inserted");
    //console.log(Math.floor(((index - 1) / 2)));
    while (index > 0) {
        if (heap[index] < heap[Math.floor((index - 1) / 2)]) {
            temp = heap[index];
            heap[index] = heap[Math.floor((index - 1) / 2)];
            heap[Math.floor((index - 1) / 2)] = temp;
            index = Math.floor((index - 1) / 2);
            console.log("successfully exchanged");
        }
        else {
            break;
        }
    }
    // STENCIL: implement your min binary heap insert operation
}

// assign insert function within minheaper object
minheaper.insert = minheap_insert;
/* Note: because the minheap_insert function is an object, we can assign 
      a reference to the function within the minheap object, which can be called
      as minheap.insert
*/

// define extract function for min binary heap
function minheap_extract(heap) {
    var returnval = heap[0]; //store the return value
    var index = 0;
    var temp; //used for exchange value
    heap[0] = heap[heap.length - 1];
    heap.pop();
    while (2 * index + 1 < heap.length) {
        if (2 * index + 2 < heap.length) {
            if (heap[2 * index + 1] < heap[2 * index + 2]) {
                if (heap[index] > heap[2 * index + 1]) {
                    temp = heap[index];
                    heap[index] = heap[2 * index + 1];
                    heap[2 * index + 1] = temp;
                    index = 2 * index + 1;
                }
                else {
                    break;
                }
            }
            else {
                if (heap[index] > heap[2 * index + 2]) {
                    temp = heap[index];
                    heap[index] = heap[2 * index + 2];
                    heap[2 * index + 2] = temp;
                    index = 2 * index + 2;
                }
                else {
                    break;
                }
            }
        }
        else {
            if (heap[index] > heap[2 * index + 1]) {
                temp = heap[index];
                heap[index] = heap[2 * index + 1];
                heap[2 * index + 1] = temp;
                index = 2 * index + 1;
            }
            else {
                break;
            }
        }
        
    }
    return returnval;
    // STENCIL: implement your min binary heap extract operation
}

// assign extract function within minheaper object

minheaper.extract = minheap_extract;    // STENCIL: ensure extract method is within minheaper object






