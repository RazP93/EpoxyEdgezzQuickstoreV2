import * as React from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';

import { cn } from '@/lib/utils';

const linkVariants = cva(
  'inline-flex items-center gap-1 justify-center rounded-md ring-offset-background transition-colors focus-visible:outline-none focus-visible:bg-caramel-300/10 focus-visible:ring-2 focus-visible:ring-caramel-300/10 disabled:pointer-events-none disabled:opacity-50',
  {
    variants: {
      variant: {
        default:
          'text-caramel underline decoration-dotted decoration-1 underline-offset-2 decoration-caramel-300/50 hover:decoration-solid hover:decoration-caramel-300 hover:text-caramel-400',
        button: 'rounded-full h-10 px-4 py-2',
      },
      theme: {
        default: '',
        primary:
          'bg-caramel text-bark-950 hover:bg-caramel/80 ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-caramel-300 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 focus-visible:bg-caramel-400',
        secondary:
          'border-2 bg-background hover:bg-caramel/50 hover:border-caramel ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-caramel-300 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50',
      },
      size: {
        default: '',
        lg: 'h-11 px-8',
        icon: 'h-10 w-10',
      },
    },
    defaultVariants: {
      variant: 'default',
      theme: 'default',
      size: 'default',
    },
  }
);

export interface LinkProps
  extends React.AnchorHTMLAttributes<HTMLAnchorElement>,
    VariantProps<typeof linkVariants> {
  asChild?: boolean;
  external?: boolean;
  icon?: boolean;
}

const Link = React.forwardRef<HTMLAnchorElement, LinkProps>(
  ({ className, variant, theme, size, icon = true, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : 'a';
    const isExternal = props.href && /^(https?:\/\/)/.test(props.href);

    const externalIcon =
      isExternal && icon ? (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className="w-4">
          <path
            fill="currentColor"
            d="M384 32c35.3 0 64 28.7 64 64v320c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V96c0-35.3 28.7-64 64-64h320zM160 144c-13.3 0-24 10.7-24 24s10.7 24 24 24h94.1L119 327c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l135-135V328c0 13.3 10.7 24 24 24s24-10.7 24-24V168c0-13.3-10.7-24-24-24H160z"
          />
        </svg>
      ) : null;

    return (
      <Comp
        className={cn(linkVariants({ variant, theme, size, className }))}
        ref={ref}
        {...props}
        target={isExternal ? '_blank' : undefined}
        rel={isExternal && 'noopener noreferrer'}
      >
        {props.children}
        {externalIcon}
      </Comp>
    );
  }
);
Link.displayName = 'Link';

export { Link, linkVariants };
