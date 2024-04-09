import { InboxOutlined } from "@ant-design/icons";
import { message, Upload } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { updateStepsStatus } from "../../redux/steps/stepsSlice";
import { setUploadedFile } from "../../redux/csvData/csvDataSlice";
import { formatCSVToDataArray } from "../../utils/index";
import { CloudUpload } from 'lucide-react';

const { Dragger } = Upload;

const CSVUpload = () => {
  const dispatch = useDispatch();
  const csvData = useSelector((state) => state?.csvInfo?.file);

  const props = {
    name: "file",
    accept: ".csv",
    multiple: false,
    maxCount: 1,
    defaultFileList: csvData ? [csvData] : [],
    action: "https://run.mocky.io/v3/435e224c-44fb-4773-9faf-380c5e6a2188",
    onChange(info) {
      const { status } = info.file;
      // if (status !== "uploading") {
      //   console.log(info.file, info.fileList, "data");
      // }
      if (status === "done") {
        // Read the file content and parse it
        const reader = new FileReader();
        reader.onload = async (e) => {
          const csv = e.target.result;
          const result = formatCSVToDataArray(csv); // Parse the CSV
          const payload = {
            file: {
              name: info.file.name,
              size: info.file.size
            },
            csvData: csv,
            spreadSheetData: result.data
          };

          if (result) {
            dispatch(setUploadedFile(payload));
            dispatch(
              updateStepsStatus({
                csvUpload: "finish"
              })
            );
            message.success(`${info.file.name} file uploaded successfully.`);
          } else {
            message.error(`Error parsing ${info.file.name} file.`);
          }
        };
        reader.readAsText(info.file.originFileObj);
      } else if (status === "error") {
        message.error(`${info.file.name} file upload failed.`);
      }
    }
  };

  return (
    <div className="w-full h-full flex items-center justify-center">
    <Dragger {...props} className="h-[70%]  border-2 border-black justify-center  w-full inline-flex  items-center  rounded-xl">
      <div className="bg-white h-[80%] border-2 border-black w-full inline-flex  flex-col items-center gap-4 justify-center rounded-xl ">
          <div className='bg-gradient-to-r  from-lime-100 to-lime-800 w-full h-14 text-white flex items-center justify-center'>
          <CloudUpload />
          </div>
          <div className='bg-gradient-to-r from-lime-100 to-lime-800 w-full  h-8 text-white flex items-center justify-center'>
            Click on this area to upload CSV File
          </div>      
          <div className='bg-gradient-to-r from-lime-100 to-lime-800 w-full h-8  text-white flex items-center justify-center'>
            Support for a single small upload. Strictly prohibited from uploading company data or other banned files
          </div>
      </div>
    </Dragger>
    </div>
  );
};

export default CSVUpload;
