import React from 'react'


const Header:React.FC = () => {
  return (
    <div className='flex justify-between bg-sky-600 px-32 py-3'>
      <div className='flex gap-3'>
        <div>Phone +6238293233</div>
        <div>Email cleanease@info.com</div>
      </div>
      <div className='flex gap-1'>
        <div>1</div>
        <div>2</div>
        <div>3</div>
        <div>4</div>
      </div>
    </div>
  )
}

export default Header