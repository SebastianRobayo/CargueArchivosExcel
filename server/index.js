const xlsx = require("xlsx");

// let archivo;

const ExcelAJSON = () => {
  const excel = xlsx.readFile(
    // `C:\\Users\\juana\\OneDrive\\Escritorio\\CargueArchivosExcel\\server\\archivos\\${archivo}`
    "C:\\Users\\juana\\OneDrive\\Escritorio\\CargueArchivosExcel\\server\\archivos\\1643226323866-prueba-prueba1.xlsx"
  );
  let nombreHoja = excel.SheetNames;
  let datos = xlsx.utils.sheet_to_json(excel.Sheets[nombreHoja[0]]);

  const jDatos = [];
  for (let i = 0; i < datos.length; i++) {
    const dato = datos[i];

    jDatos.push({
      ...dato,

      fecha: new Date((dato.fecha - (25567 + 0)) * 86400 * 1000),
    });
  }

  console.log(jDatos);
};

ExcelAJSON();
