'use client';
import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import TextField from '@mui/material/TextField';
import AddBoxIcon from '@mui/icons-material/AddBox';

import styles from './ContactInfoDialog.module.css';
import FormGroup from '@mui/material/FormGroup/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

interface AlertDialogProps {
  title: string;
  dialogTitle: string;
  dialogContent?: string;
  dialogOptions?: string[];
  action1: string;
  action1Icon?: React.ReactNode;
  action2Icon?: React.ReactNode;
  action2: string;
  onAction1Click: () => void;
  onAction2Click: () => void;
}

export default function ContactInfoDialog(props: AlertDialogProps) {
  const [open, setOpen] = React.useState(false);
  const [email, setEmail] = React.useState('');
  const [selectedOptions, setSelectedOptions] = React.useState(['']);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose1 = () => {
    setOpen(false);
    props.onAction1Click();
  };

  const handleClose2 = () => {
    setOpen(false);
    props.onAction2Click();
  };

  return (
    <React.Fragment>
      <Button
        className={styles.link}
        onClick={handleClickOpen}
        sx={{
          textDecoration: 'none',
          backgroundColor: 'none',
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
          {props.dialogOptions && (
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(100px, 1fr))',
              
              gap: '12px',
              marginTop: 12,
              width: '100%',
            }}>
              {props.dialogOptions.map((option, index) => (
                <FormGroup key={index}>
                  <FormControlLabel control={<Checkbox defaultChecked />} onChange={() => {
                    if (selectedOptions.includes(option)) {
                      setSelectedOptions(selectedOptions.filter((o) => o !== option));
                    } else {
                      setSelectedOptions([...selectedOptions, option]);
                    }
                  }} checked={selectedOptions.includes(option)} label={option} />
           
                </FormGroup>
              ))}
            </div>
          )}

          <TextField fullWidth margin="normal" size='small' variant="outlined" label="Tu mail">
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </TextField>

        </DialogContent>
        <DialogActions className={styles.dialogActions}>
          <Button
            onClick={handleClose1}
            className={`${styles.actionButton} ${styles.secondaryButton}`}
            startIcon={props.action1Icon}
          >
            {props.action1}
          </Button>
          <Button
            onClick={handleClose2}
            autoFocus
            className={`${styles.actionButton} ${styles.primaryButton}`}
            startIcon={props.action2Icon}
          >
            {props.action2}
          </Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}
