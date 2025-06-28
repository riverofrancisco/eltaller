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
import AlertDialog from '@/components/Dialogs/EventInfoDialog';
import LibraryMusicRoundedIcon from '@mui/icons-material/LibraryMusicRounded';
import IconButton from '@mui/material/IconButton';
import VolunteerActivismIcon from '@mui/icons-material/VolunteerActivism';

export default function Welcome() {
  const handleOption1Click = () => {
    window.open(
      'https://drive.google.com/file/d/1joPflGmy9tPJuYyynJ2z-DKksWjcMLId/view?usp=sharing',
      '_blank'
    );
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
            href="https://www.instagram.com/eltaller.espaciodearte/"
            target="_blank"
            className={styles.socialIcon}
          >
            <InstagramIcon />
          </IconButton>
          <IconButton
            href="https://www.facebook.com/eltaller.espaciodearte"
            target="_blank"
            className={styles.socialIcon}
          >
            <FacebookRoundedIcon />
          </IconButton>
          <IconButton
            href="https://www.youtube.com/@eltaller.espaciodearte"
            target="_blank"
            className={styles.socialIcon}
          >
            <YouTubeIcon />
          </IconButton>
        </div>

        <div className={styles.links}>
          <AlertDialog
            title="KARAOKETÓN 29/06"
            dialogTitle="KARAOKETÓN"
            option1="Quiero cantar"
            option1Icon={<LibraryMusicRoundedIcon />}
            option2="Quiero Contribuir"
            option2Icon={<VolunteerActivismIcon />}
            onOption1Click={handleOption1Click}
            onOption2Click={handleOption2Click}
          />

          <a
            href="https://api.whatsapp.com/send?phone=541122509184"
            target="_blank"
            className={styles.link}
          >
            Escribinos
            <WhatsAppIcon />
          </a>

          <a
            href="https://maps.app.goo.gl/XzDtU67PiLhYYVVG7"
            target="_blank"
            className={styles.link}
          >
            Donde estamos
            <LocationOnIcon />
          </a>
        </div>
      </div>
    </div>
  );
}
