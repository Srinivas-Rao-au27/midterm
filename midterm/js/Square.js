function calculateSquare() {
            var input = document.getElementById("numberInput").value;
            var resultBox = document.getElementById("resultScreen");
            
            if (input === "" || isNaN(input)) {
                resultBox.innerText = "Oops! Please type a valid number."; 
            } else {
                var num = Number(input); 
                var square = num * num; 
                resultBox.innerText = "The square of " + num + " is " + square + "!"; 
            }
        }

        function setDarkMode() {
            document.body.classList.remove("light-mode"); 
            document.body.style.backgroundColor = "#343a40"; 
            document.body.style.color = "white"; 
        }

        function setLightMode() {
            document.body.classList.add("light-mode"); 
            document.body.style.backgroundColor = "white"; 
            document.body.style.color = "black"; 
        }

        setDarkMode();