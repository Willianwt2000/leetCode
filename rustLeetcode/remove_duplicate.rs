pub fn remove_duplicates(s: &str) -> String {

    let mut group: Vec<char> = Vec::new();

    for char in s.chars() {

        if let Some(&last_char) = group.last() {

            if last_char == char {
                group.pop();
            } else {
                group.push(char);
            }
        } else {
            group.push(char);
        }
       
    }
    group.iter().collect()
}

fn main() {
    let str= remove_duplicates("abbaca");
    println!("{}",str);
}
