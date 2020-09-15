const cekHariKerja = (day) => new Promise((resolve, reject) => {
    setTimeout(() => {
        const dataDay = ["Senin", "Selasa", "Rabu", "Kamis", "Jumat"]
        let cek = dataDay.find((item) => {
            return item = day
        })
    })
})