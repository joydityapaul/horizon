export default function RootLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
      <main>
        Auth Section
      {children}
      </main>
    );
  }
  