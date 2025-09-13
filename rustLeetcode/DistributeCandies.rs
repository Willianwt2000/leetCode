use std::collections::HashSet;

// Declaramos la estructura vacía "Solution"

pub fn distribute_candies(candy_type: Vec<i32>) -> i32 {
    let  n = candy_type.len();

    let  max_to_eat = n / 2;

    let mut only_type: HashSet<i32> = HashSet::new();

    for candy in candy_type {
        only_type.insert(candy);
    }
    std::cmp::min(only_type.len(), max_to_eat) as i32
}

fn main() {
    let new_candy = vec![1,1,2,3];

    // Llamamos al método usando la struct "Solution"
    let result = distribute_candies(new_candy);

    println!(
        "El número de empleados que cumplió con el objetivo es: {}",
        result
    );
}
