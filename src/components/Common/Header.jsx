import logo from '../../assets/logo.png';
const Header = () => {


  return (
    <div className="py-2 lg:py-3 text-white border border-b-2 border-gray-100 bg-white">
      <div className="px-2 max-w-7xl mx-auto flex justify-between items-center">
        <div>

            <img src={logo} alt="Logo" />

        </div>
        <div className="flex gap-2 items-center">
           <button className="rounded-md py-1 px-4 flex items-center gap-[10px]
            text-[1rem] font-semibold border border-gray-300 text-gray-700 hover:bg-gray-100">
             Exit
           </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
