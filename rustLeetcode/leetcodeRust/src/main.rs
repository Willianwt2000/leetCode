use std::collections::HashMap;

pub fn is_anagram(s: String, t: String) -> bool {
    if s.len() != t.len() {
        return false;
    }
    
    let mut char_counts = HashMap::new();

    for c in s.chars() {
        *char_counts.entry(c).or_insert(0) += 1;
    }

    for c in t.chars() {
        let count: Option<&mut i32> = char_counts.get_mut(&c);
        if let Some(c) = count {
            if *c == 0 {
                return false;
            }
            *c -= 1;
        } else {
            return false;
        }
    }

    char_counts.values().all(|&count| count == 0)
}

fn main() {
    let s = "anagram";
    let t = "nagaram";
    println!("{} {} {}", s, t, is_anagram(s.to_string(), t.to_string()));
    
}