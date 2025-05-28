import CustomLink from '@/common/custom-link'
import Profile from '@/common/profile'
import SpotifyNowPlaying from '@/molecules/SpotifyNowPlaying'
import { Button } from '@/ui/button'
import { socialItems } from '~/libs/constants'

const HeroSection = () => {
  return (
    <div className='py-16 flex flex-col gap-8'>
      <Profile name='Dhafit Farenza' role='Full-stack Developer' />
      <div className='flex flex-col gap-5'>
        <p className='sm:max-w-[75%]'>
          Full-stack developer from Indonesia, mostly working with JavaScript & TypeScript. Also
          into open content, translations, and side projects.
        </p>
        <SpotifyNowPlaying />
      </div>
      <div className='flex xs:items-center font-semibold max-xs:flex-col max-xs:gap-4'>
        <Button asChild className='hover:text-white w-fit'>
          <CustomLink href='mailto:dhafidfz@gmail.com' title='Send me an email'>
            Get in touch
          </CustomLink>
        </Button>
        <div className='flex items-center gap-3 xs:ml-4'>
          {socialItems.map((item) => {
            const Icon = item.icon
            return (
              <Button asChild key={item.path} size='icon' className='rounded-full hover:text-white'>
                <CustomLink href={item.path} title={item.label}>
                  <Icon />
                </CustomLink>
              </Button>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default HeroSection
