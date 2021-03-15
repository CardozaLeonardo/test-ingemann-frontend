import React, { FC, ReactNode } from 'react';
import { Link, LinkProps } from 'react-router-dom';

interface Props extends LinkProps {
  to: string;
  className?: string;
  children?: ReactNode | any;
}

const LinkTo: FC<Props> = ({ to, className, children, ...rest }) => {
  return (
    <Link to={to} className={className} {...rest}>
      {children}
    </Link>
  );
};

export default LinkTo;
