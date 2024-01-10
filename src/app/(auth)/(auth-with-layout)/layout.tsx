export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <h1>inner layout</h1>
      {children}
    </div>
  );
}
