// Simple functional component without hooks
function Welcome() {
    return (
      <div className="flex items-center justify-center w-full transition-opacity opacity-100 duration-750 lg:grow starting:opacity-0">
          <main className="flex max-w-sm w-full lg:max-w-md items-center justify-center flex-col">
              <div className="relative mb-6 text-center flex items-center justify-center flex-col">
                    <img src="/react-logo.svg" className="h-12 w-auto mb-4" alt="React Logo" />
                    <h1 className="text-xl font-semibold starting:opacity-0 duration-750 starting:translate-y-6 transition-all translate-y-0 opacity-100" style={{fontSize: '20px', fontWeight: 600}}>React Starter</h1>
              </div>
              <div className="text-[13px] leading-[20px] flex-1 p-10 bg-white shadow-[inset_0px_0px_0px_1px_rgba(26,26,0,0.16)] rounded-xl">
                  <h1 className="mb-1 font-medium">Let's get started</h1>
                  <p className="mb-2 text-[#706f6c]">Laravel & Livewire are the perfect combination. We suggest starting with the following.</p>
                  <ul className="flex flex-col mb-4 lg:mb-6">
                      <li className="flex items-center gap-4 py-2 relative before:border-l before:border-[#e3e3e0] before:top-1/2 before:bottom-0 before:left-[0.4rem] before:absolute">
                          <span className="relative py-1 bg-white">
                              <span className="flex items-center justify-center rounded-full bg-[#FDFDFC] shadow-[0px_0px_1px_0px_rgba(0,0,0,0.03),0px_1px_2px_0px_rgba(0,0,0,0.06)] w-3.5 h-3.5 border border-[#e3e3e0]">
                                  <span className="rounded-full bg-[#dbdbd7] w-1.5 h-1.5"></span>
                              </span>
                          </span>
                          <span>
                              Read the
                              <a href="https://laravel.com/docs" target="_blank" className="inline-flex items-center space-x-1 font-medium underline underline-offset-4 text-[#29c1f8] ml-1">
                                  <span>Laravel Documentation</span>
                                  <svg
                                      width="10"
                                      height="11"
                                      viewBox="0 0 10 11"
                                      fill="none"
                                      xmlns="http://www.w3.org/2000/svg"
                                      className="w-2.5 h-2.5"
                                  >
                                      <path
                                          d="M7.70833 6.95834V2.79167H3.54167M2.5 8L7.5 3.00001"
                                          stroke="currentColor"
                                          strokeLinecap="square"
                                      />
                                  </svg>
                              </a>
                          </span>
                      </li>
                      <li className="flex items-center gap-4 py-2 relative before:border-l before:border-[#e3e3e0] before:bottom-1/2 before:top-0 before:left-[0.4rem] before:absolute">
                          <span className="relative py-1 bg-white">
                              <span className="flex items-center justify-center rounded-full bg-[#FDFDFC] shadow-[0px_0px_1px_0px_rgba(0,0,0,0.03),0px_1px_2px_0px_rgba(0,0,0,0.06)] w-3.5 h-3.5 border border-[#e3e3e0]">
                                  <span className="rounded-full bg-[#dbdbd7] w-1.5 h-1.5"></span>
                              </span>
                          </span>
                          <span>
                              Read the
                              <a href="https://react.dev" target="_blank" className="inline-flex items-center space-x-1 font-medium underline underline-offset-4 text-[#29c1f8] ml-1">
                                  <span>React Documentation</span>
                                  <svg
                                      width="10"
                                      height="11"
                                      viewBox="0 0 10 11"
                                      fill="none"
                                      xmlns="http://www.w3.org/2000/svg"
                                      className="w-2.5 h-2.5"
                                  >
                                      <path
                                          d="M7.70833 6.95834V2.79167H3.54167M2.5 8L7.5 3.00001"
                                          stroke="currentColor"
                                          strokeLinecap="square"
                                      />
                                  </svg>
                              </a>
                          </span>
                      </li>
                  </ul>
                  <ul className="flex gap-3 text-sm leading-normal">
                      <li className="w-full">
                          <a href="https://cloud.laravel.com" target="_blank" className="w-full inline-block text-center px-4 py-2 bg-[#29c1f8] text-white rounded-md hover:bg-[#19b1e8] transition-colors">Deploy Now</a>
                          
                      </li>
                  </ul>
              </div>
             
          </main>
      </div>
    )
  }
  
  export default Welcome
  