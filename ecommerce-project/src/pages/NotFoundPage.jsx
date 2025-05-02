import { Header } from "../components/Header";
import './NotFoundPage.css'

export function NotFoundPage() {
  return (
    <>
      <title>404 Page Not found</title>
      <link rel="icon" type="image" href="home-favicon.png" />
        <Header />

      <div className="not-found-message">
        <p>Ooops!</p>
        <p>Page Not Found</p>
      </div>
     
    </>
  );
}