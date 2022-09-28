import { React, useState } from 'react'
import useSWR from 'swr'
import ConferenceSelect from '../../components/ConferenceSelect'
import Link from 'next/link';
import Date from '../../components/Date'

const fetcher = (...args) => fetch(...args).then((res) => res.json())

export default function Cfb() {
  const [currentConference, setCurrentConference] = useState('ACC');
 
  const updateConference = (e) => {
    setCurrentConference(e.target.value);
  }

  const {data, error} = useSWR(`/api/teams/${currentConference}`, fetcher);
  
  if (error) return <div>failed to load</div>
  if (!data) return <div>loading...</div>
 
  return (
    <div>
      <ConferenceSelect updateConference={updateConference} currentConference={currentConference}/>
      <br/>
      <div className="p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5">
        {data.map(team => {
          return (
            <div key={team.id}>
              <Link href={`/teams/${team.id}`}>
                <div className="max-w-sm rounded shadow-lg justify-between">
                  <h2 className="flex flex-row items-center">{team.school}</h2>
                  <br />
                </div>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
 
}