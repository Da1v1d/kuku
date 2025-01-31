export type TODO = any;

export type Nullable<T> = T | null;

export type Maybe<T> = {
  [K in keyof T]?: Nullable<T[K]>;
};

export type DeezerListResponse<T> = {
  data: T[];
  total: number;
  next: string;
};

export type IconProps = {
  className?: string;
  size?: number;
  color?: string;
};
