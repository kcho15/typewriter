// Animated sentence revealing one character at a time as if being typed by someone 

const typewriter = str => {

  let timer = 50;
  for(const char of str) {
    setTimeout(() => {
      process.stdout.write(char); 
    }, timer)     // 1s delay to make it noticeable. Can dial it down later.
    timer += 50; // after the loop, increment the timer by 50 ms 
  }
  setTimeout(() => {
    console.log(''); 
  }, timer) // after all chars printed, new line is generated with empty console.log string 
}  
  
const sentence = "hello there from lighthouse labs";
typewriter(sentence); 