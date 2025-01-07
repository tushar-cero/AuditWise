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
    )
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
    )
  );

const AddIcon = ({ size, color }: IIconProps) =>
  createElement(
    createSvgIcon(
      <svg width={size} height={size} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M8 2.66669V13.3334" stroke={color} strokeLinecap="round" strokeLinejoin="round" />
        <path d="M2.66663 8H13.3333" stroke={color} strokeLinecap="round" strokeLinejoin="round" />
      </svg>,
      'AddIcon'
    )
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
    )
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
    )
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
    default:
      return <DefaultIcon size={size} color={color} />;
  }
};
