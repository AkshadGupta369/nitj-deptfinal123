import React, { useRef } from 'react'
import syllabuspdf from '../components/Pdf/syllabus.pdf'
import OpenPdf from './OpenPdf'
import Heading from '../components/Heading'
import { useParams } from 'react-router-dom'
import useFetch from '../hooks/useFetch'
function Syllabus() {

    const {data} = useFetch(`/dept/${useParams()?.dept}/Syllabus`);
    const ref= useRef("B.Tech");

    return (
        <div className='w-[98%] rounded-[9px] border border-[rgba(0,105,140,0.2)] p-4 mx-1 xl:mx-3 my-[60px] pt-[54px] place-items-center'>
            <Heading name="Syllabus" />
            <div className='shadow shadow-blue-400 md:m-4 pb-2'>
                <div className='flex items-center w-full py-3 font-medium text-lg px-4 shadow-md shadow-blue-200'>
                    <div className='flex w-fit items-center border border-gray-300 text-gray-900 text-sm p-2 rounded'>
                        <label htmlFor="states" className="mr-2">Programme :</label>
                        <select id="states" className="border-none outline-none" ref={ref}>
                            <option value="B.Tech">B.Tech</option>
                            <option value="M.Tech">M.Tech</option>
                        </select>
                    </div>
                </div>

                <OpenPdf link={data.find((ele) => ele.type===ref.current?.value)?.link} />
            </div>
        </div>
    )
}

export default Syllabus