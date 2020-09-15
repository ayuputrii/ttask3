const cekHariKerja = (day) => new Promise((resolve, reject) => {
    setTimeout(() => {
        const dataDay = ["Senin", "Selasa", "Rabu", "Kamis", "Jumat"]
        let cek = dataDay.find((item) => {
            return item = day;
        });
        if (cek) {
            resolve(cek);
        } else {
            reject(new Error("Hari ini bukan Hari kerja"))
        }
    }, 3000)
})

// Then Catch
// Start

cekHariKerja('Sabtu')
    .then((result) => {
        console.log("Hari ini adalah Hari Kerja")
    })
    .catch((error) => {
        console.log(error.message);
    })
    // End

// Try Catch
// Start

const manggilCekHariKerja = async() => {
    try {
        let result = await cekHariKerja('Senin');
        console.log(result)
    } catch (error) {
        console.log(error.message)
    } finally {
        console.log('Selesai')
    }
}
manggilCekHariKerja()
    // End

// Penjelasan Penggunaan dari Then Catch dan Try Catch

// Then Catch
/* Penjelasan: "Jadi, Then Catch ini berfungsi untuk menampilkan kalau hari yang kita input semisal Sabtu maka data tersebut tidak ada.
                hasil output nya Hari ini bukan hari kerja".
    Penggunaan aslinya dari:
    Then dan Catch sama-sama memiliki fungsi untuk menelolah hasil benar dan salah
    - Then: Mengindentifikasi promise reject lalu mengetahui benar atau tidaknya
    - Catch: Mengembalikan ke promise apabila kasusnya gagal*/

//Try Catch
/*Penjelasan: "Jadi, Try Catch disini berfungsi untuk menampilkan Hari ini hari kerja.
               Maka hasil yang akan keluar adalah hari yang sesuai di Input".

    Penggunaan aslinya dari:
    - Try: Menentukan block code yang akan diuji untuk kesalahan sedang di eksekusi
    - Catch: Mengembalikan ke promise apabila kasusnya gagal */