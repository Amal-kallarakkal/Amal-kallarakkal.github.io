import { useEffect, useRef, useState, version } from "react"
import { Link } from "react-router-dom";
import Room from "./room";
import Navbar from "./Navbar";
import "../styles/home.css";
export const Landing = () => {
    const [name, setName] = useState("");
    const [localAudioTrack, setLocalAudioTrack] = useState<MediaStreamTrack | null>(null);
    const [localVideoTrack, setlocalVideoTrack] = useState<MediaStreamTrack | null>(null);
    const VideoRef = useRef<HTMLVideoElement>(null);
   
    const [joined, setJoined] = useState(false);

    const getCam = async () => {
        const stream = await window.navigator.mediaDevices.getUserMedia({
            video: true,
            audio: true
        })
        const audioTrack = stream.getAudioTracks()[0]
        const videoTrack = stream.getVideoTracks()[0]
        setLocalAudioTrack(audioTrack)
        setlocalVideoTrack(videoTrack)
        if(!VideoRef.current) {
            return;
        }
        
        VideoRef.current.srcObject = new MediaStream([videoTrack]);
        VideoRef.current.play();
    }
    useEffect(() => {
        if(VideoRef && VideoRef.current) {
             getCam()
        }
       
    }, [VideoRef]);

    if(!joined) {
        return <div>
            <Navbar/>
            <video autoPlay ref={VideoRef}></video>
            <input type="text" onChange={(e) => {
                setName(e.target.value);
            }}>
            </input>
            <button onClick={()=> {
                setJoined(true);
            }}>Join</button>
        </div>
    }

    return <>
    <div>
        <Navbar/>
        <Room name = {name} localAudioTrack = {localAudioTrack} localVideoTrack = {localVideoTrack}/>
    </div>
    </>

   
}