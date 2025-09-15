import clsx from 'clsx'

export type TLogoColor = 'white' | 'black' | 'gradient'

export interface LogoProps {
  showText?: boolean
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl'
  textColor?: TLogoColor
  logoColor?: TLogoColor
}

export const Logo = ({
  showText,
  size = 'sm',
  textColor = 'black',
  logoColor = 'gradient'
}: LogoProps) => (
  <div className={clsx('flex items-center gap-2 logo-navike21')}>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 224 224"
      fill="none"
      className={clsx({
        'w-8 h-8': size === 'xs',
        'w-12 h-12': size === 'sm',
        'w-14 h-14': size === 'md',
        'w-18 h-18': size === 'lg',
        'w-24 h-24': size === 'xl'
      })}
    >
      <defs>
        <linearGradient id="gradient" x1="0%" y1="100%" x2="100%" y2="80%">
          <stop offset="0%" stopColor="#17CADD" />
          <stop offset="100%" stopColor="#4A45DA" />
        </linearGradient>
      </defs>
      <path d="M40 42H185V176H40V42Z" className="fill-white" />
      <path
        d="M111.457 0.00129395C49.5975 0.295432 -0.292844 50.6835 0.00129395 112.543C0.295432 174.403 50.6835 224.293 112.543 223.999C174.403 223.705 224.293 173.316 223.999 111.457C223.705 49.5975 173.316 -0.292844 111.457 0.00129395ZM149.423 155.623H128.743V100.936C128.743 95.6867 127.521 91.6366 125.1 88.7405C122.679 85.867 119.037 84.4189 114.172 84.4189C110.597 84.4189 107.249 85.2334 104.126 86.8399C101.004 88.469 98.0398 90.6637 95.2568 93.4467V155.578H74.5766V69.712H87.2245C89.8944 69.712 91.6592 70.9564 92.4964 73.4679L93.9218 80.2557C95.6414 78.4683 97.4741 76.8618 99.3973 75.3911C101.321 73.9431 103.357 72.676 105.506 71.6352C107.656 70.5718 109.964 69.7573 112.407 69.2142C114.851 68.6486 117.543 68.3771 120.44 68.3771C125.123 68.3771 129.286 69.169 132.906 70.7528C136.527 72.3366 139.558 74.5766 142.002 77.4501C144.423 80.3236 146.278 83.7627 147.523 87.7449C148.767 91.7271 149.401 96.1392 149.401 100.936L149.423 155.623Z"
        fill={
          (logoColor === 'gradient' && 'url(#gradient)') ||
          (logoColor === 'black' && '#000000') ||
          (logoColor === 'white' && '#FFFFFF') ||
          'url(#gradient)'
        }
      />
    </svg>
    {showText && (
      <span
        className={clsx(
          'font-medium leading-none transition-all duration-500',
          {
            'text-md': size === 'xs',
            'text-xl': size === 'sm',
            'text-2xl': size === 'md',
            'text-3xl': size === 'lg',
            'text-5xl': size === 'xl'
          },
          {
            'bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-600':
              textColor === 'gradient',
            'text-black': textColor === 'black',
            'text-white': textColor === 'white'
          }
        )}
      >
        navike21
      </span>
    )}
  </div>
)
