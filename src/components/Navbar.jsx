import logo from "../assets/Logo_black.jpg"

const Navbar = () => {
  return <nav className="mb-20 flex items-center  justify-between py-6 ">
    <div className="mt-8 md:m-8 md:mt-8 flex flex-shrink-0 item-center">
       {/* <a href='#'><h1 className=" mx-2 text-xl h-15">Mv</h1></a>  */}
    <a href="#"><img className="pb-1 mx-2 w-12 rounded" src={logo} alt="" /></a> 
    </div>
    <div className='mt-8 md:m-8 md:mt-8 item-center justify-center gap-4 text-2xl' >
        <div className="shadow-md hover:shadow-gray-700 border-2 border-neutral-500 px-1 mb-1 rounded-md ">
        <a target='_blank' className='text-neutral-150 px-1 text-xl' href="https://linktr.ee/mugilvendhan">Connect</a>
        </div>
   
    </div>
    </nav>
}

export default Navbar