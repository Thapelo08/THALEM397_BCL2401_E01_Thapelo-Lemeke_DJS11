Import React from 'react'

const Sidebar = () => {
    return (
        <div className='w-[25%] h-full p-2 flex-col gap-2 text-white hidden lg:flex'>
          <div className='bg-[#121212] h-[15%] rounded flex flex-col justfy-around'>
            <div className='flex items-center gap-3 pl-8 cursor-pointer'>
                <img src={assets.home_icon} alt="" />
                <p className='font-bold'>Home</p>
            </div>
            <div className='flex items-center gap-3 pl-8 cursor-pointer'>
                <img src={} alt='' />
                <p className='font-bold'>Home</p>
            </div>
            </div>
            <div className='bg-[#121212] h-[85%] rounded'>
             <div className='p-4 flex items-center justify-between' >
                <div className='flex items-center gap-3'>
                   <img src={assets.stack_icon} alt="" />
                   <p className='font-semibold'>Your Library</p>
                </div>
                <div className='flex items-center gap-3'>
                    <img className='w-5' src={assets.arrow_icon} alt=""/>
                    <img className='w-5' src={assets.plus_icon} alt="" />
                    </div>
                 </div>
                 <div className='p-4 bg-[#242424] m-2 rounded font-semibold flex-col items-start justify-start gap-1 pl-4'>
                    <h1>Create your first playlist</h1>
                    <p className='font-light' >it's easy we will help you</p>
                      <button className>Create Playlist</button>

                 </div>
              </div>
        </div>
    )
}