import "@styles/globals.css";
import Header from "@components/header";
import Footer from "@components/footer";

export const metadata = {
  title: "Make",
  description: "BUildindg thechnologies that matter",
};

function Root({ children }) {
  return (
    <html>
      <body>
        <main id="root">
          <Header />
          {children}
          <Footer />
        </main>
      </body>
    </html>
  );
}

export default Root;
