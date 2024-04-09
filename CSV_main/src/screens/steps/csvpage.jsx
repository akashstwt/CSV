import { Button, message, Steps } from "antd";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import CSVUpload from "../csvUpload/CsvUpload";
import SpreadSheet from "../spreadSheet/SpreadSheet";
import ChartComponent from "../dashboard/Dashboard";
import {
  setCurrentIndex,
  updateStepsStatus
} from "../../redux/steps/stepsSlice";

const Mainpage = () => {
  const dispatch = useDispatch();
  const { data: status, currentIndex } = useSelector(
    (state) => state?.stepsInfo
  );
  const steps = [
    {
      title: "CSV Upload",
      description:"Upload your CSV data file to get started.",
      subTitle: "Quick and Easy",
      status: status?.csvUpload,
      content: (
        <div className='h-[100%]  justify-center items-center '>
            <CSVUpload/>
            </div>
      )
    },
    {
      title: "View CSV",
      description: "View your uploaded CSV data and make edits if needed.",
      subTitle: "Edit Data On-the-Fly",
      status: status?.viewData,
      content: <SpreadSheet />
    },
    {
      title: "Visualized Data",
      description:
        "See your data come to life with interactive visualizations.",
      subTitle: "Understand Your Data Better",
      status: status?.visualizeData,
      content: <ChartComponent />
    }
  ];

  const [current, setCurrent] = useState(currentIndex || 0);

  const next = () => {
    setCurrent(current + 1);
    dispatch(setCurrentIndex(current + 1));
    if (current === 1) {
      dispatch(
        updateStepsStatus({
          viewData: "finish"
        })
      );
    }
  };

  const prev = () => {
    setCurrent(current - 1);
    dispatch(setCurrentIndex(current - 1));
  };

  const onChange = (value) => {
    if (items[0].status !== null) {
      setCurrent(value);
      dispatch(setCurrentIndex(value));
    }
  };

  const items = steps.map((item) => ({
    key: item.title,
    ...item
  }));

  return (
    <div className="flex flex-col w-full h-[600px] p-0 md:px-12 gap-4 overflow-auto rounded-xl">
      <div className="flex flex-row justify-between rounded-xl">
    {steps.map((step, index) => (
        <div key={index} className='h-14 flex justify-between p-2'>
            <button
                className="bg-gray-400 hover:bg-gray-500 text-white font-bold py-2 px-4 rounded relative"
                onClick={() => onChange(index)} // Call onChange with the index
                disabled={current === index} // Disable button if it's the current step
            >
                <span className="inline-block w-6 h-6 leading-6 text-center rounded-full bg-gray-800 text-white font-bold mr-2">{index + 1} </span>
                {step.title}
                <div className="opacity-0 hover:opacity-100 duration-300 hover:mb-12 absolute left-0 right-0 z-10 bg-gray-900 text-white font-semibold text-center py-2 px-4 rounded">
                    {step.description}
                </div>
            </button>
        </div>
    ))}
</div>

      <div className="flex-1 bg-white flex items-center justify-center rounded-xl w-full min-h-1/2 h-full overflow-auto">{steps[current].content}</div>
      <div className="flex justify-center items-center flex-wrap  gap-4 p-0 md:p-4">
        {current < steps.length - 1 ? (
          <Button
            type="primary"
            disabled={items[0].status === null}
            onClick={next}
          >
            Next
          </Button>
        ) : (
          <Button
            type="primary"
            disabled={items[0].status === null}
            onClick={() => {
              dispatch(
                updateStepsStatus({
                  visualizeData: "finish"
                })
              );
              message.success("Thank you for visiting!");
            }}
          >
            Done
          </Button>
        )}
        {current > 0 && <Button onClick={prev}>Previous</Button>}
      </div>
    </div>
  );
};

export default Mainpage;
