import React, { useEffect, useRef, useState } from 'react'

export default function UTCTimer({ utcString }) {
    const utcDiffRef = useRef(0)
    const [time, setTime] = useState(() => new Date())

    useEffect(() => {
        let tRegex = /UTC(([+-]\d\d):\d\d)?/;
        let match = tRegex.exec(utcString)
        if(match[2]){
            utcDiffRef.current = parseInt(match[2])
        } else {
            utcDiffRef.current = 0
        }
        setTime(t => {
            let date = new Date()
            date.setHours((date.getUTCHours() + utcDiffRef.current))
            return date
        })
    }, [utcString])


    useEffect(() => {
        let i = setInterval(() => {
            setTime(t => {
                let date = new Date()
                date.setHours((date.getUTCHours() + utcDiffRef.current))
                return date
            })
        }, 1000)
         return () => clearInterval(i)
    }, [])


    return (
        <div>{utcString} {'=>'} {time.getHours()}:{time.getMinutes()}</div>
    )
}
