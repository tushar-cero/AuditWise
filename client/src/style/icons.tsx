import React, { createElement } from 'react';
import { createSvgIcon } from '@mui/material';

interface IIconProps {
  size: string;
  color: string | undefined;
}
interface IIconLibrary extends IIconProps {
  name: string;
}

const DashboardIcon = ({ size, color }: IIconProps) =>
  createElement(
    createSvgIcon(
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={size} height={size} color={color} fill="none">
        <path
          d="M2 6C2 4.11438 2 3.17157 2.58579 2.58579C3.17157 2 4.11438 2 6 2C7.88562 2 8.82843 2 9.41421 2.58579C10 3.17157 10 4.11438 10 6V8C10 9.88562 10 10.8284 9.41421 11.4142C8.82843 12 7.88562 12 6 12C4.11438 12 3.17157 12 2.58579 11.4142C2 10.8284 2 9.88562 2 8V6Z"
          stroke="currentColor"
          strokeWidth="1.5"
        />
        <path
          d="M2 19C2 18.0681 2 17.6022 2.15224 17.2346C2.35523 16.7446 2.74458 16.3552 3.23463 16.1522C3.60218 16 4.06812 16 5 16H7C7.93188 16 8.39782 16 8.76537 16.1522C9.25542 16.3552 9.64477 16.7446 9.84776 17.2346C10 17.6022 10 18.0681 10 19C10 19.9319 10 20.3978 9.84776 20.7654C9.64477 21.2554 9.25542 21.6448 8.76537 21.8478C8.39782 22 7.93188 22 7 22H5C4.06812 22 3.60218 22 3.23463 21.8478C2.74458 21.6448 2.35523 21.2554 2.15224 20.7654C2 20.3978 2 19.9319 2 19Z"
          stroke="currentColor"
          strokeWidth="1.5"
        />
        <path
          d="M14 16C14 14.1144 14 13.1716 14.5858 12.5858C15.1716 12 16.1144 12 18 12C19.8856 12 20.8284 12 21.4142 12.5858C22 13.1716 22 14.1144 22 16V18C22 19.8856 22 20.8284 21.4142 21.4142C20.8284 22 19.8856 22 18 22C16.1144 22 15.1716 22 14.5858 21.4142C14 20.8284 14 19.8856 14 18V16Z"
          stroke="currentColor"
          strokeWidth="1.5"
        />
        <path
          d="M14 5C14 4.06812 14 3.60218 14.1522 3.23463C14.3552 2.74458 14.7446 2.35523 15.2346 2.15224C15.6022 2 16.0681 2 17 2H19C19.9319 2 20.3978 2 20.7654 2.15224C21.2554 2.35523 21.6448 2.74458 21.8478 3.23463C22 3.60218 22 4.06812 22 5C22 5.93188 22 6.39782 21.8478 6.76537C21.6448 7.25542 21.2554 7.64477 20.7654 7.84776C20.3978 8 19.9319 8 19 8H17C16.0681 8 15.6022 8 15.2346 7.84776C14.7446 7.64477 14.3552 7.25542 14.1522 6.76537C14 6.39782 14 5.93188 14 5Z"
          stroke="currentColor"
          strokeWidth="1.5"
        />
      </svg>,
      'DashboardIcon'
    ),
    {
      style: {
        width: size,
        height: size,
        display: 'inline-block'
      }
    }
  );

const SheetIcon = ({ size, color }: IIconProps) =>
  createElement(
    createSvgIcon(
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={size} height={size} color={color} fill="none">
        <path
          d="M20.1069 20.1088C18.7156 21.5001 16.4765 21.5001 11.9981 21.5001C7.51976 21.5001 5.28059 21.5001 3.88935 20.1088C2.49811 18.7176 2.49811 16.4784 2.49811 12.0001C2.49811 7.52172 2.49811 5.28255 3.88935 3.89131C5.28059 2.50006 7.51976 2.50006 11.9981 2.50006C16.4764 2.50006 18.7156 2.50006 20.1069 3.8913C21.4981 5.28255 21.4981 7.52172 21.4981 12.0001C21.4981 16.4784 21.4981 18.7176 20.1069 20.1088Z"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path d="M8.99811 21.5001L8.99811 2.50006" stroke="currentColor" strokeWidth="1.5" />
        <path d="M21.4981 8.00006L2.49811 8.00006" stroke="currentColor" strokeWidth="1.5" />
        <path d="M21.4981 16.0001H2.49811" stroke="currentColor" strokeWidth="1.5" />
      </svg>,
      'SheetIcon'
    ),
    {
      style: {
        width: size,
        height: size,
        display: 'inline-block'
      }
    }
  );

