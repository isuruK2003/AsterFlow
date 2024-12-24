import { ReactNode } from 'react';

function Container({ className, children }: { className?: string, children?: ReactNode }) {
  return (
    <div className={className}>
      {children}
    </div>
  );
}

export default Container;
