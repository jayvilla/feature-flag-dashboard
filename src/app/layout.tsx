import "./globals.css";
import Script from "next/script";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <body>
        {/* Load OpenTelemetry browser instrumentation */}
        <Script src="/otel/otel-config.js" strategy="beforeInteractive" />
        {children}
      </body>
    </html>
  );
}
