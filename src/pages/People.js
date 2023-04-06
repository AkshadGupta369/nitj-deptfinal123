import React, { useState } from 'react'
import Avatar from 'react-avatar';
import { Link, useLocation } from 'react-router-dom';
import Heading from '../components/Heading';

function People({ Title, Data }) {
    const [url,setUrl]=useState(useLocation());
    const dept=url.pathname.split('/')[2];
    const page=url.pathname.split('/')[3];

 
    return (
        <div className='w-[98%] rounded-[9px] border border-[rgba(0,105,140,0.2)] p-4 mx-1 xl:mx-3 my-[60px] pt-[54px] place-items-center'>
            <Heading name={Title} />
            <div className='flex items-center justify-center w-full my-3 mx-auto mb-16'>
                <input placeholder='Search results' defaultValue={""} onChange={(e) => { }} className='w-11/12 md:w-3/4 p-2 text-lg rounded border-2 shadow-lg border-gray-300 focus:border-gray-400 focus:outline-none' />
            </div>
            <div className='flex flex-col w-full'>
                {
                    Data?Data.map((item, i) => {
                        return (
                            <Link to={page === "Faculty" ? {pathname:`/dept/${dept}/${url.pathname.split('/').pop()}/${item._id}`,state:i}:{pathname:`/dept/${dept}/${url.pathname.split('/').pop()}`,state:i}}>
                                <div key={i} className="flex flex-col flex-grow content-center mt-0 text-inherit shadow hover:shadow-lg hover:shadow-blue-500 shadow-blue-400 rounded-lg my-4">
                                    <div className="flex flex-col sm:flex-row border-t-0 text-[rgba(0,105,140,1)] py-8 text-left text-base items-center content-center px-[14px] xl:px-[18px]">
                                        <div className="w-32 h-32 xl:w-36 xl:h-36 flex-grow-0 flex-shrink-0">
                                            {
                                            item?.img?<img src={item?.img} className="w-full h-full object-fill object-center rounded-full shadow-xl border flex-grow-0 flex-shrink-0" alt='...' />:
                                            <Avatar className="w-full h-full object-fill object-center rounded-full shadow-xl border flex-grow-0 flex-shrink-0" size='144' name={item.name}/>
                                            }
                                        </div>
                                        <div className="flex flex-col flex-grow leading-8 md:mr-2 xl:mr-5 text-center sm:text-start md:justify-start mt-8 md:mt-0 sm:ml-9 md:mb-0">
                                            <div className="text-[22.5px]">{item?.name}</div>
                                            <div className="font-semibold text-[rgba(0,0,0,0.7)] tracking-wide">{item?.position}</div>
                                            <div className="font-normal text-[rgba(0,0,0,0.7)] tracking-wide">{item?.email}</div>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        )
                    }):<h1>Data not Available</h1>
                }
            </div>
        </div>
    )
}

export default People
