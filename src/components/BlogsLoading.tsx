import React from 'react'

const BlogsLoading = () => {
  return (
    <div
      className="BloghlgloadingAnim"
      style={{
        width: '100%',
        display: 'flex',
        gap: '1rem',
        justifyContent: 'space-between',
      }}
    >
      <div className="blog-item loading" style={{ width: '300px' }}>
        <div
          className="blog-preview-image c-skeleton-square"
          style={{
            height: '160px',
            width: '100%',
            borderRadius: '12px',
          }}
        ></div>
        <div className="blog-details">
          <div
            className="blog-title c-skeleton-square"
            style={{
              height: '30px',
              width: '100%',
              borderRadius: '12px',
              marginTop: '10px',
            }}
          ></div>
        </div>
        <div
          className="blog-date c-skeleton-square"
          style={{
            height: '20px',
            width: '40%',
            borderRadius: '12px',
            marginTop: '10px',
          }}
        ></div>
      </div>
      <div className="blog-item loading" style={{ width: '300px' }}>
        <div
          className="blog-preview-image c-skeleton-square"
          style={{
            height: '160px',
            width: '100%',
            borderRadius: '12px',
          }}
        ></div>
        <div className="blog-details">
          <div
            className="blog-title c-skeleton-square"
            style={{
              height: '30px',
              width: '100%',
              borderRadius: '12px',
              marginTop: '10px',
            }}
          ></div>
        </div>
        <div
          className="blog-date c-skeleton-square"
          style={{
            height: '20px',
            width: '40%',
            borderRadius: '12px',
            marginTop: '10px',
          }}
        ></div>
      </div>
      <div className="blog-item loading" style={{ width: '300px' }}>
        <div
          className="blog-preview-image c-skeleton-square"
          style={{
            height: '160px',
            width: '100%',
            borderRadius: '12px',
          }}
        ></div>
        <div className="blog-details">
          <div
            className="blog-title c-skeleton-square"
            style={{
              height: '30px',
              width: '100%',
              borderRadius: '12px',
              marginTop: '10px',
            }}
          ></div>
        </div>
        <div
          className="blog-date c-skeleton-square"
          style={{
            height: '20px',
            width: '40%',
            borderRadius: '12px',
            marginTop: '10px',
          }}
        ></div>
      </div>
      <div className="blog-item loading" style={{ width: '300px' }}>
        <div
          className="blog-preview-image c-skeleton-square"
          style={{
            height: '160px',
            width: '100%',
            borderRadius: '12px',
          }}
        ></div>
        <div className="blog-details">
          <div
            className="blog-title c-skeleton-square"
            style={{
              height: '30px',
              width: '100%',
              borderRadius: '12px',
              marginTop: '10px',
            }}
          ></div>
        </div>
        <div
          className="blog-date c-skeleton-square"
          style={{
            height: '20px',
            width: '40%',
            borderRadius: '12px',
            marginTop: '10px',
          }}
        ></div>
      </div>
    </div>
  )
}

export default BlogsLoading
