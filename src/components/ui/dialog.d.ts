import * as React from 'react';
import * as DialogPrimitive from '@radix-ui/react-dialog';

declare const Dialog: React.FC<DialogPrimitive.DialogProps>;
declare const DialogTrigger: React.FC<DialogPrimitive.DialogTriggerProps>;
declare const DialogContent: React.ForwardRefExoticComponent<DialogPrimitive.DialogContentProps & React.RefAttributes<HTMLDivElement>>;
declare const DialogHeader: React.FC<React.HTMLAttributes<HTMLDivElement>>;
declare const DialogFooter: React.FC<React.HTMLAttributes<HTMLDivElement>>;
declare const DialogTitle: React.ForwardRefExoticComponent<DialogPrimitive.DialogTitleProps & React.RefAttributes<HTMLHeadingElement>>;
declare const DialogDescription: React.ForwardRefExoticComponent<DialogPrimitive.DialogDescriptionProps & React.RefAttributes<HTMLParagraphElement>>;

export {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogFooter,
  DialogTitle,
  DialogDescription,
};
