import Link from "next/link";

const currentYear = new Date().getFullYear();

function Footer() {
  return (
    <footer className=" bg-gray-200 px-4 py-6 md:text-center text-xs">
      <div className="flex flex-col md:flex-row md:justify-between gap-6 max-w-6xl mx-auto w-full">
        <p className="font-semibold">© {currentYear} Kavaro Motors</p>
        <nav>
          <ul className="flex gap-4">
            <li>
              <Link href="#" className="underline">
                Terms of service
              </Link>
            </li>

            <li>
              <Link href="#" className="underline">
                Privacy policy
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </footer>
  );
}

export default Footer;
