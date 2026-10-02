import "react";

declare module "react" {
  interface VideoHTMLAttributes<T> extends MediaHTMLAttributes<T> {
    defaultMuted?: boolean;
  }
}
