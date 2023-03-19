
const fs = require('fs');
const colors = require('colors');

const crearArchivoTabla = async(base = 5, listar = false, hasta= 10) => {

    try {
        if(listar){
            console.log('====================='.cyan);
            console.log('Tabla del:'.green, colors.blue(base)  );
            console.log('====================='.cyan);
        }
        
        let salida= ''; 
        let consola = '';
        
        for (let i = 1; i <= hasta; i++) {
            salida += `${base} x ${i} = ${base * i}\n`;
            consola += `${base} ${'x'.green} ${i} ${'='.green} ${base * i}\n`;
        }
        if(listar){
            console.log(consola);
        }
    
        fs.writeFileSync(`./salida/tabla${base}-.txt`, salida);
        return `tabla de ${base} creada`;
        
    } catch (error) {
        throw error;
    }

}

module.exports={
    crearArchivoTabla
}
