const cekNamaSiswa = (siswa) =>
    new Promise((resolve, reject) => {
        setTimeout(() => {
            const dataSiswa = ['Upin', 'Ipin', 'Fizi', 'Ehsan', 'Jarjit', 'Susanti',
                'Mail', 'Mei-Mei', 'Devi'
            ]
            let cek = dataSiswa.find((item) => {
                return item == siswa;
            });
            if (cek) {
                resolve(cek);
            } else {
                reject(new Error("Siswa ini bukan siswa dari TK Tadika Mesra"))
            }
        }, 3000);
    })

// Them Catch
// Start
cekNamaSiswa("Ayu")
    .then((result) => {
        console.log("Siswa ini merupakan siswa TK Tadika Mesra")
    })
    .catch((error) => {
        console.log(error.message)
    })
    // End

// Try Catch
// Start
const manggilCelNamaSiswa = async() => {
    try {
        let result = await cekNamaSiswa("Fizi")
        console.log(result)
    } catch (error) {
        console.log(error.message)
    } finally {
        console.log("Selesai")
    }
};
// End

manggilCekNamaSiswa()