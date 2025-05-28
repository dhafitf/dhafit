import CustomLink from '@/common/custom-link'
import { Button } from '@/ui/button'

const NotFoundPaga = () => {
  return (
    <div>
      <div>
        <h1 className='pb-4 text-4xl font-bold'>404 - Not Found.</h1>
        <p className='pb-10'>
          It looks like you spelled the address wrong. Please double check the page address.
        </p>
      </div>
      <Button asChild className='w-fit' variant='outline'>
        <CustomLink href='/' title='Go to Home'>
          Go to Home
        </CustomLink>
      </Button>
    </div>
  )
}

export default NotFoundPaga
