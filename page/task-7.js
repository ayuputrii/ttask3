function divideAndSort(angka) {
    if (typeof angka !== 'number') {
        console.log('Data Harus Nomor')
        return
    } else {
        let newAngka = angka
            .toString()
            .split('0')
            .map(item => {
                return item.split('').sort().join('')
            })
        const hasil = newAngka.join('')
        return parseInt(hasil)
    }
}
console.log(divideAndSort(5956560159466056))