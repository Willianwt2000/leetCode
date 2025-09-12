// Declaramos la estructura vacía "Solution"
struct Solution;

impl Solution {
    pub fn number_of_employees_who_met_target(hours: Vec<i32>, target: i32) -> i32 {
        let mut count = 0;
        
        // La versión idiomática de Rust usaría un iterador:
        for &employee_hours in hours.iter() {
            println!("iter: {:?} ",employee_hours);
            if employee_hours >= target {
                count += 1
            }
        }
 
        //* return count

        // En Rust, la última expresión de la función se devuelve implícitamente,
        // por lo que `return count;` no es estrictamente necesario, solo `count`.
        count
    }
}

fn main() {
    // Definimos los datos de ejemplo
    let employee_hours = vec![8, 5, 2, 7, 10];
    let target_hours = 8;
    
    // Llamamos al método usando la struct "Solution"
    let result = Solution::number_of_employees_who_met_target(employee_hours, target_hours);
    
    println!("El número de empleados que cumplió con el objetivo es: {}", result);
}