import clsx from 'clsx'

export type TBadgeColor =
  | 'default'
  | 'success'
  | 'warning'
  | 'error'
  | 'info'
  | 'brand'

export interface IBadgeProps {
  text: string
  className?: string
  variation?: 'filled' | 'outlined'
  color?: TBadgeColor
}

export const Badge = ({
  color = 'default',
  text,
  className,
  variation = 'filled'
}: IBadgeProps) => {
  return (
    <span
      className={clsx(
        'inline-flex items-center px-3 py-0.5 rounded-full w-fit',
        'paragraph-xxs font-medium',
        'before:rounded-full',
        {
          'bg-slate-200 text-slate-900':
            variation === 'filled' && color === 'default',
          'border border-slate-100 text-slate-100 bg-slate-300/20':
            variation === 'outlined' && color === 'default',
          'bg-emerald-900 text-emerald-300':
            variation === 'filled' && color === 'success',
          'border border-emerald-300 text-emerald-300 bg-emerald-300/20':
            variation === 'outlined' && color === 'success',
          'bg-amber-400 text-amber-800':
            variation === 'filled' && color === 'warning',
          'border border-amber-400 text-amber-400 bg-amber-400/20':
            variation === 'outlined' && color === 'warning',
          'bg-red-800 text-red-200':
            variation === 'filled' && color === 'error',
          'border border-red-400 text-red-400 bg-red-500/20':
            variation === 'outlined' && color === 'error',
          'bg-blue-700 text-blue-100':
            variation === 'filled' && color === 'info',
          'border border-blue-500 text-blue-500 bg-blue-500/20':
            variation === 'outlined' && color === 'info',
          'bg-gradient-primary text-white':
            variation === 'filled' && color === 'brand',
          'border-gradient-primary text-gradient-primary':
            variation === 'outlined' && color === 'brand'
        },
        className
      )}
    >
      {text}
    </span>
  )
}
