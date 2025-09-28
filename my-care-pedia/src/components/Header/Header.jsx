import { useState } from "react"
import logo from "../../assets/images/logo.png";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isDesktopMenuOpen, setIsDesktopMenuOpen] = useState(false)
  const isLoggedIn = false // Mock state for demo
  const name = "User" // Mock name for demo

  return (
    <header className="bg-white border-b border-gray-200 shadow-sm">
      {/* Desktop Header */}
      <div className="hidden md:flex justify-between items-center px-4 py-5">
        {/* Logo */}
        <div className="flex items-center font-bold text-lg text-blue-600">
          <img src={logo} alt="MyCarePedia Logo" className="w-64 lg:w-56 h-auto object-contain" />
        </div>

        <div className="flex w-[58%] max-w-5xl mx-5 h-11 p-1 items-center bg-transparent border border-blue-900 rounded-lg gap-1">

          {/* Search Field 1 */}
          <div className="relative flex-1 flex items-center h-9 bg-blue-50 border border-white rounded-md overflow-hidden">
            <input
              type="text"
              placeholder="Specialty, Condition, Doctor, Procedure"
              className="w-full px-4 py-2 border-none bg-transparent text-sm text-gray-700 outline-none placeholder:text-gray-400"
            />
          </div>

          {/* Location Field */}
          <div className="relative flex-1 flex items-center bg-blue-50 border border-white rounded-md overflow-hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 384 512"
              className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400"
              fill="currentColor"
            >
              <path
                d="M172.268 501.67C26.97 291.031 0 269.413 0 192C0 85.961 
                       85.961 0 192 0s192 85.961 192 192c0 77.413-26.97 
                       99.031-172.268 309.67a24 24 0 0 1-39.464 0zM192 
                       272c44.183 0 80-35.817 80-80s-35.817-80-80-80-80 
                       35.817-80 80 35.817 80 80 80z"
              />
            </svg>
            <input
              type="text"
              placeholder="Dallas, TX 75270"
              className="w-full pl-8 pr-4 py-2 border-none bg-transparent text-sm text-black outline-none placeholder:text-black"
            />
          </div>

          {/* Insurance Field */}
          <div className="relative flex-1 flex items-center bg-blue-50 border border-white rounded-md overflow-hidden">
            <input
              type="text"
              placeholder="Health Insurance & Plan"
              className="w-full px-4 py-2 border-none bg-transparent text-sm text-gray-700 outline-none placeholder:text-gray-400"
            />
          </div>

          <button className="flex items-center gap-1.5 px-3 py-2 border-none rounded-md bg-blue-900 text-white font-semibold text-sm transition-colors duration-200 hover:bg-blue-800 cursor-pointer">
            <svg
              width="14"
              height="14"
              viewBox="0 0 14 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-4 h-4"
            >
              <path
                d="M6.125 1.75a4.375 4.375 0 1 1 0 8.75 4.375 4.375 0 0 1 0-8.75Zm6.177 9.573-2.201-2.201a5.75 5.75 0 1 0-1.414 1.414l2.201 2.201a1 1 0 0 0 1.414-1.414Z"
                fill="white"
              />
            </svg>
          </button>

        </div>

        {/* Auth Section */}
        <div>
          {isLoggedIn ? (
            <span className="text-gray-700 font-medium">Welcome, {name}</span>
          ) : (
            <button className="px-4 py-1.5 bg-gradient-to-r from-[#033566] to-[#00a7c6] rounded-full text-white font-semibold cursor-pointer text-sm transition-transform duration-200 hover:scale-105">
              Log In / Sign Up
            </button>
          )}
        </div>
      </div>

      {/* Mobile Header */}
      <div className="block lg:hidden px-4 py-3">
        <div className="flex justify-between items-center mb-3">
          {/* Logo */}
          <img src={logo} alt="MyCarePedia Logo" className="w-48 h-auto object-contain" />

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="p-2 text-gray-600 hover:text-gray-800"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        {/* Mobile Search */}
        <div className="space-y-2">
          <input
            type="text"
            placeholder="Specialty, Condition, Doctor, Procedure"
            className="w-full px-4 py-2 border-none bg-transparent text-sm text-gray-700 outline-none placeholder:text-[18px] placeholder:text-gray-400"
          />

          <div className="flex gap-2">
            <div className="relative flex-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 384 512"
                className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400"
                fill="currentColor"
              >
                <path
                  d="M172.268 501.67C26.97 291.031 0 269.413 0 192C0 85.961 
                         85.961 0 192 0s192 85.961 192 192c0 77.413-26.97 
                         99.031-172.268 309.67a24 24 0 0 1-39.464 0zM192 
                         272c44.183 0 80-35.817 80-80s-35.817-80-80-80-80 
                         35.817-80 80 35.817 80 80 80z"
                />
              </svg>
              <input
                type="text"
                placeholder="Dallas, TX 75270"
                className="w-full pl-8 pr-4 py-2 border border-gray-300 rounded-md text-sm text-gray-700 outline-none focus:border-blue-500 placeholder:text-gray-400"
              />
            </div>
            <input
              type="text"
              placeholder="Insurance Plan"
              className="flex-1 px-4 py-2 border border-gray-300 rounded-md text-sm text-gray-700 outline-none focus:border-blue-500 placeholder:text-gray-400"
            />
          </div>
          <button className="w-full py-2 bg-blue-900 text-white font-semibold rounded-md hover:bg-blue-800 transition-colors duration-200">
            Search
          </button>
        </div>

        {/* Mobile Auth */}
        <div className="mt-3 pt-3 border-t border-gray-200">
          {isLoggedIn ? (
            <span className="text-gray-700 font-medium">Welcome, {name}</span>
          ) : (
            <button className="px-2 py-1 bg-gradient-to-r from-[#033566] to-[#00a7c6] rounded-full text-white font-medium cursor-pointer text-sm transition-transform duration-200 hover:scale-105">
              Log In / Sign Up
            </button>
          )}
        </div>

        {/* Mobile Menu Navigation */}
        {isMobileMenuOpen && (
          <div className="mt-4 pt-4 border-t border-gray-200">
            <ul className="space-y-3">
              <li className="cursor-pointer bg-[#04285b] text-white px-4 py-2 rounded-md font-semibold">
                Home
              </li>
              <li className="hover:text-[#00a7c6] cursor-pointer py-2 text-gray-700">For Doctors</li>
              <li className="hover:text-[#00a7c6] cursor-pointer py-2 text-gray-700">Practice On Boarding</li>
              <li className="hover:text-[#00a7c6] cursor-pointer py-2 text-gray-700">Patient Advocate</li>
              <li className="hover:text-[#00a7c6] cursor-pointer py-2 text-gray-700">Live Doctors</li>
              <li className="hover:text-[#00a7c6] cursor-pointer py-2 text-gray-700">Join a Televisit</li>
              <li className="hover:text-[#00a7c6] cursor-pointer py-2 text-gray-700">Resources</li>
              <li className="hover:text-[#00a7c6] cursor-pointer py-2 text-gray-700">Contact</li>
            </ul>
          </div>
        )}
      </div>

      {/* Desktop Navbar - Only shown for screens larger than 1300x700 */}
      <nav className="hidden min-[1300px]:flex pl-9 items-center bg-[#04285b] text-white px-6 py-1 text-[15px] lg:text-base font-medium" 
           style={{
             display: typeof window !== 'undefined' && (window.innerWidth < 1300 || window.innerHeight < 700) ? 'none' : ''
           }}>
        {/* Location */}
        <div className="flex items-center gap-1 mr-12">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 384 512"
            className="h-5 w-5 text-white"
            fill="currentColor"
          >
            <path
              d="M172.268 501.67C26.97 291.031 0 269.413 0 192C0 85.961 
                     85.961 0 192 0s192 85.961 192 192c0 77.413-26.97 
                     99.031-172.268 309.67a24 24 0 0 1-39.464 0zM192 
                     272c44.183 0 80-35.817 80-80s-35.817-80-80-80-80 
                     35.817-80 80 35.817 80 80 80z"
            />
          </svg>
          <span className="font-normal">Dallas TX</span>
        </div>

        {/* Links */}
        <ul className="flex gap-14 ml-40">
          <li className="cursor-pointer bg-white text-[#04285b] px-4 py-1 rounded-md font-semibold">
            Home
          </li>
          <li className="hover:text-[#00a7c6] cursor-pointer">For Doctors</li>
          <li className="hover:text-[#00a7c6] cursor-pointer">Practice On Boarding</li>
          <li className="hover:text-[#00a7c6] cursor-pointer">Patient Advocate</li>
          <li className="hover:text-[#00a7c6] cursor-pointer">Live Doctors</li>
          <li className="hover:text-[#00a7c6] cursor-pointer">Join a Televisit</li>
          <li className="hover:text-[#00a7c6] cursor-pointer">Resources</li>
          <li className="hover:text-[#00a7c6] cursor-pointer">Contact</li>
        </ul>
      </nav>

      {/* Alternative Desktop Navbar for screens smaller than 1300x700 but still desktop */}
      <div className="hidden md:block min-[1300px]:hidden">
        <div className="flex justify-between items-center bg-[#04285b] text-white px-6 py-1">
          {/* Location */}
          <div className="flex items-center gap-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 384 512"
              className="h-5 w-5 text-white"
              fill="currentColor"
            >
              <path
                d="M172.268 501.67C26.97 291.031 0 269.413 0 192C0 85.961 
                       85.961 0 192 0s192 85.961 192 192c0 77.413-26.97 
                       99.031-172.268 309.67a24 24 0 0 1-39.464 0zM192 
                       272c44.183 0 80-35.817 80-80s-35.817-80-80-80-80 
                       35.817-80 80 35.817 80 80 80z"
              />
            </svg>
            <span className="font-normal">Dallas TX</span>
          </div>

          {/* Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="p-2 text-white hover:text-[#00a7c6]"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        {/* Dropdown Menu for Medium Screens */}
        {isMobileMenuOpen && (
          <div className="bg-[#04285b] text-white px-6 py-4 border-t border-blue-700">
            <ul className="grid grid-cols-2 gap-4">
              <li className="cursor-pointer bg-white text-[#04285b] px-4 py-2 rounded-md font-semibold text-center">
                Home
              </li>
              <li className="hover:text-[#00a7c6] cursor-pointer py-2 text-center">For Doctors</li>
              <li className="hover:text-[#00a7c6] cursor-pointer py-2 text-center">Practice On Boarding</li>
              <li className="hover:text-[#00a7c6] cursor-pointer py-2 text-center">Patient Advocate</li>
              <li className="hover:text-[#00a7c6] cursor-pointer py-2 text-center">Live Doctors</li>
              <li className="hover:text-[#00a7c6] cursor-pointer py-2 text-center">Join a Televisit</li>
              <li className="hover:text-[#00a7c6] cursor-pointer py-2 text-center">Resources</li>
              <li className="hover:text-[#00a7c6] cursor-pointer py-2 text-center">Contact</li>
            </ul>
          </div>
        )}
      </div>
    </header>
  )
}

export default Header