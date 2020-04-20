import React from 'react';
import { Button} from "@material-ui/core"



function Buttons(props) {
  return ( 
  <Button
    onClick={() => props.updateFormState('email')}
  >
    
    <p>Sign in with Email</p>
  </Button>
  );
}

export default Buttons;