import React from 'react';
import { Form } from 'informed';
import MyInput from './SearchInput';
import style from './App.module.css';
import { MDBIcon } from 'mdb-react-ui-kit';


function App() {
  const onSubmit: (values: Record<string, unknown>) => void = ({ values }) => console.log(values);

  return (
    <>
      <Form onSubmit={onSubmit} className={style.form}>
        <MyInput name="search" />
      </Form>
    </>
  );
}

export default App;
