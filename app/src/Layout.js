const Layout = ({ children }) => {
  return (
    <div className="tw-flex tw-items-center tw-flex-col tw-pt-40 tw-min-h-screen tw-bg-blue-50 tw-flex-grow tw-px-5 md:tw-px-20 lg:tw-px-44">
      <div className="tw-max-w-6xl tw-bg-white tw-p-5 lg:tw-p-24">
        {children}
      </div>
    </div>
  )
}

export default Layout