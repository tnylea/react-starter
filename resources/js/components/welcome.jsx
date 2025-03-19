import { useState } from 'react'
import reactLogo from '../../../public/react.svg'
import viteLogo from '../../../public/laravel.svg'

function Welcome() {
    const [count, setCount] = useState(0)
  
    return (
      <div className="flex flex-col space-y-10 lg:p-0 p-10 items-center justify-center text-center">
        <div className="flex items-center space-x-10">
          <a href="https://laravel.com" target="_blank" className="w-32 hover:scale-[1.02] ease-out duration-300 h-auto">
            <img src={viteLogo} className="w-full h-full" alt="Vite logo" />
          </a>
          <a href="https://react.dev" target="_blank" className="w-32 hover:scale-[1.02] ease-out duration-300 h-auto">
            <img src={reactLogo} className="w-full h-full logo" alt="React logo" />
          </a>
        </div>
        <h1 className="font-bold text-3xl">Laravel + React</h1>
        <div className="mt-6">
          <button 
            className="bg-gray-100 border hover:border-blue-400 border-transparent ring-2 ring-transparent focus:ring-blue-700 rounded-lg px-4 py-2 cursor-pointer"
            onClick={() => setCount((count) => count + 1)}>
            count is {count}
          </button>
          <p className="mt-5">
            Edit <code className="text-gray-500 font-mono px-2 text-sm">resources/js/components/welcome.jsx</code> and save to test HMR
          </p>
        </div>
        <p className="text-xs">
          Click on the Laravel and React logos to learn more
        </p>
      </div>
    )
  }
  
  export default Welcome
  