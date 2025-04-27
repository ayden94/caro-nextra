import metadata from "../../metadata";

export async function generateMetadata({ params }) {
  return {...metadata(await params.lang)}
}

export default function Layout({ children }) {
  return (
    <>{children}</>
  );
}