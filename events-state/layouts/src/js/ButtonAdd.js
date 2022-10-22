import React from "react";
import { MDBBtn } from 'mdb-react-ui-kit';

function ButtonAdd() {
    return(
        <MDBBtn outline rounded className='mx-2' color='danger'>
            Add to card
        </MDBBtn>
    )
}

export default ButtonAdd;