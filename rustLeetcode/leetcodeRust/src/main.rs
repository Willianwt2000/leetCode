pub fn add_digits(num: i32) -> i32 {
    if num == 0 {
        return 0;
    }

    println!("Debug: {}",1 +(num - 1) % 9);
    return 1 + (num - 1) % 9;
}

fn main() {
    let num = 3;
    println!("{}", add_digits(num));
}
