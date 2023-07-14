let text = "My name is Deveshi"
let result = text.search(/deveshi/i);
let replaceResult = text.replace(/deveshi/i,"Bob");

console.log("My result is ",result,replaceResult);

let text2 = "bitter butter was actually very bitter";
let result2 = text2.match(/bitter/g);
console.log("The result for using g modifier is ", result2);

let text3="abbbracadabra";
let result3 = text3.match(/ab*ra/g);
console.log("Result 3",result3);

// Function to test a regular expression against a given input
function testRegex(regex, input) {
    return regex.test(input);
  }
  
  // Example regular expressions
  const regexes = [
    /\d+/, // Matches one or more digits
    /[a-zA-Z]+/, // Matches one or more alphabetic characters
    /^\w+$/, // Matches a word consisting of alphanumeric characters or underscores
    /^\d{3}-\d{3}-\d{4}$/, // Matches a phone number in the format xxx-xxx-xxxx
    /^\w+@\w+\.\w+$/, // Matches an email address
    /^(\d{1,3}\.){3}\d{1,3}$/ // Matches an IPv4 address
  ];
  
  // Example inputs
  const inputs = [
    "12345",
    "abc",
    "HelloWorld_123",
    "123-456-7890",
    "test@example.com",
    "192.168.0.1"
  ];
  
  // Testing each input against each regular expression
  for (const regex of regexes) {
    console.log(`Regular Expression: ${regex}`);
    for (const input of inputs) {
      console.log(`Input: ${input} - Result: ${testRegex(regex, input)}`);
    }
    console.log('---');
  }
  