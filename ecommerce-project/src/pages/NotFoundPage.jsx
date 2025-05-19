import { Header } from "../components/Header";
import './NotFoundPage.css'

export function NotFoundPage({cart}) {
  return (
    <>
      <title>404 Page Not found</title>
      <link rel="icon" type="image" href="home-favicon.png" />
        <Header cart={cart} />

      <div className="not-found-message">
        <p>Ooops!</p>
        <p>Page Not Found</p>
      </div>
     
    </>
  );
}