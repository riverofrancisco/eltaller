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
      <Button
        className={styles.link}
        onClick={handleClickOpen}
        sx={{
          textDecoration: 'none',
          background: 'linear-gradient(135deg, #e3c6ff 0%, #d2f5e1 100%)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          color: '#333',
          padding: '15px 20px',
          borderRadius: '12px',
          fontWeight: 'bold',
          fontSize: '16px',
          transition: 'all 0.3s ease',
          boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.15)',
          border: 'none',
          width: '100%',
          cursor: 'pointer',
          '&:hover': {
            background: 'linear-gradient(135deg, #d1a3ff 0%, #b8edc7 100%)',
            transform: 'translateY(-2px)',
            boxShadow: '0px 6px 16px rgba(0, 0, 0, 0.2)',
          },
        }}
      >
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
