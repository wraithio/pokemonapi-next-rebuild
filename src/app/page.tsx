import MainSearch from "@/components/MainSearch";
import Image from "next/image";
import '@fortawesome/fontawesome-svg-core/styles.css';
import { config } from '@fortawesome/fontawesome-svg-core';
config.autoAddCss = false;


export default function Home() {
  return (
  <div>

<MainSearch/>
  </div>
  );
}
