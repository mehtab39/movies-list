import React from 'react';
import Button from '@mui/material/Button';
import { SnackbarProvider, useSnackbar } from 'notistack';
import { useDispatch } from 'react-redux';
import { addToWishlist, removeFromData } from '../../redux/action/dataAction';

function Snackbox({checked, setChecked}) {
  const dispatch = useDispatch()
  const { enqueueSnackbar } = useSnackbar();
  const handleWishList = () => {
    enqueueSnackbar('Adding...');
    dispatch(addToWishlist(checked))
    setTimeout($ => {
      enqueueSnackbar('Successfully added!', {variant: 'success'})
    }, 500);
  };
  const handleRemove = () => {
    enqueueSnackbar('Deleting...');
    dispatch(removeFromData(checked))
    setTimeout($ => {
    enqueueSnackbar('Successfully deleted!', {variant: 'error'})
    }, 500);

  };

  const style = {
    textAlign: 'center',
     position: 'sticky',
      bottom: 0, 
       width: '20%',
       marginLeft: '40%', 
       padding: '14px'
  }

  return (
    <React.Fragment>
      <div style={style}>
        <Button  halfwidth="true"
          variant="contained" 
          color="primary" onClick={handleWishList}>Add To Wishlist</Button>
        &nbsp;  &nbsp;<Button halfwidth="true"
         variant="contained" color="error" onClick={handleRemove}>Remove</Button>
      </div>
    </React.Fragment>
  );
}

export const MainSnackBox = ({checked}) => {
 
  return (
    <SnackbarProvider maxSnack={2}>
      <Snackbox checked={checked} />
    </SnackbarProvider>
  );
}

