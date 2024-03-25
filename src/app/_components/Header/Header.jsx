import Link from "next/link";
import "./Header.scss";

export const Header = () => {
  return (
    <header className="">
      <ul>
        <li>
          <Link href="/">home</Link>
        </li>
        <li>
          <Link href="/react/userefcheck">useRef</Link>
        </li>
      </ul>
    </header>
  );
};
