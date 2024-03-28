import Link from "next/link";
import { usePathname } from "next/navigation";
import { LinkType } from "../layout/NavBar";

type NavLinkProps = {
  link: LinkType;
};

const NavLink: React.FC<NavLinkProps> = ({ link }) => {
  const pathName = usePathname();
  return (
    <div>
      <Link
        href={link.url}
        key={link.url}
        className={`${pathName === link.url && " bg-slate-800 text-white"} rounded p-1 transition-all`}
      >
        {link.text}
      </Link>
    </div>
  );
};

export default NavLink;
