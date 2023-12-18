const fs = require('fs')
const path = require('path');

const srsDir = process.argv[2]
const distDir = process.argv[3]

fs.readdir(srsDir, (err, data) => {
    if (err) console.log('%$#@!')
    
    const ext = ['.png', '.gif']
    const filtered = data.filter(
        (file) => ext.includes(path.extname(file))
    )

    filtered.forEach(
        file => {
            const sourse = path.join(srsDir, file)
            const distnation = path.join(distDir, file)

            fs.copyFile(sourse, distnation, (err) => {
                if (err)
                    console.log(err)
                else
                    console.log(`${file} has been copied`)
            })
        }
    )
})

