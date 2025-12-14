import { Loader2 } from 'lucide-react'
import { tv, VariantProps } from 'tailwind-variants'

const loadingIconVariations = tv({
  base: 'animate-spin text-white text-lg',
})

type ILoadingIconProps = {
  className?: string
} & VariantProps<typeof loadingIconVariations>

export const LoadingIcon: React.FC<ILoadingIconProps> = ({
  className,
  ...rest
}) => {
  return <Loader2 className={loadingIconVariations({ className })} {...rest} />
}
