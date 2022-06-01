const url = "http://localhost:5500/api"
const newUser = {
  name: "Lafera Adh",
  avatar: "https://cdn1.iconfinder.com/data/icons/people-avatars-23/24/people_avatar_head_wolverine_logan_xman_marvel-512.png",
  city: "Cabrobó"
}
const UpdateUser = {
  name: "Laferovisk Kadshin",
  avatar: "https://cdn1.iconfinder.com/data/icons/people-avatars-23/24/people_avatar_head_wolverine_logan_xman_marvel-512.png",
  city: "Recife"
}

function getUser() {
  axios.get(url)
    .then(response => {
      const data = response.data
      renderResults.textContent = JSON.stringify(data)
    })
    .catch(error => console.log(error))
}
// getUser();

function addNewUser() {
  axios.post(url, newUser)
    .then(response => {
      alert(JSON.stringify(response.data))
    })
    .catch(error => console.log(error))
}
// addNewUser();

function updateUser() {
  axios.put(`${url}/3`, UpdateUser)
    .then(response => {
      alert(JSON.stringify(response.data))
    })
    .catch(error => console.log(error))
}
// updateUser();

function deleteUser() {
  axios.delete(`${url}/7`)
    .then(response => {
      alert(JSON.stringify(response.data))
    })
    .catch(error => console.log(error))
}
// deleteUser();

function getOnseUser() {
  axios.get(`${url}/2`)
    .then(response => {
      const data = response.data
      renderResults.textContent = JSON.stringify(data)
    })
    .catch(error => console.log(error))
}

getOnseUser();