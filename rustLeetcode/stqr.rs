fn main() {
    fn my_sqrt(x: i32) -> i32 {
        let mut left: i64 = 0;
        let mut right: i64 = ((x as i64) + 1).into();
        let target: i64 = x.into();

        while left < right - 1 {
            let m = left + ((right - left) >> 1);

            println!("m={}", m);

            if target >= m * m {
                left = m;
            } else {
                right = m;
            }
        }

        println("Values: {}",left);0
        left as i32
    }

    my_sqrt(8);
  }
  