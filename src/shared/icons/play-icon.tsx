import { PRIMARY_COLOR } from "@/shared/configs/theme.config";
import { IconProps } from "@/shared/lib/types";

const PlayIcon = ({
  className,
  size = 24,
  color = PRIMARY_COLOR,
}: IconProps) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="-1 0 12 12"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      className={className}
    >
      <title>play [#1000]</title>
      <desc>Created with Sketch.</desc>
      <defs></defs>
      <g
        id="Page-1"
        stroke="none"
        strokeWidth="1"
        fill="none"
        fillRule="evenodd"
      >
        <g
          id="Dribbble-Light-Preview"
          transform="translate(-65.000000, -3803.000000)"
          fill={color}
        >
          <g id="icons" transform="translate(56.000000, 160.000000)">
            <path
              d="M18.074,3650.7335 L12.308,3654.6315 C10.903,3655.5815 9,3654.5835 9,3652.8985 L9,3645.1015 C9,3643.4155 10.903,3642.4185 12.308,3643.3685 L18.074,3647.2665 C19.306,3648.0995 19.306,3649.9005 18.074,3650.7335"
              id="play-[#1000]"
            ></path>
          </g>
        </g>
      </g>
    </svg>
  );
};

export default PlayIcon;
