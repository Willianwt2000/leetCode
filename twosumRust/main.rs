use std::collections::HashMap;

impl Solution {
    pub fn two_sum(nums: Vec<i32>, target: i32) -> Vec<i32> {
        let mut map = HashMap::new();

        for (index, &num) in nums.iter().enumerate() {
            let complement = target - num;

            if map.contains_key(&complement) {
                return vec![*map.get(&complement).unwrap(), index as i32];
            }

            map.insert(num, index as i32);
        }

        // Esta línea es teórica, ya que el problema garantiza una solución.
        vec![]
    }
}
