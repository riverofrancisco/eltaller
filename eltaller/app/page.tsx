'use client';

import Image from 'next/image';
import ContactInfoDialog from '@/components/Dialogs/ContactInfoDialog';
import ActivityCard from '@/components/ui/cards/ActivityCard';
import activities from '@/mock/activities.json';
import { 
  IconBrandInstagram, 
  IconBrandFacebook, 
  IconMapPin, 
  IconBrandYoutube, 
  IconBrandWhatsapp,
  IconX,
  IconCheck
} from '@tabler/icons-react';

export default function Welcome() {
  const handleOption1Click = () => {
    console.log('Option 1 clicked');
  };

  const handleOption2Click = () => {
    window.open(
      'https://link.mercadopago.com.ar/espacioquicasusmaes',
      '_blank'
    );
  };

  return (
    <div className="min-h-screen bg-base-200 flex items-center justify-center py-10 px-4">
      <div className="max-w-md w-full flex flex-col gap-6">
        <div className="flex flex-col items-center gap-2">
          <Image
            src="/images/logo.png"
            alt="El Taller"
            width={150}
            height={150}
            className="rounded-full shadow-lg border-4 border-base-100 mb-2 bg-base-100"
          />
          <h1 className="text-4xl font-extrabold text-primary">El Taller</h1>
          <p className="text-base-content/70 font-semibold tracking-widest uppercase">Espacio de Arte</p>
        </div>
        
        <div className="flex justify-center gap-3 my-2">
          <a
            href="https://api.whatsapp.com/send?phone=541122509184"
            target="_blank"
            rel="noreferrer"
            className="btn btn-circle btn-ghost bg-base-100 shadow-sm hover:text-success hover:bg-success/10 text-base-content"
          >
            <IconBrandWhatsapp stroke={1.5} />
          </a>
          <a
            href="https://www.instagram.com/eltaller.espaciodearte/"
            target="_blank"
            rel="noreferrer"
            className="btn btn-circle btn-ghost bg-base-100 shadow-sm hover:text-accent hover:bg-accent/10 text-base-content"
          >
            <IconBrandInstagram stroke={1.5} />
          </a>
          <a
            href="https://www.facebook.com/eltaller.espaciodearte"
            target="_blank"
            rel="noreferrer"
            className="btn btn-circle btn-ghost bg-base-100 shadow-sm hover:text-info hover:bg-info/10 text-base-content"
          >
            <IconBrandFacebook stroke={1.5} />
          </a>
          <a
            href="https://www.youtube.com/@eltaller.espaciodearte"
            target="_blank"
            rel="noreferrer"
            className="btn btn-circle btn-ghost bg-base-100 shadow-sm hover:text-error hover:bg-error/10 text-base-content"
          >
            <IconBrandYoutube stroke={1.5} />
          </a>
          <a
            href="https://maps.app.goo.gl/XzDtU67PiLhYYVVG7"
            target="_blank"
            rel="noreferrer"
            className="btn btn-circle btn-ghost bg-base-100 shadow-sm hover:text-primary hover:bg-primary/10 text-base-content"
          >
            <IconMapPin stroke={1.5} />
          </a>
        </div>

        <div className="flex flex-col gap-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-3 w-full">
            {activities.map((a: any, idx: number) => (
              <ActivityCard
                key={idx}
                title={a.title}
                description={a.description}
                color={a.color}
              />
            ))}
          </div>
          
          <ContactInfoDialog
            title="Quiero saber más"
            dialogTitle="Contanos qué te interesa"
            action1="Cancelar"
            action1Icon={<IconX size={20} />}
            action2="Enviar"
            action2Icon={<IconCheck size={20} />}
            dialogOptions={["CANTO", 'INSTRUMENTO', 'ENSAMBLE', 'OTROS']}
            onAction1Click={handleOption1Click}
            onAction2Click={handleOption2Click}
          />
        </div>
      </div>
    </div>
  );
}
