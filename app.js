// <!-- // chapter 20-25 task 1 -->

// <!-- //       var username = prompt("Enter your name: ", "");
// //     if (confirm("Your name is " + username)) {
// //        document.write("<h1>Hello, " + username + "!</h1>");
// //     } else {
// //        document.write("<h1>Hello, world!</h1>");
// //     }
// // </script> -->


// <!-- // chapter 20-25 task 2 -->
// <!-- <script type = "text/javascript">
//     var str = new String( "This is string" );
//     document.write("str.length is:" + str.length); 
// var str = prompt("  Enter mobile modal : ", "");
//      if (confirm("your  " + str)) {
//        document.write("<h1>Enter your favourate mobile model, " + str + "!</h1>");
//     } else {
//         document.write("<h1>length of string, </h1>");
//     }
// </script>  -->

// <!-- // chapter 20-25 task 3 -->

    // const country = ['P', 'A', 'K', 'I', 'S','T', 'A', 'N'];

    // console.log(country.indexOf('N'));

    // <!-- // chapter 20-25 task 4-->

    //  const country = ['h', 'e', 'l', 'l', 'o','w', 'o', 'r', 'l', 'd'];

    // console.log(country.indexOf('l'));


    // <!-- // chapter 20-25 task 5-->

    // const country = ['P', 'A', 'K', 'I', 'S','T', 'A', 'N'];

    //  console.log(country.indexOf('I'));

    
    // <!-- // chapter 20-25 task 6-->

    // var username = prompt("Enter your name: ", "");
    // if (confirm("Your name is " + username)) {
    //    document.write("<h1>Hello, " + username + "!</h1>");
    // } else {
    //    document.write("<h1>Hello, world!</h1>");
    // }
    // var str1 = "Hello ";
    
    // var res = str1.concat(username);

    // <!-- // chapter 20-25 task 7-->

//     const p = 'hyderabad';

// const d = /hyder/gi;

// document.write(p.replace(d, 'islam'));


    // <!-- // chapter 20-25 task 8-->

//     const p = 'Ali and Sami are best friends. They play cricket and football together';

// const regex = /and/gi;

// document.write(p.replace(regex, '&'));

// <!-- // chapter 20-25 task 9-->

// var text = '472';
// var integer = parseInt(text, 10);
// document.write("this is a number", integer);

// <!-- // chapter 20-25 task 10-->
// const fruit = prompt("Enter your fav fruit:");

// document.write(fruit.toLocaleUpperCase(fruit));

// <!-- // chapter 20-25 task 11-->


// function titleCase(string) {
//     var sentence = string.toLowerCase().split(" ");
//     for(var i = 0; i< sentence.length; i++){
//        sentence[i] = sentence[i][0].toUpperCase() + sentence[i].slice(1);
//     }
//  document.write(sentence.join(" "));
//  return sentence;
//  }
//  titleCase("java script");

// <!-- // chapter 20-25 task 12-->
// checked = 35.36;
// checkedNew = checked.toString().split('.').join("");
// document.write(checkedNew);

// <!-- // chapter 20-25 task 13-->

// var myInput = prompt("Enter your name:");
// function Validate() {
//     //Regex for Valid Characters i.e. Alphabets, Numbers and Space.
//     var a = /^[A-Za-z0-9 ]+$/
    

//     //Validate TextBox value against the Regex.
//     var isValid = a.test(document.myInput.value);
//     if (!isValid) {
//         alert("Contains Special Characters.");
//     } else {
//         alert("Does not contain Special Characters.");
//     }

//     return isValid;
// }

            // chapter 26-31 task 1-->

            //  const number = prompt("enter number");
            //  var e = Math.floor(number);
            //  var d = Math.round(number);
            // var c = Math.ceil(number);
            // document.write(e);
            // document.write(d);
            // document.write(c);
        
           // chapter 26-31 task 2-->
        //   const number = prompt("enter number");
        
        //       var e = Math.floor(number);
        //       var d = Math.round(number);
        //      var c = Math.ceil(number);
        //      document.write(e);
        //      document.write(d);
        //     document.write(c);

        // chapter 26-31 task 3-->
        // var a = -4;
        // var b = Math.abs(a);
        // document.write(b);

        // chapter 26-31 task 4-->
       
        // const a= Math.floor(Math.random() * 6);
        // document.write(a)
        // const b= Math.floor(Math.random() * 6);
        // document.write(b)

        
        // chapter 26-31 task 5-->

        // const a= Math.floor(Math.random() * 2);
        // document.write(a)
        // const b= Math.floor(Math.random() * 2);
        // document.write(b)

        // chapter 26-31 task 6-->

        // const a= Math.floor(Math.random() * 100);
        // document.write(a)

        // chapter 26-31 task 7-->
        // const number = prompt("enter your weight");
       
        // var a = parseInt(number) + "<br>";
        // var b = parseInt(number) + "<br>";
        // document.write(a,b)
        
         // chapter 26-31 task 7-->
        //  const number = prompt("enter number");
        //  const a= Math.floor(Math.random() * 10);
         
        //  if (number===a) {
        //      alert("congratulations!")
             
        //  } else {
        //      alert("try again")
             
        //  }

        // chapter 31-34 task 1-->
//         var today = new Date();

// var a = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
// var today = new Date();

// var b = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
// var today = new Date();

// var c = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();

// var d = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();

// var dateTime = c+' '+d;

// document.write(a,b,dateTime)

// chapter 31-34 task 2-->
// function myFunction() {
//     var month = new Array();
//     month[0] = "January";
//     month[1] = "February";
//     month[2] = "March";
//     month[3] = "April";
//     month[4] = "May";
//     month[5] = "June";
//     month[6] = "July";
//     month[7] = "August";
//     month[8] = "September";
//     month[9] = "October";
//     month[10] = "November";
//     month[11] = "December";
  
//     var d = new Date();
//     var n = month[d.getMonth()];
//     Document.write(n);

//  chapter 31-34 task 2-->






        
        




        



        


