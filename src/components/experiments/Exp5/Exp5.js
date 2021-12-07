import React, { useState, useEffect } from 'react';
import XLSX from 'xlsx';
import writeFileP from 'write-file-p';

const Exp5 = () => {
  const [excelData, setExcelData] = useState({});

  const iStart = 5;
  const iEnd = 38;
  const iName = 0;
  const iPhone = 1;
  const curso = '';
  const iSheet = 0;

  useEffect(() => {
    let str = '';

    if (excelData.data) {
      excelData.data.map((row, index) => {
        if (index >= iStart && index <= iEnd) {
          str =
            str +
            `BEGIN:VCARD\nVERSION:2.1\nFN:${row[iName]} ${curso}\nTEL;HOME:${row[iPhone]}\nEND:VCARD\n`;
        }
        return null;
      });
      console.log(str);
      const blob = new Blob([str], { type: 'text/plain' });
      const url = URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.download = `Contactos ${curso}.vcf`;
      link.href = url;
      link.click();
    }
    //console.log(str);
  }, [excelData]);

  const make_cols = (refstr) => {
    let o = [],
      C = XLSX.utils.decode_range(refstr).e.c + 1;
    for (var i = 0; i < C; ++i)
      o[i] = { name: XLSX.utils.encode_col(i), key: i };
    return o;
  };

  const excelToJson = (e, rABS) => {
    const bstr = e.target.result;
    const wb = XLSX.read(bstr, { type: rABS ? 'binary' : 'array' });
    const wsname = wb.SheetNames[iSheet];
    const ws = wb.Sheets[wsname];

    const data = XLSX.utils.sheet_to_json(ws, { header: 1 });
    setExcelData({ data: data, cols: make_cols(ws['!ref']) });
  };

  const loadFileXLSX = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();
    const rABS = !!reader.readAsBinaryString;
    reader.onload = (e) => excelToJson(e, rABS);

    if (rABS) reader.readAsBinaryString(file);
    else reader.readAsArrayBuffer(file);
  };

  return <input type='file' onChange={(e) => loadFileXLSX(e)} />;
};

export default Exp5;
