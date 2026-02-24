import Header from "./Header";
import Footer from "./Footer";
import Walkman from "./Walkman";

function Layout({ title, content, next, prev }) {
  return (
    <div className="app-container">
      <Header />
      <Walkman title={title} content={content} next={next} prev={prev} />
      <Footer />
    </div>
  );
}

export default Layout;