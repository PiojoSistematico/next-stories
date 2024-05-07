import Image from "next/image";
import NavigationLinks from "./NavigationLinks";

export default function Header() {
  return (
    <header className="bg-green-400">
      <Image src={""} alt={"Logo"}></Image>
      <nav>
        <NavigationLinks></NavigationLinks>
      </nav>
      <button>Menu</button>
    </header>
  );
}
