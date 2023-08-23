"use client"
import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { url } from '@/app/utils'
import axios from 'axios'

const page = ({params}) => {
    const router = useRouter();
    const id = params.id;
    const [data, setData] = useState(false)

    const getData = async () => {
        try {
            const res = await axios.get(url + "/getproducts",{_id: id})
            console.log(res)
        } catch (error) {
            console.log(error)
        }
    }
    useEffect(()=> {
        getData();
    }, [])
    return (
        <div>
            {params.id}
            {
                data && JSON.stringify(data)
            }
        </div>
    )
}

export default page
