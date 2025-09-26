pub fn add_digits(num: i32) -> i32 {

    let str_nums = num.to_string();
    let mut total_sum = 0;

    for  i in 0..str_nums.len()  {
        let current_char = str_nums.chars().nth(i).unwrap(); 
        let current_char2 = str_nums.chars().nth(i + 1).unwrap(); 

        let digit_result: Option<u32> = current_char.to_digit(10);
        let digit_result2: Option<u32> = current_char2.to_digit(10);


        println!("{}",i);
        if total_sum >= 0 {
            total_sum = digit_result + digit_result2 
        }
    }



    0
}

fn main() {
    let num = 38;
    println!("{}", add_digits(num));
}
