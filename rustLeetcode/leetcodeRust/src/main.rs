pub fn xor_operation(n: i32, start: i32) -> i32 {
    let mut result = 0;
    for  i in 0..n  {
        result ^= start + 2 * i;
    }
    result
}

fn main() {
   let n = 5;
   let start = 0;
   println!("{}",xor_operation(n, start));
}
