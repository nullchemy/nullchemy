import axios from 'axios'

const ImageUpload = async (file: File | null) => {
  const cloudname = process.env.REACT_APP_CLOUDINARY_CLOUDNAME || 'dkazrhnxq'
  const upload_preset = process.env.REACT_APP_UPLOAD_PRESET || 'pbzf1gsp'
  console.log(cloudname, upload_preset)

  if (file) {
    try {
      if (cloudname && upload_preset) {
        const formData = new FormData()
        formData.append('file', file)
        formData.append('upload_preset', upload_preset as string)
        const config = {
          method: 'POST',
          maxBodyLength: Infinity,
          url: `https://api.cloudinary.com/v1_1/${cloudname}/image/upload`,
          data: formData,
        }
        const response = await axios(config)

        if (response.status === 200) {
          const data = await response.data
          return data.secure_url
        } else {
          throw new Error('Image upload failed')
        }
      } else {
        throw new Error('Image upload failed')
      }
    } catch (error) {
      console.error('Error uploading image:', error)
      return null
    }
  } else {
    return null
  }
}

export default ImageUpload
