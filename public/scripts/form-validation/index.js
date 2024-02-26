const form = document.getElementById("form");
const username = document.querySelector(".username")
const email = document.querySelector(".email")
const password = document.querySelector(".password")
const baseURL = "http://localhost:3000/api/"


form.addEventListener("submit", async (e) => {
    e.preventDefault();
    let isValid = true;
    let errorMessage = '';

    if (username.value.trim() === '') {
        isValid = false;
        errorMessage += 'Name is required.\n';
      }
    
    if (!/^\S+@\S+\.\S+$/.test(email.value)) {
        isValid = false;
        errorMessage += 'Invalid email format.\n';
      }
    

    if (!isValid) {
        alert(errorMessage);
        return;
      }


      const data = {
        username: username.value,
        email: email.value,
        password: password.value
      }

      axios.post(`${baseURL}auth/sign-up`, data).then((res) => {
        console.log(res.data)
        alert(res.data.message)
        document.getElementById("form").reset()
        window.location.href = '/'
        return res.data
      }).catch(err => {
        alert(err)
      })
})