import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';

type ImageLightboxProps = {
  imageSrc: string;
  title?: string;
  description?: string;
  children: React.ReactNode;
};

export function ImageLightbox({ imageSrc, title, description, children }: ImageLightboxProps) {
  const { src } = JSON.parse(imageSrc);
  return (
    <div className="flex aspect-video items-center overflow-hidden rounded-lg ring-caramel-100 ring-offset-2 ring-offset-background focus-within:ring-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50">
      <Dialog>
        <DialogTrigger>{children}</DialogTrigger>
        <DialogContent>
          {(title || description) && (
            <DialogHeader>
              {title && <DialogTitle>{title}</DialogTitle>}
              {description && <DialogDescription>{description}</DialogDescription>}
            </DialogHeader>
          )}
          <div className="max-h-96 overflow-y-auto">
            <img
              src={src}
              alt="Product image of epoxy resin table"
              className="select-none justify-self-center"
              loading="eager"
            />
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
