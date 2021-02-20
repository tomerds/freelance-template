const Topic = ({ title, body, imageUrl, imageRight }) => {

  return (
    <div className={`tw-w-full tw-mb-10 tw-flex tw-flex-col tw-items-center ${imageRight ? 'lg:tw-flex-row-reverse' : 'lg:tw-flex-row'}`}>
      <div className="tw-w-full">
        <img alt="header" data-twic-src={`image:/${imageUrl}`} />
      </div >
      <div className={`tw-w-full ${imageRight ? 'lg:tw-pr-10' : 'lg:tw-pl-10'}`}>
        <h2 className="tw-text-5xl tw-pt-5 tw-text-center">{title}</h2>
        <p className="tw-text-md tw-pt-5 tw-text-center">{body}</p>
      </div>
    </div >
  )
}

export default Topic