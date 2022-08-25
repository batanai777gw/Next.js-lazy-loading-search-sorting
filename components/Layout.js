import React from "react";
import Head from "next/head";
import Link from "next/link"
import { useRouter } from "next/router";

const Layout = (props) => {
  const router = useRouter();
  return (
    <div>
      <Head>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap@4.4.1/dist/css/bootstrap.min.css"
          integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh"
          crossorigin="anonymous"
        />
      </Head>
      <div className="container">
        <header className="d-flex justify-content-center py-3">
          <ul className="nav nav-pills">
            <li className="nav-item">
                <Link href='/frontend'>
              <a className={router.pathname === '/frontend' ? "nav-link active" : "nav-link"}>
                Frontend
              </a>
              </Link>
            </li>
            <li className="nav-item">
            <Link href='/backend'>
              <a className={router.pathname === '/backend' ? "nav-link active" : "nav-link"}>
                Backend
              </a>
              </Link>
            </li>
          </ul>
        </header>
      </div>

      <div class="album py-5 bg-light">
        <div class="container">{props.children}</div>
      </div>
    </div>
  );
};

export default Layout;