const AddIcon = ({ size, color }: IIconProps) =>
  createElement(
    createSvgIcon(
      <svg width={size} height={size} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M8 2.66669V13.3334" stroke={color} strokeLinecap="round" strokeLinejoin="round" />
        <path d="M2.66663 8H13.3333" stroke={color} strokeLinecap="round" strokeLinejoin="round" />
      </svg>,
      'AddIcon'
    ),
    {
      style: {
        width: size,
        height: size,
        display: 'inline-block'
      }
    }
  );

const UserIcon = ({ size, color }: IIconProps) =>
  createElement(
    createSvgIcon(
      <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} color={color} fill="none">
        <path
          d="M6.57757 15.4816C5.1628 16.324 1.45336 18.0441 3.71266 20.1966C4.81631 21.248 6.04549 22 7.59087 22H16.4091C17.9545 22 19.1837 21.248 20.2873 20.1966C22.5466 18.0441 18.8372 16.324 17.4224 15.4816C14.1048 13.5061 9.89519 13.5061 6.57757 15.4816Z"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M16.5 6.5C16.5 8.98528 14.4853 11 12 11C9.51472 11 7.5 8.98528 7.5 6.5C7.5 4.01472 9.51472 2 12 2C14.4853 2 16.5 4.01472 16.5 6.5Z"
          stroke="currentColor"
          strokeWidth="1.5"
        />
      </svg>,
      'UserIcon'
    ),
    {
      style: {
        width: size,
        height: size,
        display: 'inline-block'
      }
    }
  );

const CalendarIcon = ({ size, color }: IIconProps) =>
  createElement(
    createSvgIcon(
      <svg width={size} height={size} viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M10.5 1.16663V2.33329M3.5 1.16663V2.33329"
          stroke="currentColor"
          strokeWidth="0.875"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M6.99721 7.58337H7.00246M6.99721 9.91671H7.00246M9.32792 7.58337H9.33317M4.6665 7.58337H4.67174M4.6665 9.91671H4.67174"
          stroke="currentColor"
          strokeWidth="1.16667"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M2.0415 4.66663H11.9582"
          stroke="currentColor"
          strokeWidth="0.875"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M1.45825 7.14187C1.45825 4.60013 1.45825 3.32925 2.18866 2.53962C2.91906 1.75 4.09462 1.75 6.44575 1.75H7.55409C9.90521 1.75 11.0808 1.75 11.8112 2.53962C12.5416 3.32925 12.5416 4.60013 12.5416 7.14187V7.44147C12.5416 9.98323 12.5416 11.2541 11.8112 12.0437C11.0808 12.8333 9.90521 12.8333 7.55409 12.8333H6.44575C4.09462 12.8333 2.91906 12.8333 2.18866 12.0437C1.45825 11.2541 1.45825 9.98323 1.45825 7.44147V7.14187Z"
          stroke="currentColor"
          strokeWidth="0.875"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M1.75 4.66663H12.25"
          stroke="currentColor"
          strokeWidth="0.875"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>,
      'CalendarIcon'
    ),
    {
      style: {
        width: size,
        height: size,
        display: 'inline-block'
      }
    }
  );

const ClockIcon = ({ size, color }: IIconProps) =>
  createElement(
    createSvgIcon(
      <svg width={size} height={size} viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g clipPath="url(#clip0_317_543)">
          <path
            d="M6.99984 12.8333C10.2215 12.8333 12.8332 10.2216 12.8332 6.99996C12.8332 3.7783 10.2215 1.16663 6.99984 1.16663C3.77818 1.16663 1.1665 3.7783 1.1665 6.99996C1.1665 10.2216 3.77818 12.8333 6.99984 12.8333Z"
            stroke="currentColor"
            strokeWidth="0.875"
          />
          <path
            d="M7 4.66663V6.99996L8.16667 8.16663"
            stroke="currentColor"
            strokeWidth="0.875"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </g>
        <defs>
          <clipPath id="clip0_317_543">
            <rect width={size} height={size} fill={color} />
          </clipPath>
        </defs>
      </svg>,
      'ClockIcon'
    ),
    {
      style: {
        width: size,
        height: size,
        display: 'inline-block'
      }
    }
  );

