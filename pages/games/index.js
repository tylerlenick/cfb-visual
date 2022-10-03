import { React, useState } from 'react'
import useSWR from 'swr'
import ConferenceSelect from '../../components/ConferenceSelect'
import WeekSelect from '../../components/WeekSelect'
import Link from 'next/link';
import Date from '../../components/Date'

const fetcher = (...args) => fetch(...args).then((res) => res.json())

export default function Cfb() {
  const [currentConference, setCurrentConference] = useState('ACC');
  const [currentWeek, setCurrentWeek] = useState('1');
 
  const updateConference = (e) => {
    setCurrentConference(e.target.value);
  }

  const updateWeek = (e) => {
    setCurrentWeek(e.target.value);
  }

  const {data, error} = useSWR(`/api/games/conference/${currentConference}`, fetcher);
  
  if (error) return <div>failed to load</div>
  if (!data) return <div>loading...</div>
 
  return (
    <div>
      <ConferenceSelect updateConference={updateConference} currentConference={currentConference}/>
      <WeekSelect updateWeek={updateWeek} currentWeek={currentWeek}/>
      <br/>
      <div className="p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5">
        {data.map(game => {
          return (
            <Link href='/games/[game]' as={`/games/${game.id}`} key={game.id}>
              <div className="max-w-sm rounded shadow-lg justify-between">
                <h2 className="flex flex-row items-center">{game.away_team}: {game.away_points}</h2>
                <h2>@</h2>
                <h2 className="flex flex-row items-center">{game.home_team}: {game.home_points}</h2>

                <hr />
                <h2 className="flex flex-row items-center"><Date dateString={game.start_date} /></h2>
                <br />
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
 
}