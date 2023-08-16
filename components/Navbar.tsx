import Link from "next/link";
import Image from "next/image";
import CustomButton from "@/ui-library/CustomButton";

const Navbar = () => {
  return (
    <header className="w-full absolute z-10">
      <nav className="max-w-[1440px] mx-auto flex justify-between items-center sm:px-16 px-6 py-4">
        <Link href="/" className="flex justify-center items-center">
          <Image
            src="/logo.svg"
            alt=""
            width={50}
            height={50}
            className="object-contain"
          />
          <span className="mx-2 font-bold">Car Hub</span>
        </Link>
        <CustomButton
          title="Sign In"
          containerStyles="text-blue-700 bg-slate-100 min-w-[130px] rounded-full border-black p-2"
        />
      </nav>
    </header>
  );
};

export default Navbar;
