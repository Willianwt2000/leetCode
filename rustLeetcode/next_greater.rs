// use std::collections::HashSet;

// Declaramos la estructura vacía "Solution"

// use std::collections::HashMap;

// fn unique_number(nums: Vec<i32>) -> i32 {

//    //frequensy
//    let mut frequensy: HashMap<i32,i32> = HashMap::new();

//    for number in nums {

//        if frequensy.contains_key(&number) {
//            let current = frequensy.get(&number).unwrap();
//            frequensy.insert(number, current + 1);
//        } else {
//            frequensy.insert(number, 1);
//        }
//    }

//    for (key,value) in &frequensy {
//        if *value == 1 {
//          return *key;
//        }
//    }

//    0
// }

pub fn next_greater_element(nums1: Vec<i32>, nums2: Vec<i32>) -> Vec<i32> {
    let mut ouput = vec![];

    for num_one in nums1 {
        //num to compare
        let nums_to_compare = num_one;
        let mut found = false;

        for i in 0..nums2.len() {
            if nums_to_compare == nums2[i] {
              let mut next = -1;

                for j in  i + 1..nums2.len() {
                    if nums2[j] > nums2[i] {
                        next = nums2[j];
                        break;
                    }
                }
                ouput.push(next);
                found = true
                
            }
        }
    }

    ouput
}

fn main() {
    let nums1 = vec![1,3,5,2,4];
    let nums2 = vec![6,5,4,3,2,1,7];

    println!("Result: {:?}", next_greater_element(nums1, nums2));
}
