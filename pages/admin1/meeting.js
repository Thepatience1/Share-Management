import Head from 'next/head'
import { useState } from 'react'
import axios from 'axios'
import Layout from '../admin1'

export default function Meeting() {
  const [url, setUrl] = useState('')
  const [meetingId, setMeetingId] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const response = await axios.post('/api/meeting', { url })
      setMeetingId(response.data.meetingId)
      setPassword(response.data.password)
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <Layout>
    <div className="h-screen flex items-center justify-center bg-gray-50">
      <Head>
        <title>My Meeting Bot</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="max-w-md w-full space-y-8">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Schedule a Meeting
          </h2>
        </div>
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <div className="rounded-md shadow-sm -space-y-px">
            <div>
              <label htmlFor="url" className="sr-only">
                Meeting URL
              </label>
              <input
                id="url"
                name="url"
                type="text"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-primary focus:border-primary focus:z-10 sm:text-sm"
                placeholder="Meeting URL"
                onChange={(e) => setUrl(e.target.value)}
              />
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-primary hover:bg-secondary focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
            >
              Schedule Meeting
            </button>
          </div>
        </form>
        {meetingId && (
          <div className="bg-white p-4 rounded-md shadow-md">
            <p>
              Your meeting ID is{' '}
              <a
                href={`https://my-meeting-service.com/meetings/${meetingId}`}
                target="_blank"
                rel="noopener noreferrer"
                className="underline"
              >
                {meetingId}
              </a>
            </p>
            <p>Password: {password}</p>
          </div>
        )}
      </div>
    </div>
    </Layout>
  )
}

