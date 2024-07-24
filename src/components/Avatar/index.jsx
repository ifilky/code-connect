import Image from "next/image";

import styles from "./avatar.module.css";

export const Avatar = ({ name, imageSrc }) => {
  return (
    <ul className={styles.container}>
      <li>
        <Image
          width={32}
          height={32}
          src={imageSrc}
          alt={`Avatar do(a) ${name}`}
        />
      </li>
      <li>@{name}</li>
    </ul>
  );
};

export default Avatar;
