const check = document.querySelector('#check');
        const checkMsg = document.querySelector('#checkMsg');

        const nameInput = document.querySelector('.name');
        const psdInput = document.querySelector('.psd');
        const msg = document.querySelector('#msg');
        const main = document.querySelector('.main');

        let img = ["https://www.google.com/url?sa=i&url=https%3A%2F%2Fstock.adobe.com%2Fsearch%3Fk%3Dquran%2Bopen&psig=AOvVaw1Rfx08mX9mFonuPn8utSdL&ust=1707521569871000&source=images&cd=vfe&opi=89978449&ved=2ahUKEwi05pvW85yEAxXcGnkGHSTQC3UQjRx6BAgAEBU"];
        let index = 0;
        let imglength = img.length;

        // Slider 
        setInterval(function(){
            var index1 = img[index]; 
            index++;
            if(index >= imglength){
                index = 0;
            }
            main.style.backgroundImage = `url(${index1})`;
        }, 4000);

        var a = 1;
        check.addEventListener('click', () => {
            load();
        });

        const load = () => {
            if(a == 1){
                checkMsg.style.color = "#fff";
                a = 0;
            } else {
                checkMsg.style.color = "#1db954";
                a = 1;
            }
        }

        load();

        const refresh = () => {
            if(nameInput.value == "" && psdInput.value == ""){
                msg.innerText = "Empty username & password";
            } else {
                msg.innerText = "";
                alert(`Welcome ${nameInput.value} - ( please confirm ${nameInput.value} & ${psdInput.value}))`);
                check.checked = false;
                load();
                window.location.href = "dashborad.html";
            }
            nameInput.value = "";
            psdInput.value = "";
        }


