import { authClient } from '@/lib/auth-client';
import toast from 'react-hot-toast';

export async function signInWithGoogle() {
  try {
    await authClient.signIn.social({ provider: 'google' });
  } catch (error) {
    console.log(error);
    toast.error('Google sign-in failed.');
  }
}
