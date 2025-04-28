import metadata from "../../metadata";

export async function generateMetadata() {
  return {...metadata("en")}
}

export default function Layout({ children }) {
  return (
    <>{children}</>
  );
}