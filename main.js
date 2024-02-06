let switchCtn = document.querySelector("#switch-cnt");
        let switchC1 = document.querySelector("#switch-c1");
        let switchC2 = document.querySelector("#switch-c2");
        let switchCircle = document.querySelectorAll(".switch__circle");
        let switchBtn = document.querySelectorAll(".switch-btn");
        let aContainer = document.querySelector("#a-container");
        let bContainer = document.querySelector("#b-container");
        let allButtons = document.querySelectorAll(".submit");
        
        let getButtons = (e) => e.preventDefault();
        
        let changeForm = (e) => {
        
            switchCtn.classList.add("is-gx");
            setTimeout(function(){
                switchCtn.classList.remove("is-gx");
            }, 1500);
        
            switchCtn.classList.toggle("is-txr");
            switchCircle[0].classList.toggle("is-txr");
            switchCircle[1].classList.toggle("is-txr");
        
            switchC1.classList.toggle("is-hidden");
            switchC2.classList.toggle("is-hidden");
            aContainer.classList.toggle("is-txl");
            bContainer.classList.toggle("is-txl");
            bContainer.classList.toggle("is-z200");
        };
        
        let mainF = (e) => {
            for (var i = 0; i < allButtons.length; i++)
                allButtons[i].addEventListener("click", getButtons );
            for (var i = 0; i < switchBtn.length; i++)
                switchBtn[i].addEventListener("click", changeForm);
        };
        
        window.addEventListener("load", mainF);
        
        function redirectAndSave() {
            const username = document.getElementById("username").value;
            const password = document.getElementById("password").value;
            localStorage.setItem("username", username);
            localStorage.setItem("password", password);
            window.location.href = "dashboard.html";
        }

        function signIn() {
            const enteredUsername = document.getElementById("username").value;
            const enteredPassword = document.getElementById("password").value;

            fetch('/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    username: enteredUsername,
                    password: enteredPassword
                })
            })
            .then(response => {
                if (response.ok) {
                    window.location.href = "dashboard.html";
                } else {
                    alert("Invalid username/password combination");
                }
            })
            .catch(error => {
                console.error('Error:', error);
                alert("An error occurred. Please try again.");
            });
        }
        alert("test")
