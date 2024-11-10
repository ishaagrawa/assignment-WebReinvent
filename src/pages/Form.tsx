import React from 'react';

const Form = ({ children, onSubmit }: { children: React.ReactNode; onSubmit: () => void }) => (
  <form onSubmit={onSubmit}>{children}</form>
);

export default Form;
