const getmonth = (callback) => {
    setTimeout(() => {
        let error = false;
        let month = ['January', 'February', 'March', 'April', 'Mei', 'June', 'July',
            'August', 'September', 'October', 'November', 'December'
        ]
        if (!error) {
            callback(null, month)
        } else {
            callback(new Error('Sorry, Data Not Found!'))
        }
    }, 4000)
}

const dapatkanBulan = (async(err, bln) => {
    try {
        const dapatkanBulan = await bln.map(item => {
            return item
        })
        if (dataBulan.length == 0) {
            return false
        }
        console.log(dataBulan)
    } catch (error) {
        console.log(err.messag)
    } finally {
        console.log('Selesai')
    }
});

getmonth(dapatkanBulan)