"use client";

import Link from "next/link";
import Image from "next/image";
import * as Dialog from "@radix-ui/react-dialog";
import { useState } from "react";
import menu from "../../assets/shared/mobile/menu.svg";
import close from "../../assets/shared/mobile/close.svg";
import styles from "../../styles/mobile.module.css";

const MobileNav = () => {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <Dialog.Root onOpenChange={() => setOpen(!open)}>
      <Dialog.Trigger className={styles.DialogTrigger}>
        {open ? <Image src={close} alt="" /> : <Image src={menu} alt="" />}
      </Dialog.Trigger>

      <Dialog.Portal>
        <Dialog.Overlay className={styles.DialogOverlay} />

        <Dialog.Content className={styles.DialogContent}>
          <nav className={styles.nav}>
            <ul>
              <li>
                <Link href={"/stories"}>Stories</Link>
              </li>
              <li>
                <Link href={"/features"}>Features</Link>
              </li>
              <li>
                <Link href={"/pricing"}>Pricing</Link>
              </li>
            </ul>
            <hr />
            <button className={styles.Button}>Get an invite</button>
          </nav>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};

export default MobileNav;
