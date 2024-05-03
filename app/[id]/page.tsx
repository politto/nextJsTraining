'use client'
// import { useState } from 'react';
import React,{ useEffect, useState} from 'react'
import { useParams } from 'next/navigation';
import { IUser } from '@/types/IUser';
import axios from 'axios';

type Props = {}

export default function page({}: Props) {
    const param = useParams<{id : string}>();
    const [dataById, setDataById] = useState<IUser | null>(null);

    const getDataById = async () => {
        const response = await axios.get(`https://663489d59bb0df2359a1cfc5.mockapi.io/api/v1/users/${param.id}`)
        setDataById(response.data);
    }

    useEffect(() => {
        getDataById()
        return () => {
            
        };
    }, []);
    console.log(dataById)
  return (
    <div>
        <div key="">
          <p>First name : {dataById?.first_name}</p>
          <p>Last name : {dataById?.last_name}</p>
          <p>Phone number : {dataById?.phone}</p>
          <p>Email : {dataById?.email}</p>
        </div>
    </div>

  )
}