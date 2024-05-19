import React, { Fragment, useState } from 'react'
import '../styles/css/erecruit.css'
import axios, { AxiosRequestConfig, AxiosResponse } from 'axios'
import { ReactComponent as Upload } from '../assets/svg/icon-download.svg'
interface FormDataAssets {
  [key: string]: File
}

interface ContactFormData {
  name: string
  email: string
  phone: string
  website: string
  brief: string
  assets: FormDataAssets | null
}

interface FormResponse {
  message: string
  type: string
}

const ERecruit = () => {
  const [data, setData] = useState<ContactFormData>({
    name: '',
    email: '',
    phone: '',
    website: '',
    brief: '',
    assets: null,
  })

  const [response, setResponse] = useState<FormResponse>({
    message: '',
    type: '',
  })

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const formData = new FormData()
    if (data.assets) {
      Object.values(data.assets).forEach((file) => {
        formData.append('assets', file)
      })
    }
    for (const key in data) {
      if (data.hasOwnProperty(key)) {
        const value = data[key as keyof ContactFormData]
        if (value !== null && typeof value !== 'object') {
          formData.append(key, value)
        }
      }
    }
    try {
      let config: AxiosRequestConfig = {
        method: 'post',
        url: 'https://api.denniskibet.com/den/contact',
        headers: {
          Authorization: 'Bearer dfghjksdbhjdsfskjfb',
        },
        data: formData,
      }
      const res: AxiosResponse = await axios(config)
      setResponse(res.data)
      setData({
        name: '',
        email: '',
        phone: '',
        website: '',
        brief: '',
        assets: null,
      })
      getFile(true)
      setTimeout(() => {
        setResponse({ message: '', type: '' })
      }, 5000)
    } catch (error: any) {
      setResponse({ type: 'error', message: 'Something Wrong Happened' })
    }
  }

  const [btntxt, setBtntxt] = useState<string>('submit')

  const handleBtn = () => {
    setBtntxt('sending...')
    const btninterval = setInterval(() => {
      setBtntxt('submit')
    }, 1000)
    if (response.message !== '') {
      clearInterval(btninterval)
    }
  }
  const getFile = (c: boolean): void => {
    const files: FileList | null | undefined =
      document.querySelector<HTMLInputElement>('.file-field')?.files
    let label: HTMLDivElement | null =
      document.querySelector<HTMLDivElement>('.content-label')
    let finlabel: string = ''
    let filenames: string[] = []
    if (files) {
      for (let i = 0; i < files?.length || 0; ++i) {
        const name: string = files?.item(i)?.name || ''
        filenames.push(name)
      }
    }

    filenames.map((i) => {
      return (finlabel =
        finlabel + "<span class='filenames-list'>" + i + '</span>')
    })

    if (c && label) {
      label.innerHTML =
        'Drag or browse your project brief (you can upload multiple files)'
    } else if (label) {
      label.innerHTML = finlabel
    }
  }
  return (
    <Fragment>
      <div className="erecruit">
        <div className="application_form_bottom">
          <h1 className="application_form_title">Apply Here:</h1>
          <div className="application_progress_indicator">
            <div className="ind_sec_item active-ind">
              <span>1</span>
              <p>Personal</p>
              <p>Information</p>
            </div>
            <div className="ind_sec_item">
              <span>2</span>
              <p>contact</p>
              <p>details</p>
            </div>
            <div className="ind_sec_item">
              <span>3</span>
              <p>Academic</p>
              <p>Qualifications</p>
            </div>
            <div className="ind_sec_item">
              <span>4</span>
              <p>Proffesional</p>
              <p>Qualifications</p>
            </div>
            <div className="ind_sec_item">
              <span>5</span>
              <p>Employment</p>
              <p>History</p>
            </div>
            <div className="ind_sec_item">
              <span>6</span>
              <p>Refferees</p>
            </div>
            <div className="ind_sec_item">
              <span>7</span>
              <p>Attachments</p>
            </div>
            <div className="ind_sec_item">
              <span>8</span>
              <p>Review & Submision</p>
            </div>
          </div>
          <div className="application_form_item">
            <div className="apply_job_form">
              <div className="aplication_form_section">
                <section className="appl-page">
                  <div className="appl-page-wrapper">
                    <div className="applFormSec">
                      {response.message !== '' ? (
                        <p
                          className={
                            response.type === 'success'
                              ? 'formNotifySucc'
                              : 'formNotify'
                          }
                        >
                          {response.message}
                        </p>
                      ) : null}
                      <form
                        onSubmit={handleSubmit}
                        encType="multipart/form-data"
                      >
                        <h3>1. Tell me more about yourself</h3>
                        <div className="appl-group">
                          <div className="user-input-wrp">
                            <br />
                            <input
                              id="id-input"
                              type="text"
                              className="inputText"
                              name="name"
                              value={data.name}
                              onChange={(e) => {
                                setData({
                                  ...data,
                                  [e.target.name]: e.target.value,
                                })
                              }}
                            />
                            <span className="floating-label">
                              Your Name <span style={{ color: 'red' }}>*</span>
                            </span>
                          </div>
                          <span id="id-err"></span>
                          <div className="appl-gr-flex">
                            <div className="applPut">
                              <div className="user-input-wrp">
                                <br />
                                <input
                                  id="id-input"
                                  type="text"
                                  className="inputText"
                                  name="email"
                                  value={data.email}
                                  onChange={(e) => {
                                    setData({
                                      ...data,
                                      [e.target.name]: e.target.value,
                                    })
                                  }}
                                />
                                <span className="floating-label">
                                  Your Email{' '}
                                  <span style={{ color: 'red' }}>*</span>
                                </span>
                              </div>
                              <span id="id-err"></span>
                            </div>
                            <div className="applPut">
                              <div className="user-input-wrp">
                                <br />
                                <input
                                  id="id-input"
                                  type="text"
                                  className="inputText"
                                  name="phone"
                                  value={data.phone}
                                  onChange={(e) => {
                                    setData({
                                      ...data,
                                      [e.target.name]: e.target.value,
                                    })
                                  }}
                                />
                                <span className="floating-label">
                                  Phone Number
                                </span>
                              </div>
                              <span id="id-err"></span>
                            </div>
                          </div>
                          <div className="user-input-wrp">
                            <br />
                            <input
                              id="id-input"
                              type="text"
                              className="inputText"
                              name="website"
                              value={data.website}
                              onChange={(e) => {
                                setData({
                                  ...data,
                                  [e.target.name]: e.target.value,
                                })
                              }}
                            />
                            <span className="floating-label">
                              Company Website
                            </span>
                          </div>
                          <span id="id-err"></span>
                        </div>

                        <h3>2. What are you looking to work on?</h3>
                        <div className="appl-group">
                          <div className="user-input-wrp">
                            <br />
                            <textarea
                              id="id-input"
                              className="inputText"
                              name="brief"
                              value={data.brief}
                              onChange={(e) => {
                                setData({
                                  ...data,
                                  [e.target.name]: e.target.value,
                                })
                              }}
                              style={{ minHeight: '100px' }}
                            ></textarea>
                            <span className="floating-label">
                              Describe your project briefly{' '}
                              <span style={{ color: 'red' }}>*</span>
                            </span>
                          </div>
                          <span id="id-err"></span>
                          <div className="input-field-row">
                            <div className="input-file-row">
                              <label
                                htmlFor="project_brief"
                                className="project_brief"
                              >
                                <div className="file-applent">
                                  <div className="icon">
                                    <Upload className="image-upload-icon" />
                                  </div>
                                  <div className="applent-label">
                                    Drag or browse your project brief (you can
                                    upload multipe files)
                                  </div>
                                </div>
                                <div className="row-wrap">
                                  <div id="filePush" className="button">
                                    upload
                                  </div>
                                </div>
                              </label>
                              <input
                                className="file-field"
                                type="file"
                                name="assets"
                                onChange={(e) => {
                                  setData({
                                    ...data,
                                    [e.target.name]: e.target.files,
                                  })
                                  getFile(false)
                                }}
                                multiple
                              />
                            </div>
                            <span id="id-err fileErr"></span>
                          </div>
                        </div>
                        <input
                          type="submit"
                          value={btntxt}
                          onClick={() => {
                            handleBtn()
                          }}
                          name="appl-page"
                          className="appl-page-btn"
                        />
                      </form>
                    </div>
                  </div>
                </section>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  )
}

export default ERecruit
