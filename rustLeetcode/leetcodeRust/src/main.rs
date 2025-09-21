pub fn count_key_changes(s: String) -> i32 {
   let mut count = 0;
   let chars_str= s.to_lowercase();
   let mut current_char:char = ' ';

   for char in chars_str.chars() {
       if char != current_char {
           current_char = char;
           count += 1;
       }
   }

   count - 1
}

fn main() {
    let s = "aAbBcC";
    println!("Numbers: {}", count_key_changes(s.to_string()));
}