'use client';
import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import AddBoxIcon from '@mui/icons-material/AddBox';
import styles from './EventInfoDialog.module.css';

interface AlertDialogProps {
  title: string;
  dialogTitle: string;
  dialogContent?: string;
  option1: string;
  option1Icon?: React.ReactNode;
  option2Icon?: React.ReactNode;
  option2: string;
  onOption1Click: () => void;
  onOption2Click: () => void;
}

export default function AlertDialog(props: AlertDialogProps) {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose1 = () => {
    setOpen(false);
    props.onOption1Click();
  };

  const handleClose2 = () => {
    setOpen(false);
    props.onOption2Click();
  };

  return (
    <React.Fragment>
      <Button className={styles.link} onClick={handleClickOpen}>
        {props.title}
        <AddBoxIcon />
      </Button>
      <Dialog
        open={open}
        onClose={() => setOpen(false)}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        PaperProps={{
          sx: {
            borderRadius: '16px',
            padding: '10px',
            maxWidth: '400px',
            textAlign: 'center',
          },
        }}
      >
        <DialogTitle
          id="alert-dialog-title"
          sx={{
            fontSize: '20px',
            fontWeight: 'bold',
            color: '#333',
            textAlign: 'center',
            paddingBottom: '10px',
          }}
        >
          {props.dialogTitle}
        </DialogTitle>
        <DialogContent className={styles.dialogContent}>
          {props.dialogContent && (
            <DialogContentText sx={{ color: '#666', fontSize: '16px' }}>
              {props.dialogContent}
            </DialogContentText>
          )}
        </DialogContent>
        <DialogActions className={styles.dialogActions}>
          <Button
            onClick={handleClose1}
            className={`${styles.actionButton} ${styles.secondaryButton}`}
            startIcon={props.option1Icon}
          >
            {props.option1}
          </Button>
          <Button
            onClick={handleClose2}
            autoFocus
            className={`${styles.actionButton} ${styles.primaryButton}`}
            startIcon={props.option2Icon}
          >
            {props.option2}
          </Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}
