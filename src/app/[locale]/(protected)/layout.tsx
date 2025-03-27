import AuthenticationProvider from '@/providers/AuthenticationProvider';

export default function ProtectedLayout(props: { children: React.ReactNode }) {
  return (
    <AuthenticationProvider>
      {props.children}
    </AuthenticationProvider>
  );
}
