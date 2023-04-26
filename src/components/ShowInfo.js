import React from 'react'

const ShowInfo = (videoPreview) => {
  return (
    <>
      <div className='container content'>
        <div className='border mt-4 p-4'>
          <h3 className='text-center bg-info p-2 mb-3'>
            Creator's Information
          </h3>
          <div className='row'>
            <div className='col-md-4'>
              <div className='d-flex flex-column align-items-center '>
                <div className='preview d-flex align-items-center justify-content-center'>
                  <video
                    controls
                    src={videoPreview}
                    width='200'
                    height='200'
                  ></video>
                </div>
              </div>
            </div>
            <div className='col-md-6 d-flex align-items-center'>
              <div className='ms-4'>
                <h4>
                  Creator Name :{' '}
                  {localStorage.getItem('name')
                    ? localStorage.getItem('name')
                    : 'NA'}
                </h4>
                <h4>
                  Creator State :{' '}
                  {localStorage.getItem('state')
                    ? localStorage.getItem('state')
                    : 'NA'}
                </h4>
                <h4>
                  Creator City :{' '}
                  {localStorage.getItem('city')
                    ? localStorage.getItem('city')
                    : 'NA'}
                </h4>
                <h4>
                  Creator PIN :{' '}
                  {localStorage.getItem('pin')
                    ? localStorage.getItem('pin')
                    : 'NA'}
                </h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ShowInfo
