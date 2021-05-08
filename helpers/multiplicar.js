
const fileSystem = require('fs');
const colors = require('colors');

const crearArchivo = async (base = 5, listar = false, hasta = 10) => {

    try {

        let salida, consola = '';


        for (let i = 1; i <= hasta; i++) {
            salida += `${base} x  ${i} = ${base * i}\n`;
            consola += `${base} ${'x'.green} ${i} ${'='.red} ${base * i}\n`;
        }

        if (listar) {
            console.log('=========================='.green);
            console.log('      Tabla del: ', colors.blue(base));
            console.log('==========================='.green);
            console.log(consola);
        }
        /*
        fileSystem.writeFile(`tabla-${base}.txt`, salida, (err) => {
            if(err){
                throw err;
            }
            console.log('se creo el archivo')
        });
        */
        console.log(` Tabla del ${base} `)
        fileSystem.writeFileSync(`./salida/tabla-${base}.txt`, salida);
        return `tabla-${base}.txt`;

    } catch (err) {
        throw err;

    }




}

module.exports = {
    crearArchivo
}