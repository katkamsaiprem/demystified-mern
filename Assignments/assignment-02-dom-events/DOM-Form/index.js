const username = document.getElementById("fullName")//stored elements reference in variables
const gmail = document.getElementById("email")
const rollnumber = document.getElementById("rollnumber")
const selectBranch = document.getElementById("branch")
const age = document.getElementById("age")
const submit = document.getElementById("submit")

const givenRollNumber = document.getElementById("searchRollNumber")

const searchButton = document.getElementById("searchButton")
const usersInfo = []//created array to store user data as objects

submit.addEventListener("click", () => {// event listener triggers, when onclick event occurs, onclick event is handled by eventhandler callback function

    const userInfo = {//storing users data as objects and adding into array
        userFullName: username.value,
        gmail: gmail.value,
        rollnumber: rollnumber.value,
        selectBranch: selectBranch.value,
        age: age.value,


    }
    console.log(userInfo);
    usersInfo.push(userInfo);
    console.log(usersInfo);




})




searchButton.addEventListener("click", () => {



    const getStudentInfo = (rollNumber) => {
        try {
            for (let index = 0; index < usersInfo.length; index++) {

                if (rollNumber == usersInfo[index].rollnumber) {


                    return usersInfo[index]
                }

            }

        }
        catch (er) {
             console.log("not found",er)
        }


    }
    const requiredObj = getStudentInfo(givenRollNumber.value)


    console.log("take your info", requiredObj);
})