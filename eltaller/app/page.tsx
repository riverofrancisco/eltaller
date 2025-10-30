'use client';

/* import Hero from "@/components/hero";
import ConnectSupabaseSteps from "@/components/tutorial/connect-supabase-steps";
import SignUpUserSteps from "@/components/tutorial/sign-up-user-steps";
import { hasEnvVars } from "@/utils/supabase/check-env-vars";

export default async function Index() {
  return (
    <>
      <Hero />
      <main className="flex-1 flex flex-col gap-6 px-4">
        <h2 className="font-medium text-xl mb-4">Next steps</h2>
        {hasEnvVars ? <SignUpUserSteps /> : <ConnectSupabaseSteps />}
      </main>
    </>
  );
}
 */

import Image from 'next/image'; //-
import styles from './Welcome.module.css'; //-
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import YouTubeIcon from '@mui/icons-material/YouTube';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import AddBoxIcon from '@mui/icons-material/AddBox';
import ContactInfoDialog from '@/components/Dialogs/ContactInfoDialog';
import LibraryMusicRoundedIcon from '@mui/icons-material/LibraryMusicRounded';
import CloseIcon from '@mui/icons-material/Close';
import DoneIcon from '@mui/icons-material/Done';
import IconButton from '@mui/material/IconButton';
import VolunteerActivismIcon from '@mui/icons-material/VolunteerActivism';
import ActivityCard from '@/components/ui/cards/ActivityCard';
import activities from '@/mock/activities.json';

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
    <div className={styles.pageContainer}>
      <div className={styles.container}>
        <div className={styles.profile}>
          <Image
            src="/images/logo.png"
            alt="El Taller"
            width={150}
            height={150}
            className={styles.avatar}
          />
          <h1 className={styles.title}>El Taller</h1>
          <p className={styles.description}>Espacio de Arte</p>
        </div>
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '15px',
            margin: '5px 0 15px 0',
          }}
        >
          <IconButton
            href="https://api.whatsapp.com/send?phone=541122509184"
            target="_blank"
            sx={{
              color: 'black',
            }}
          >
            <WhatsAppIcon />
          </IconButton>
          <IconButton
            href="https://www.instagram.com/eltaller.espaciodearte/"
            target="_blank"
            sx={{
              color: 'black',
            }}
          >
            <InstagramIcon />
          </IconButton>
          <IconButton
            href="https://www.facebook.com/eltaller.espaciodearte"
            target="_blank"
            sx={{
              color: 'black',
            }}
          >
            <FacebookRoundedIcon />
          </IconButton>
          <IconButton
            href="https://www.youtube.com/@eltaller.espaciodearte"
            target="_blank"
            sx={{
              color: 'black',
            }}
          >
            <YouTubeIcon />
          </IconButton>
          <IconButton
            href="https://maps.app.goo.gl/XzDtU67PiLhYYVVG7"
            target="_blank"
            sx={{
              color: 'black',
            }}
          >
            <LocationOnIcon />
          </IconButton>
        </div>

        <div className={styles.links}>


          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
            gap: '12px',
            marginTop: 12,
            width: '100%',
          }}>
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
            action1Icon={<CloseIcon />}
            action2="Enviar"
            action2Icon={<DoneIcon />}
            dialogOptions={["CANTO", 'INSTRUMENTO', 'ENSAMBLE', 'OTROS']}
            onAction1Click={handleOption1Click}
            onAction2Click={handleOption2Click}
          />
        </div>
      </div>
    </div>
  );
}
