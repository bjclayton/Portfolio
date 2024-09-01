import { useEffect, useState } from "react";
import { getNowPlaying } from "../../services/spotifyApi";
import { AiOutlinePauseCircle } from 'react-icons/ai';
import { BiErrorCircle } from 'react-icons/bi'
import { HiOutlineStatusOffline } from 'react-icons/hi';
import albumCover from '../../assets/images/albumCover.png';
import soundbar from '../../assets/images/soundbar.gif';

const NowPlaying = () => {
    const [nowPlaying, setNowPlaying] = useState(null);

    useEffect(() => {
        const fetchNowPlaying = async () => {
            const data = await getNowPlaying();
            setNowPlaying(data.response)
        };

        setInterval(() => {
            fetchNowPlaying();
        }, 1000);

    }, []);


    let playerState = '';
    let secondsPlayed = 0, minutesPlayed = 0, secondsTotal = 0, minutesTotal = 0;
    let albumImageUrl = albumCover;
    let title = '';
    let artist = '';

    if (nowPlaying !== null && nowPlaying.code === 200) {
        nowPlaying.isPlaying ? playerState = 'PLAY' : playerState = 'PAUSE'

        //Converting the playback duration from seconds to minutes and seconds
        secondsPlayed = Math.floor(nowPlaying.timePlayed / 1000);
        minutesPlayed = Math.floor(secondsPlayed / 60);
        secondsPlayed = secondsPlayed % 60;

        //Converting the song duration from seconds to minutes and seconds
        secondsTotal = Math.floor(nowPlaying.timeTotal / 1000);
        minutesTotal = Math.floor(secondsTotal / 60);
        secondsTotal = secondsTotal % 60;

        albumImageUrl = nowPlaying.albumImageUrl
        title = nowPlaying.title
        artist = nowPlaying.artist
    } else if (nowPlaying !== null && nowPlaying.code === 204) {
        playerState = 'OFFLINE'
        title = 'I am'
        artist = 'currently Offline'
    } else {
        title = 'I am'
        artist = 'currently Offline'
    }

    const pad = (n) => {
        return (n < 10) ? ("0" + n) : n;
    }

    return (
        <a
            href={
                playerState === 'PLAY' || playerState === 'PAUSE' ? nowPlaying.songUrl : ''
            }
        >
            <div className='flex hover:-translate-x-1 hover:-translate-y-1 transition-transform ease-in duration-500'>
                <img
                    src={albumImageUrl}
                    alt="Album"
                    className="rounded-full border border-secondary-text hover:-translate-x-1 hover:-translate-y-1 transition-transform ease-in duration-500 w-12 h-12"
                />

                <div className="flex justify-center flex-col whitespace-nowrap mx-2">
                    <div
                        className="text-primary-text text-lg font-medium leading-6">
                        {title}
                    </div>

                    <div className="flex gap-4">
                        <div className='text-secondary-text'>{artist}</div>

                        <div
                            className=''>
                            {playerState === 'PLAY' ?
                                <img
                                    alt='soundbar'
                                    src={soundbar}
                                    title='Now Listening'
                                    className="w-7"
                                />
                                :
                                playerState === 'PAUSE' ?
                                    <AiOutlinePauseCircle
                                        size={28}
                                        className="fill-secondary-text"
                                    />
                                    :
                                    playerState === 'OFFLINE' ? <HiOutlineStatusOffline
                                        size={28}
                                        className="fill-secondary-text"
                                    />
                                        : <BiErrorCircle
                                            size={28}
                                            className="fill-secondary-text"
                                        />
                            }
                        </div>
                    </div>
                </div>
            </div>
        </a>
    );
};

export default NowPlaying;