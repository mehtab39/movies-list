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
      backgroundColor: 'white', 
      width: '20%',
       marginLeft: '40%', 
       padding: '10px'
  }

  return (
    <React.Fragment>
      <div style={style}>
        <Button color="secondary" onClick={handleWishList}>Add To Wishlist</Button>
        <Button variant="outlined" color="error" onClick={handleRemove}>Remove</Button>
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

