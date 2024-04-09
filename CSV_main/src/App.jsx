import Mainpage from './screens/steps/csvpage';
export default function App() {
  return (
    <div className="flex flex-col text-center overflow-auto gap-y-4 h-full w-full bg-gradient-to-r from-lime-100 to-lime-800">
      <div className="headerSection bg-[#ffc987] text-black font-bold h-32 py-4 px-4 flex flex-col items-center">
        <h1 className="pb-2 text-[35px]">Examine and Show Off Your Data</h1>
        <h3 className="text-center text-[25px]">Convert Unprocessed CSV Data into Imaginative Graphics</h3>
      </div>
      <Mainpage />
      <p className="py-2 text-gray-900 inline-flex justify-center text-center items-center text-lg" >
                &copy; Developed By Devendra Singh Bhatia, Monish Shetty, Akash Patel, Utkarsh Pawade</p>
    </div>
  );
}
