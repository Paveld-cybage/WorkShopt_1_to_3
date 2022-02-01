
          var fruits = [];
          function addBook(){
          var newArray = document.getElementById("age").value;
          fruits.push(newArray);
          document.getElementById("age").value = "";
          let text = "<ul>"
          fruits.forEach(iterateFunc);
          text += "</ul>";
          document.getElementById("demo").innerHTML = text;

          function iterateFunc(value) {
              text += "<li>" + value + "</li>";
          }
          
           }
    
        //show books
        function showBooks() {
        let text = "<ul>";
        fruits.forEach(iterateFunc);
        text += "</ul>";
        document.getElementById("show").innerHTML = text;
    
        function iterateFunc(value) {
            text += "<li>" + value + "</li>";
        }
    }
    
        
       //Remove Books
          function removeBook() {
              var bookName = document.getElementById('deleteB').value;
              fruits.splice(fruits.indexOf(bookName),1)
        }
     //Show Updated Books
        function showUBooks() {
            let text = "<ul>";
            fruits.forEach(iterateFunc);
            text += "</u>";
            document.getElementById("show2").innerHTML = text;
        
            function iterateFunc(value) {
                text += "<li>" + value + "</li>";
            }
        }

        //Show Listed Books
        function listBooks() {
            let text = "<ul>";
            fruits.forEach(iterateFunc);
            text += "</u>";
            document.getElementById("show3").innerHTML = text;
        
            function iterateFunc(value) {
                text += "<li>" + value + "</li>";
            }
        }

        //Edit Books
       function editBookName() {
            var input = document.getElementById('input').value;
            var output = document.getElementById('output').value;
        for(var i=0; i < fruits.length; i++) {
            // fruits[i] = fruits[i].replace(/,/g, '');
            fruits[i] = fruits[i].replace(input, output);
           }
       }

       //show edited books
       function showEditedBooks() {
        let text = "<ul>";
        fruits.forEach(iterateFunc);
        text += "</u>";
        document.getElementById("show4").innerHTML = text;
    
        function iterateFunc(value) {
            text += "<li>" + value + "</li>";
        }
    }
        

        //Button My Functions
        function myFunction() {
            var x = document.getElementById("myDIV");
            if (x.style.display === "none") {
              x.style.display = "block";
            } else {
              x.style.display = "none";
            }
          }
  
          function myFunction1() {
            var x = document.getElementById("myDIV2");
            if (x.style.display === "none") {
              x.style.display = "block";
            } else {
              x.style.display = "none";
            }
          }
  
          function myFunction2() {
            var x = document.getElementById("myDIV3");
            if (x.style.display === "none") {
              x.style.display = "block";
            } else {
              x.style.display = "none";
            }
          }
  
          function myFunction3() {
            var x = document.getElementById("myDIV4");
            if (x.style.display === "none") {
              x.style.display = "block";
            } else {
              x.style.display = "none";
            }
          }
          