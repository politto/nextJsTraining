'use client';

import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { IUser } from '@/types/IUser';
import Link from 'next/link';

type Props = {}

export default function page({}: Props) {
  const [data, setData] = useState<IUser[]>([]);

  
const getData = async () => {
  const response = await axios.get<IUser[]>("https://663489d59bb0df2359a1cfc5.mockapi.io/api/v1/users")
  setData(response.data)
  console.log(response.data)
}

useEffect(() => {
  getData()
  return () => {
    
  };
}, []);

  return (
    <table>
      <tbody>
        <tr key="">
          <th>First name</th>
          <th>Last name</th>
          <th>Phone number</th>
          <th>Email</th>
          <th>Action</th>
        </tr>

        {
          data.map((item) => (
            <tr key={item.id}>
              <td>{item.first_name}</td>
              <td>{item.last_name}</td>
              <td>{item.phone}</td>
              <td>{item.email}</td>
              <td>
                <Link href={`/${item.id}`}>
                  Details
                </Link>
              </td>
            </tr>
          ))
        }
      </tbody>
    </table>
  )
}
