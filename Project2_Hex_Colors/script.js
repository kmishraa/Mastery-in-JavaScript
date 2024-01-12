function changeColor()
{
  var hex_numbers = ["0","1","2","3","4","5","6","7","8","9","A", "B", "C", "D", "E", "F"];

  var hexcode = '';
  
  for(var i = 0; i<6; i++){
    var random_index = Math.floor(Math.random() * hex_numbers.length);
    hexcode += hex_numbers[random_index];
  }

  document.getElementById("hex-code").innerHTML = hexcode;
  document.body.style.backgroundColor = '#' + hexcode;
}

// The changeColor function is defined to change the background color of the body and display a randomly generated hex code on the webpage.

// An array named hex_numbers is created, containing the characters 0-9 and A-F. These characters represent the valid digits in a hexadecimal number.

// An empty string hexcode is initialized to store the generated hex code.

// A for loop is used to iterate 6 times (for each character in the hex code). Inside the loop, a random index is generated using Math.random() multiplied by the length of the hex_numbers array, and the corresponding hexadecimal digit is appended to the hexcode string.

// The inner HTML of an element with the id "hex-code" is set to the generated hex code. This assumes that there is an HTML element with the id "hex-code" on the webpage where you want to display the hex code.

// The background color of the document.body is set to the generated hex code, resulting in a change in the background color of the entire webpage.