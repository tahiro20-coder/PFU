// form errors //
const mailInput = document.querySelector(".email-field input");
const mailError = document.querySelector(".email-field .error-msg");

const pwdInput = document.querySelector(".pwd-field input");
const pwdError = document.querySelector(".pwd-field .error-msg");

const logInButton = document.querySelector(".left .user-info .submit-box .log");

const formErrors = {
    mail: false,
    pwd: false,
};

// mail //
mailInput.addEventListener("input", (e) => {
    let test = validMail(e.target.value);

    if (test == true) {
        formErrors.mail = true; // set mail error //
        mailError.innerHTML = ""; // remove error msg //
        e.target.classList.remove("error-mail"); // set the box error style //
    } else if (test == false) {
        formErrors.mail = false; // set mail error //
        mailError.innerHTML = "Invalid Email address"; // set error msg //
        e.target.classList.add("error-mail"); // remove the box error style //
    
    } else if (test == "mail empty") {
        formErrors.mail = false; // set mail error //
        mailError.innerHTML = ""; // set error msg //
        e.target.classList.remove("error-mail"); // remove the box error style //
    }
});
//  //

// pwd //
pwdInput.addEventListener("input", (e) => {
    if (e.target.value.length >= 8 ) {
        formErrors.pwd = true; // remove pwd error //
        pwdError.innerHTML = ""; // remove error msg //
        e.target.classList.remove("error-pwd"); // remove the box error style //
    } else if (e.target.value.length == 0) {
        formErrors.pwd = false; // remove pwd error //
        pwdError.innerHTML = ""; // remove error msg //
        e.target.classList.remove("error-pwd"); // remove the box error style //
    } else {
        formErrors.pwd = false; // set pwd error //
        pwdError.innerHTML = "Password must be 8 characters at list"; // set error msg //
        e.target.classList.add("error-pwd"); // set the box error style //
    }
});
//  //

// active submit //
setInterval(() => {
    if (formErrors.mail == true && formErrors.pwd == true) {
        logInButton.classList.add("active");
    } else {
        logInButton.classList.remove("active");
    }
}, 500);
//  //

function validMail(mail) {
    if (mail == "") return "mail empty";

    let test = true;

    if (mail.includes("@")) {
        if (mail.includes(".")) {
            if (mail.indexOf("@") < mail.indexOf(".")) {
                let partOne = mail.split("@")[0];
                let partTow = mail.split("@")[1].split(".")[0];
                let partThree = mail.split("@")[1].split(".")[1];

                if (partOne != "" && !partOne.includes(" ")) {
                    if (partTow == "gmail") {
                        if (partThree == "com") {
                        } else {
                            test = false;
                        }
                    } else {
                        test = false;
                    }
                } else {
                    test = false;
                }
            } else {
                test = false;
            }
        } else {
            test = false;
        }
    } else {
        test = false;
    }

    return test;
}
//  //

