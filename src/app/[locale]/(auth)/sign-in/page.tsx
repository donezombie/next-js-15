import AuthenticationProvider from '@/providers/AuthenticationProvider';
import PageContent from './page-content';

export default function SignIn() {
  return (
    <AuthenticationProvider>
      <div className="component:SignIn">
        <PageContent />
      </div>
    </AuthenticationProvider>
  );
}
