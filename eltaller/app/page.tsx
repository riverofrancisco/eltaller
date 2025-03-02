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
import InstagramIcon from '@mui/icons-material/Instagram'; //-
import FacebookIcon from '@mui/icons-material/Facebook'; //-
import LocationOnIcon from '@mui/icons-material/LocationOn'; //-
import YouTubeIcon from '@mui/icons-material/YouTube'; //-
import WhatsAppIcon from '@mui/icons-material/WhatsApp'; //-
import ContentCopyIcon from '@mui/icons-material/ContentCopy'; //+/ {"source":"chat"}
import { IconButton } from '@mui/material';

export default function Welcome() {
  return (
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
      <div className={styles.links}>
        <a
          href="https://www.instagram.com/eltaller.espaciodearte/"
          target="_blank"
          className={styles.link}
        >
          <InstagramIcon />
          Instagram
        </a>
        <a
          href="https://www.facebook.com/eltaller.espaciodearte"
          target="_blank"
          className={styles.link}
        >
          <FacebookIcon />
          Facebook
        </a>
        <a
          href="https://maps.app.goo.gl/XzDtU67PiLhYYVVG7"
          target="_blank"
          className={styles.link}
        >
          <LocationOnIcon />
          Donde estamos
        </a>
        <a
          href="https://www.youtube.com/@eltaller.espaciodearte"
          target="_blank"
          className={styles.link}
        >
          <YouTubeIcon />
          Youtube
        </a>
        <a
          href="https://api.whatsapp.com/send?phone=541122509184"
          target="_blank"
          className={styles.link}
        >
          <WhatsAppIcon />
          Contacto
        </a>
      </div>
    </div>
  );
}
