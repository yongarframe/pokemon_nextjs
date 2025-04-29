import "./globals.css";
import ClientWrapper from "./ClientWrapper";
import Link from "next/link";

export default function RootLayout({ children }) {
  return (
    <html lang="ko">
      <body>
        <h1 className="border-t-[50px] border-t-[red] bg-black text-white text-[45px] text-center">
          포켓몬 도감
        </h1>
        <nav className="py-[10px] border-b-[3px] border-b-black flex gap-[20px] justify-center">
          <Link href={"/"}>메인</Link>
          <Link href={"/favorite"}>찜목록</Link>
          <div>
            <input
              // onChange={(e) => navigate(`/search?pokemon=${e.target.value}`)}
              className="border-b border-[darkgray] px-2 w-[120px]"
            ></input>
            <span>🔎</span>
          </div>
        </nav>
        <ClientWrapper>{children}</ClientWrapper>
      </body>
    </html>
  );
}
