// const header1 =document.getElementById("header")
// header.innerHTML=" "
// const header1 = document.getElementById("header")
// const title = document.getElementById('title')
// const user = {
//     firstname: "khaled",
//     lastn:"sammer",
//     dob:"1/1/2001"
// }
// header1.innerHTML = `  
// <h1> Welcome Mrs.${user.firstname} ${user.lastn} </h1>
// <h2> your birth date in our database is${user.dob} </h2>`
// const renderuser = function(firstname,lastn){
//     header1.innerHTML=` 
//     <h1> welcome Mr.${firstname}${lastn} </h1>
//    ` 
// }
const header = document.getElementById('header')
const title = document.getElementById("title")
const usernameInput =document.getElementById('usernameInput')
const passwordInput = document.getElementById('password')
const signInBtn = document.getElementById('signInbtn')
const mainCountainer = document.getElementById('mainCountainer')

const renderUser = function (user){
    mainCountainer.innerHTML= ''
    const firstName = document.createElement('h2')
    firstName.innerText = `first name: ${user.firstName}`
    const lastName = document.createElement('h2')
    lastName.innerText = `last name: ${user.lastName}`
    const lastlogi



}