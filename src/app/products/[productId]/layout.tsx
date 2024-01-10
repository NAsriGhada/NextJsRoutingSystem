export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
      <div>
          {children}
          <h1>product features</h1>
    </div>
  );
}
