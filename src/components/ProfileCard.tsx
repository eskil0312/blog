import Image from 'next/image'
import { ProfileCardInfo } from './ProfileInfo'

export function ProfileCard() {
  return (
    <div
      className="z-10 mb-8 hover:z-50 xl:mb-0"
      style={{ perspective: '600px' }}
    >
      <div className="flex flex-col overflow-hidden bg-white shadow-cyan-100/50 transition-all duration-200 ease-out dark:bg-dark dark:shadow-cyan-700/50 xl:rounded-lg xl:shadow-lg">
        <Image
          src={'/static/images/logo.jpg'}
          alt="avatar"
          width={550}
          height={350}
          style={{
            objectPosition: '50% 16%',
            objectFit: 'cover',
            width: '100%',
            aspectRatio: '17/11',
          }}
        />
        <ProfileCardInfo />
        <span className="h-1.5 bg-gradient-to-r from-green-300 via-blue-500 to-purple-600"></span>
      </div>
    </div>
  )
}