const TextWrittenIcon = ({ size, color }: IIconProps) =>
  createElement(
    createSvgIcon(
      <svg width={size} height={size} viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M1.75 1.75H6.41667"
          stroke="currentColor"
          strokeWidth="0.875"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M1.75 5.25H6.41667"
          stroke="currentColor"
          strokeWidth="0.875"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M1.75 8.75H12.25"
          stroke="currentColor"
          strokeWidth="0.875"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M1.75 12.25H12.25"
          stroke="currentColor"
          strokeWidth="0.875"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>,
      'TextWrittenIcon'
    ),
    {
      style: {
        width: size,
        height: size,
        display: 'inline-block'
      }
    }
  );

const DollarIcon = ({ size, color }: IIconProps) =>
  createElement(
    createSvgIcon(
      <svg width={size} height={size} viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M10.7429 4.75313C10.7429 3.41674 9.06705 2.33337 6.99984 2.33337C4.9326 2.33337 3.25678 3.41674 3.25678 4.75313C3.25678 6.08952 4.27761 6.8272 6.99984 6.8272C9.72208 6.8272 11.0832 7.51857 11.0832 9.24698C11.0832 10.9753 9.255 11.6667 6.99984 11.6667C4.74468 11.6667 2.9165 10.5833 2.9165 9.24698"
          stroke="currentColor"
          strokeWidth="0.875"
          strokeLinecap="round"
        />
        <path
          d="M7 1.16663V12.8333"
          stroke="currentColor"
          strokeWidth="0.875"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>,
      'DollarIcon'
    ),
    {
      style: {
        width: size,
        height: size,
        display: 'inline-block'
      }
    }
  );

const TagIcon = ({ size, color }: IIconProps) =>
  createElement(
    createSvgIcon(
      <svg width={size} height={size} viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g clipPath="url(#clip0_317_541)">
          <path
            d="M10.2085 2.91681C10.6917 2.91681 11.0835 3.30856 11.0835 3.79181C11.0835 4.27506 10.6917 4.66681 10.2085 4.66681C9.72525 4.66681 9.3335 4.27506 9.3335 3.79181C9.3335 3.30856 9.72525 2.91681 10.2085 2.91681Z"
            stroke="currentColor"
            strokeWidth="0.875"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M1.61814 6.50057C1.03297 7.15413 1.02038 8.14014 1.55743 8.83378C2.62315 10.2102 3.7896 11.3767 5.16603 12.4423C5.85966 12.9794 6.84566 12.9668 7.49923 12.3817C9.27361 10.7929 10.8985 9.13257 12.4668 7.3079C12.6218 7.12753 12.7188 6.90645 12.7405 6.66956C12.8368 5.62211 13.0345 2.60435 12.215 1.78481C11.3954 0.965265 8.37767 1.16299 7.33024 1.25924C7.09335 1.28101 6.87226 1.37798 6.69184 1.53302C4.86724 3.10123 3.20689 4.72619 1.61814 6.50057Z"
            stroke="currentColor"
            strokeWidth="0.875"
          />
          <path
            d="M4.0835 8.16675L5.83348 9.91675"
            stroke="currentColor"
            strokeWidth="0.875"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </g>
        <defs>
          <clipPath id="clip0_317_541">
            <rect width={size} height={size} fill={color} />
          </clipPath>
        </defs>
      </svg>,
      'TagIcon'
    ),
    {
      style: {
        width: size,
        height: size,
        display: 'inline-block'
      }
    }
  );

