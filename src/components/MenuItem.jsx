import Link from "next/link";

const MenuItem = ({menu}) => {
  return (
    <Link href={menu.link}>
      {menu.name}
    </Link>
  )
}

export default MenuItem;