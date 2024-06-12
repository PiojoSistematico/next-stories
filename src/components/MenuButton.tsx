import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import NavigationLinks from "./NavigationLinks";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import Link from "next/link";

const links = [
  { name: "Home", href: "/" },
  {
    name: "Tags",
    href: "/tags",
  },
  { name: "New", href: "/new" },
];

export default function MenuButton() {
  return (
    <Dialog>
      <DialogTrigger className="md:hidden">Menu</DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>What do you want to do?</DialogTitle>
        </DialogHeader>
        <NavigationMenu>
          <NavigationMenuList>
            {links.map((link) => {
              return (
                <NavigationMenuItem>
                  <Link
                    key={link.name}
                    href={link.href}
                    legacyBehavior
                    passHref
                  >
                    <NavigationMenuLink
                      className={navigationMenuTriggerStyle()}
                    >
                      {link.name}
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
              );
            })}
          </NavigationMenuList>
        </NavigationMenu>
      </DialogContent>
    </Dialog>
  );
}
