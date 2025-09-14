
// use std::collections::HashSet;

// Declaramos la estructura vacía "Solution"

fn judge_circle(moves: String) -> bool {
    let mut x = 0;
    let mut y = 0;


    for move_robot in moves.chars() {

        match move_robot {
            'U' => y += 1,
            'D' => y -= 1,
            'R' => x += 1,
            'L' => x -= 1,
            _ => (),
        }
        
    }

    x == 0 && y ==0
}


fn main() {
    let moves: &'static str = "UD";
    println!("Result: {}",judge_circle(moves.to_string()));
}
