const ErrorBox = () => {
  return (
    <div className='p-4 border border-dashed border-red-800 rounded-lg flex max-sm:flex-col gap-4 sm:items-center justify-between'>
      <div className='flex flex-col gap-1'>
        <h4 className='font-semibold'>Something went wrong!</h4>
        <span className='text-gray-400 text-sm'>
          Please try again later or contact us if the problem persists.
        </span>
      </div>
    </div>
  )
}

export default ErrorBox
