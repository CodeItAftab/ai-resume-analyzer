// Minimal loader for catch-all route
export async function loader() {
  return {};
}

// Basic 404 component
export default function NotFound() {
  return (
    <main style={{ padding: "2rem", textAlign: "center" }}>
      <h1>404 - Page Not Found</h1>
      <p>The page you are looking for does not exist.</p>
    </main>
  );
}