const CreditIcon = ({ size, color }: IIconProps) =>
  createElement(
    createSvgIcon(
      <svg width={size} height={size} viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M12.8334 5.54163C12.8121 4.22779 12.7104 3.46879 12.2246 2.92415C12.1264 2.81398 12.018 2.71208 11.9009 2.61963C11.1686 2.04163 10.0719 2.04163 7.87835 2.04163H6.12747C3.93391 2.04163 2.83713 2.04163 2.10488 2.61963C1.98777 2.71208 1.87945 2.81398 1.78118 2.92415C1.16675 3.61299 1.16675 4.64476 1.16675 6.70829C1.16675 8.77183 1.16675 9.80358 1.78118 10.4924C1.87945 10.6026 1.98777 10.7045 2.10488 10.7969C2.83713 11.375 3.93391 11.375 6.12747 11.375H6.41675"
          stroke="currentColor"
          strokeWidth="0.875"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path d="M1.16675 4.95837H12.8334" stroke="currentColor" strokeWidth="0.875" strokeLinejoin="round" />
        <path
          d="M11.2778 7.29163L11.758 7.73373C11.8626 7.83646 11.9148 7.88785 11.8965 7.93148C11.878 7.97512 11.8041 7.97512 11.6563 7.97512H9.84541C8.91832 7.97512 8.16675 8.71379 8.16675 9.62496C8.16675 9.83035 8.20496 10.0269 8.27466 10.2083M9.72232 11.9583L9.24212 11.5162C9.13759 11.4135 9.08532 11.3621 9.1037 11.3184C9.12213 11.2748 9.19604 11.2748 9.34386 11.2748H11.1548C12.0818 11.2748 12.8334 10.5361 12.8334 9.62496C12.8334 9.41957 12.7952 9.22298 12.7255 9.04163"
          stroke="currentColor"
          strokeWidth="0.875"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>,
      'CreditIcon'
    ),
    {
      style: {
        width: size,
        height: size,
        display: 'inline-block'
      }
    }
  );

const CloseIcon = ({ size, color }: IIconProps) =>
  createElement(
    createSvgIcon(
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={size} height={size} color={color} fill="none">
        <path
          d="M18 6L12 12M12 12L6 18M12 12L18 18M12 12L6 6"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>,
      'CloseIcon'
    ),
    {
      style: {
        width: size,
        height: size,
        display: 'inline-block'
      }
    }
  );
const DefaultIcon = ({ size, color }: IIconProps) =>
  createElement(
    createSvgIcon(
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="48" height="48" color="#000000" fill="none">
        <path
          d="M2.5 12C2.5 7.52166 2.5 5.28249 3.89124 3.89124C5.28249 2.5 7.52166 2.5 12 2.5C16.4783 2.5 18.7175 2.5 20.1088 3.89124C21.5 5.28249 21.5 7.52166 21.5 12C21.5 16.4783 21.5 18.7175 20.1088 20.1088C18.7175 21.5 16.4783 21.5 12 21.5C7.52166 21.5 5.28249 21.5 3.89124 20.1088C2.5 18.7175 2.5 16.4783 2.5 12Z"
          stroke="currentColor"
          strokeWidth="1.5"
        />
      </svg>,
      'UserIcon'
    ),
    {
      style: {
        width: size,
        height: size,
        display: 'inline-block'
      }
    }
  );

export const IconLibrary = ({ name, size, color }: IIconLibrary) => {
  switch (name) {
    case 'DashboardIcon':
      return <DashboardIcon size={size} color={color} />;
    case 'SheetIcon':
      return <SheetIcon size={size} color={color} />;
    case 'AddIcon':
      return <AddIcon size={size} color={color} />;
    case 'UserIcon':
      return <UserIcon size={size} color={color} />;
    case 'CalendarIcon':
      return <CalendarIcon size={size} color={color} />;
    case 'ClockIcon':
      return <ClockIcon size={size} color={color} />;
    case 'TextWrittenIcon':
      return <TextWrittenIcon size={size} color={color} />;
    case 'DollarIcon':
      return <DollarIcon size={size} color={color} />;
    case 'TagIcon':
      return <TagIcon size={size} color={color} />;
    case 'CreditIcon':
      return <CreditIcon size={size} color={color} />;
    case 'CloseIcon':
      return <CloseIcon size={size} color={color} />;
    default:
      return <DefaultIcon size={size} color={color} />;
  }
};
