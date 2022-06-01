const url = "http://localhost:5500/api"
const newUser = {
  name: "Lafera Adh",
  avatar: "https://cdn1.iconfinder.com/data/icons/people-avatars-23/24/people_avatar_head_wolverine_logan_xman_marvel-512.png",
  city: "Cabrobó"
}

function getUser() {
  axios.get(url)
    .then(response => {
      const data = response.data
      renderResults.textContent = JSON.stringify(data)
    })
    .catch(error => console.log(error))
}
getUser();

function addNewUser() {
  axios.post(url, newUser)
    .then(response => {
      alert(JSON.stringify(response.data))
    })
    .catch(error => console.log(error))
}
addNewUser();