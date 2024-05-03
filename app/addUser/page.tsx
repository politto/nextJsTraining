'use client'

import { IUser } from '@/types/IUser'
import axios from 'axios'
import { useRouter } from 'next/navigation'

import React, { useState } from 'react'

type Props = {}

export default function addUser({}: Props) {
    const [first_name, setFirstName] = useState<string>("")
    const [last_name, setLastName] = useState<string>("")
    const [phone, setPhoneNumber] = useState<string>("")
    const [email, setEmail] = useState<string>("")
    const router  = useRouter()

    const handleAdd = async (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault()
        const data: IUser = {
            first_name,
            last_name,
            phone,
            email
        }

        const response = await axios.post("https://663489d59bb0df2359a1cfc5.mockapi.io/api/v1/users", data)
        if (response.status === 201) {
            alert("Add user success")
            router.push("/")
        }
        else {
            alert("Add user failed")
        }
    }

  return (
    <>
        <div>addUser</div>
        <form>
            <label>First name : </label>
            <input type = "text" name = "firstName" required onChange = {(e) => setFirstName(e.target.value)} value = {first_name}></input>

            <label>Last name : </label>
            <input type = "text" name = "lastName" required onChange = {(e) => setLastName(e.target.value)} value = {last_name}></input>
            <label>Phone number : </label>
            <input type = "text" name = "firstName" required onChange = {(e) => setPhoneNumber(e.target.value)} value = {phone}></input>
            
            <label>Email : </label>
            <input type = "email" name = "email" required onChange = {(e) => setEmail(e.target.value)} value = {email}></input>

            <button type= "submit" onClick = {handleAdd}>Subit</button>
        </form>
    </>
  )
}