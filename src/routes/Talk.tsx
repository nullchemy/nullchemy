import React, { Fragment, useEffect, useRef, useState } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'

const Talk: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement | null>(null)
  const audioRef = useRef<HTMLAudioElement | null>(null)
  const [isVideoEnabled, setVideoEnabled] = useState<boolean>(false)
  const [isAudioEnabled, setAudioEnabled] = useState<boolean>(false)
  const [videoStream, setVideoStream] = useState<MediaStream | null>(null)
  const [audioStream, setAudioStream] = useState<MediaStream | null>(null)
  const [isLoading, setLoading] = useState<boolean>(false)

  useEffect(() => {
    const openCameraAndMicrophone = async () => {
      setLoading(true)
      try {
        if (isVideoEnabled) {
          const videoStream = await navigator.mediaDevices.getUserMedia({
            video: true,
          })
          setVideoStream(videoStream)
          if (videoRef.current) {
            videoRef.current.srcObject = videoStream
          }
        } else {
          if (videoStream) {
            // Stop all video tracks to disable the camera
            videoStream.getVideoTracks().forEach((track) => track.stop())
          }
          setVideoStream(null)
          if (videoRef.current) {
            videoRef.current.srcObject = null
          }
        }

        if (isAudioEnabled) {
          const audioStream = await navigator.mediaDevices.getUserMedia({
            audio: true,
          })
          setAudioStream(audioStream)
          if (audioRef.current) {
            audioRef.current.srcObject = audioStream
          }
        } else {
          if (audioStream) {
            // Stop all audio tracks to disable the microphone
            audioStream.getAudioTracks().forEach((track) => track.stop())
          }
          setAudioStream(null)
          if (audioRef.current) {
            audioRef.current.srcObject = null
          }
        }
      } catch (error) {
        console.error('Error accessing the camera/microphone:', error)
      } finally {
        setLoading(false)
      }
    }

    openCameraAndMicrophone()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isVideoEnabled, isAudioEnabled])

  useEffect(() => {
    // Ensure video is displayed when camera is initially enabled
    if (isVideoEnabled && videoStream && videoRef.current) {
      videoRef.current.srcObject = videoStream
    }
    // Ensure audio works when audio is initially enabled
    if (isAudioEnabled && audioStream && audioRef.current) {
      audioRef.current.srcObject = audioStream
    }
  }, [audioStream, isAudioEnabled, isVideoEnabled, videoStream])

  return (
    <Fragment>
      <Header />
      <div
        className="talk"
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          minHeight: '100vh',
        }}
      >
        {videoStream ? (
          <div
            className="talk_vid_wrapper"
            style={{ margin: '0 auto', height: '400px', width: '400px' }}
          >
            <video
              ref={videoRef}
              autoPlay
              playsInline
              style={{ margin: '0 auto', height: '100%', width: '100%' }}
            />
          </div>
        ) : (
          <p>Loading Video...</p>
        )}

        {audioStream ? (
          <div className="talk_audio_wrapper">
            <audio ref={audioRef} autoPlay />
          </div>
        ) : (
          <p>Loading Audio...</p>
        )}

        <div style={{ marginTop: '20px' }}>
          <button
            onClick={() => {
              setVideoEnabled(!isVideoEnabled)
            }}
            disabled={isLoading}
          >
            {isVideoEnabled ? 'Disable Camera' : 'Enable Camera'}
          </button>
          <button
            onClick={() => {
              setAudioEnabled(!isAudioEnabled)
            }}
            disabled={isLoading}
          >
            {isAudioEnabled ? 'Disable Microphone' : 'Enable Microphone'}
          </button>
        </div>
      </div>
      <Footer />
    </Fragment>
  )
}

export default Talk
