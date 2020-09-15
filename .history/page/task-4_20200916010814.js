function fetchData() {
    fetch("http://jsonplaceholder.typicode.com/users")
        .then((response) => {
            if (!response.ok) {
                throw error("Sorry, Data Not Found!")
            }
            return response.json();
        })
        .then((data) => {
            data.map(user => {
                console.log(user.name)
            })
        })
        .catch(error => {
            console.log(error)
        })
}

fetchData()