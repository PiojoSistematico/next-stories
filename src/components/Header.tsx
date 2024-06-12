import Image from "next/image";
import NavigationLinks from "./NavigationLinks";
import MenuButton from "./MenuButton";

export default function Header() {
  return (
    <header className="flex flex-row">
      <Image src={""} alt={"Logo"}></Image>
      <nav>
        <NavigationLinks></NavigationLinks>
      </nav>

      <MenuButton></MenuButton>
    </header>
  );
}
