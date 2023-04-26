import React, { useState } from 'react'
import CircularProgress from '@mui/material/CircularProgress'
import { toast } from 'react-toastify'
import ShowInfo from './ShowInfo'

const CreatorInfo = () => {
  const [name, setName] = useState('')
  const [state, setState] = useState('')
  const [city, setCity] = useState('')
  const [pin, setPin] = useState('')
  const [videoPreview, setVideoPreview] = useState(null)
  const [loading, setLoading] = useState(false)

  function previewFile(e) {
    setLoading(true)
    // Reading New File (open file Picker Box)
    const reader = new FileReader()

    // Gettting Selected File
    const selectedFile = e.target.files[0]
    if (selectedFile) {
      reader.readAsDataURL(selectedFile)
    }

    // As the File loaded then set the stage as per the file type
    reader.onload = (readerEvent) => {
      if (selectedFile.type.includes('video')) {
        setVideoPreview(readerEvent.target.result)
        setLoading(false)
      }
    }
  }
  function clearFiles() {
    setVideoPreview(null)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Clicked')
    if (name === '') {
      console.log('name', name)
      toast.error('Name is required!')
    } else if (state === '') {
      toast.error('State is required!')
    } else if (videoPreview === null) {
      toast.error('Video is required!')
    } else {
      localStorage.setItem('name', name)
      localStorage.setItem('state', state)
      localStorage.setItem('city', city)
      localStorage.setItem('pin', pin)
      toast.success('Information Saved!')
    }
  }
  return (
    <>
      <div className='container content mt-4'>
        <h5> 📝 Add Creator's Information</h5>
        <div className='row border p-4'>
          <div className='col-md-6'>
            <div className='mb-3'>
              <label htmlFor='exampleInputName' className='form-label'>
                Creator Name
              </label>
              <input
                type='text'
                className='form-control'
                id='exampleInputName'
                defaultValue={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className='mb-3'>
              <label htmlFor='exampleInputState' className='form-label'>
                Creator State
              </label>
              <input
                type='text'
                className='form-control'
                id='exampleInputState'
                defaultValue={state}
                onChange={(e) => setState(e.target.value)}
              />
            </div>
            <div className='mb-3'>
              <label htmlFor='exampleInputCity' className='form-label'>
                Creator City
              </label>
              <input
                type='text'
                className='form-control'
                id='exampleInputCity'
                defaultValue={city}
                onChange={(e) => setCity(e.target.value)}
              />
            </div>

            <div className='mb-3'>
              <label htmlFor='exampleInputPIN' className='form-label'>
                Creator PIN
              </label>
              <input
                type='number'
                className='form-control'
                id='exampleInputPIN'
                defaultValue={pin}
                onChange={(e) => setPin(e.target.value)}
              />
            </div>
            <div className='form-check mt-4'>
              <input
                className='form-check-input'
                type='checkbox'
                id='flexCheckDefault'
              />
              <label className='form-check-label' htmlFor='flexCheckDefault'>
                I Accept Terms And Conditions
              </label>
            </div>
            <button
              type='submit'
              className='form__submit-btn btn btn-primary btn-lg mt-2'
              onClick={handleSubmit}
            >
              Submit
            </button>
          </div>
          {/* col-md-6 ends */}

          <div className='col-md-6'>
            <div className=''>
              <p>Select Video :</p>
            </div>
            <div className=''>
              <input
                className='form-control'
                type='file'
                id='formFile'
                defaultValue={videoPreview}
                accept='video/*'
                onChange={previewFile}
              />
            </div>
            {loading ? (
              <>
                <div style={{ padding: '100px 0px', textAlign: 'center' }}>
                  <CircularProgress aria-label='Loading...' />
                </div>
              </>
            ) : (
              <div>
                {videoPreview && (
                  <i
                    className='fa fa-window-close'
                    aria-hidden='true'
                    onClick={clearFiles}
                  ></i>
                )}
              </div>
            )}
            <div className='preview d-flex align-items-center justify-content-center'>
              {videoPreview != null && (
                <video
                  controls
                  src={videoPreview}
                  width='300'
                  height='300'
                ></video>
              )}
            </div>
          </div>
        </div>
      </div>
      {videoPreview ? (
        <>
          <ShowInfo videoPreview={videoPreview} />
        </>
      ) : null}
    </>
  )
}

export default CreatorInfo
