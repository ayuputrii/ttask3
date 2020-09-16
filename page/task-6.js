const sent = (kalimat) => {
    let result = "";
    let str = kalimat.split(' ')

    for (let i = str.length - 1; i >= 0; i--) {
        if (i == str.length - 1) {
            result += "";
        } else {
            result += " ";
        }

        result += str[i]
    }
    console.log(result)
}
sent('Saya Belajar Javascript')