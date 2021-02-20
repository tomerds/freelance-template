const Banner = ({ title, imageUrl }) => {

  return (
    <div className="tw-w-full tw-flex tw-flex-col tw-items-center tw-mb-20">
      <div className="tw-w-full">
        <img alt="header" data-twic-src={`image:/${imageUrl}`} />
      </div>
      <h2 className="tw-text-8xl tw-pt-10 tw-uppercase">{title}</h2>
    </div>
  )
}

export default Banner