'use client';
import * as React from 'react';
import { IconSquarePlus } from '@tabler/icons-react';

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
  const [email, setEmail] = React.useState('');
  const [selectedOptions, setSelectedOptions] = React.useState<string[]>(['']);
  
  const dialogRef = React.useRef<HTMLDialogElement>(null);

  const handleClickOpen = () => {
    dialogRef.current?.showModal();
  };

  const handleClose1 = () => {
    dialogRef.current?.close();
    props.onAction1Click();
  };

  const handleClose2 = () => {
    dialogRef.current?.close();
    props.onAction2Click();
  };

  return (
    <>
      <button
        onClick={handleClickOpen}
        className="btn btn-ghost w-full justify-between items-center bg-base-100 shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all text-base-content rounded-xl h-14 border border-base-200"
      >
        <span className="font-bold text-base">{props.title}</span>
        <IconSquarePlus />
      </button>

      <dialog ref={dialogRef} className="modal modal-bottom sm:modal-middle">
        <div className="modal-box bg-base-100 rounded-2xl text-center">
          <h3 className="font-bold text-xl text-base-content mb-2">{props.dialogTitle}</h3>
          
          {props.dialogContent && (
            <p className="py-2 text-base-content/70">{props.dialogContent}</p>
          )}

          {props.dialogOptions && (
            <div className="grid grid-cols-2 gap-3 my-4">
              {props.dialogOptions.map((option, index) => (
                <label key={index} className="label cursor-pointer justify-start gap-3 bg-base-200/50 p-2 rounded-lg border border-base-200">
                  <input 
                    type="checkbox" 
                    className="checkbox checkbox-primary checkbox-sm"
                    checked={selectedOptions.includes(option)}
                    onChange={() => {
                      if (selectedOptions.includes(option)) {
                        setSelectedOptions(selectedOptions.filter((o) => o !== option));
                      } else {
                        setSelectedOptions([...selectedOptions, option]);
                      }
                    }}
                  />
                  <span className="label-text font-medium">{option}</span>
                </label>
              ))}
            </div>
          )}

          <div className="form-control w-full mt-4">
            <input
              type="email"
              placeholder="Tu mail"
              className="input input-bordered w-full"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="modal-action justify-center gap-3 mt-6">
            <button className="btn btn-outline" onClick={handleClose1}>
              {props.action1Icon} {props.action1}
            </button>
            <button className="btn btn-primary" onClick={handleClose2}>
              {props.action2Icon} {props.action2}
            </button>
          </div>
        </div>
        <form method="dialog" className="modal-backdrop">
          <button>cerrar</button>
        </form>
      </dialog>
    </>
  );
}
