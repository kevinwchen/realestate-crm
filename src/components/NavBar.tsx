import Link from "next/link"

export const NavBar = () => {
  return (
    <div className="flex gap-4">
      <Link className="text-sky-600" href={"/"}>
        Home
      </Link>
      <Link className="text-red-600" href={"/UserPost"}>
        User Post Page
      </Link>
    </div>
  )
}
