export type TODO = any;

export type Nullable<T> = T | null;

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