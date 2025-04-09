import React from 'react'
import SearchInput from '../searchInput'
import { Button } from '../button';


const today = new Date();

const formattedDate = `${today.getFullYear()},${today.toLocaleString("en-US", {
  month: "short",
})} ${today.getDate()}`;

const HeaderDestkop = () => {
  return (
    <section className='flex items-center justify-between w-[900px]'>
    <SearchInput/>
    <p>{formattedDate}</p>
    <Button className='bg-secondary hover:bg-secondary-secondaryHover'>Add new Task</Button>
    </section>
  )
}

export default HeaderDestkop