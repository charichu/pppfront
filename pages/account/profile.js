import { useState, useEffect } from 'react'
import Link from 'next/link';
import Layout from '../../components/layout';

export default function Profile() {
  const [data, setData] = useState(null)
  const [isLoading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    fetch('http://localhost:8000/api/users/me', {
        method: 'GET',
        headers: {"Content-Type": "application/json"},
        credentials: "include"
    })
      .then((res) => res.json())
      .then((data) => {
        setData(data)
        console.log(data)
        setLoading(false)
      })
  }, [])

  if (isLoading) return <p>Loading...</p>
  if (!data) return <p>No profile data</p>

  return (
    <Layout>
        <div>
        <h1>{data.data.user.name}</h1>
        <p>{data.data.user.role}</p>
        <p>{data.data.user.email}</p>
        <p>{data.data.user.created_at}</p>
        <Link href="/">Back to home</Link>
        </div>
    </Layout>
  )
}