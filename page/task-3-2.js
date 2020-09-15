const cekMataPelajaran = (mapel) =>
    new Promise((resolve, reject) => {
        setTimeout(() => {
            const dataMapel = ['Bahasa Indonesia', ' Bahasa Inggris', 'Ipa', 'Ips']
            let cek = dataMapel.find((item) => {
                return item == mapel;
            });
            if (cek) {
                resolve(cek);
            } else {
                reject(new Error("Mata Pelajaran ini tidak ada di hari Rabu"))
            }
        }, 3000);
    })

// Them Catch
// Start
cekMataPelajaran("Matematika")
    .then((result) => {
        console.log("Mata Pelajaran ini terdapat di hari Rabu")
    })
    .catch((error) => {
        console.log(error.message)
    })
    // End

// Try Catch
// Start
const manggilCekMapel = async() => {
    try {
        let result = await cekMataPelajaran("Ipa")
        console.log(result)
    } catch (error) {
        console.log(error.message)
    } finally {
        console.log("Selesai")
    }
};
manggilCekMapel()
    // End