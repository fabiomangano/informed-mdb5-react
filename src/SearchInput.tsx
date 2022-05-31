import { Input, useFieldState, FieldProps, InputProps, useField } from 'informed';
import { MDBIcon } from 'mdb-react-ui-kit';


const MyInput: React.FC<FieldProps<InputProps>> = (props) => {

  const { render, informed, userProps, ref } = useField({
    type: 'text',
    ...props
  });



  return (
    <>
      <span className="input-group-text border 0" style={{ backgroundColor: '#efefef' }}>
        <MDBIcon icon="search" />
      </span>
      <input
        type="search"
        className="form-control border-0 form-icon-trailing"
        placeholder="Inserisci la parola chiave o il prodotto"
        aria-label="Search"
        ref={ref} 
      />
      <span className="input-group-text border 0" style={{ backgroundColor: '#efefef' }}>
        <MDBIcon icon="sliders-h" />
      </span>

    </>
  )
};

export default MyInput;