
import React, { useRef } from 'react';
import { CloudUpload } from 'lucide-react';
import * as XLSX from 'xlsx';

const UploadButton = () => {
  const fileInputRef = useRef(null);

  const handleButtonClick = () => {
    fileInputRef.current.click(); // Trigger click event on file input
  };

  const convertCsvToExcel = (csvData) => {
    // Convert CSV data to Excel workbook
    const workbook = XLSX.read(csvData, { type: 'binary' });
    const newWorkbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(newWorkbook, workbook.Sheets[workbook.SheetNames[0]], 'Sheet1');

    // Save the workbook as an Excel file
    XLSX.writeFile(newWorkbook, 'converted_excel.xlsx');
  };

  const handleFileUpload = (event) => {
    const file = event.target.files[0]; // Get the selected file

    // Read the selected file
    const reader = new FileReader();
    reader.onload = (e) => {
      const csvData = e.target.result; // Get the CSV data
      convertCsvToExcel(csvData); // Convert CSV to Excel
    };
    reader.readAsBinaryString(file); // Read file as binary string
  };

  return (
    <div className="bg-white h-[80%] w-[60%] flex items-center justify-center rounded-xl ">
      {/* Hidden file input */}
      <input
        ref={fileInputRef}
        type="file"
        accept=".csv" // Accept only CSV files
        className="hidden"
        onChange={handleFileUpload}
      />
      
      <label 
        htmlFor="fileInput" 
        className="w-[75%] h-[80%] bg-white border-2 border-black flex flex-col rounded-xl gap-6 items-center justify-center relative cursor-pointer"
        onClick={handleButtonClick} // Trigger handleButtonClick when label is clicked
      >
        <div className='bg-gradient-to-r from-lime-100 to-lime-800 w-[100%] h-[15%] text-white flex items-center justify-center'>
          <CloudUpload />
        </div>
        <div className='bg-gradient-to-r from-lime-100 to-lime-800 w-[100%] h-[15%] text-white flex items-center justify-center'>
          Click on this area to upload CSV File
        </div>
        <div className='bg-gradient-to-r from-lime-100 to-lime-800 w-[100%] h-[20%] text-white flex items-center justify-center'>
          Support for a single small upload. Strictly prohibited from uploading company data or other banned files
        </div>
      </label>
    </div>
  );
}

export default UploadButton;

