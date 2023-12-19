import { useForm } from 'react-hook-form';
import { signIn } from 'next-auth/react';
import { Button, Input } from '../ui';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import Link from 'next/link';
import Loader from '../ui/Loader';
import { ROUTES } from '@/routes';

const AuthenticationForm = ({ isSignUp = false }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: { email: '', password: '' },
  });
  const [authenticationError, setAuthenticationError] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const router = useRouter();

  const handleAuthentication = async (data: {
    email: string;
    password: string;
  }) => {
    try {
      setIsSubmitting(true);
      const response = await signIn('credentials', {
        email: data.email,
        password: data.password,
        redirect: false,
      });

      if (response) {
        if (response.error) {
          setAuthenticationError('Incorrect email or password.');
        } else {
          router.replace(ROUTES.DASHBOARD_URL);
        }
      }
    } catch (error) {
      console.error(error);
      setAuthenticationError('Something went wrong.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="flex h-screen w-full items-stretch justify-end overflow-hidden">
      <div className="flex h-screen w-full max-w-[600px] flex-col items-center justify-center sm:w-2/3 sm:bg-white lg:w-1/3  ">
        <form
          className="mb-4 rounded bg-white/90 px-6 pb-8 pt-6 sm:bg-white md:max-lg:w-[420px]"
          onSubmit={handleSubmit(handleAuthentication)}
        >
          <h1 className="mb-16 text-2xl font-semibold">
            {isSignUp ? 'Sign up' : 'Log in'}
          </h1>
          <Input
            label="Email"
            placeholder="Enter email address"
            type="text"
            className="mb-2"
            {...register('email', { required: 'This is a required field' })}
            error={errors?.email}
          />
          <Input
            label="Password"
            placeholder="Enter password"
            type="password"
            className="mb-2"
            {...register('password', {
              required: 'This is a required field',
            })}
            error={errors?.password}
          />

          {authenticationError && (
            <p className="mb-5 text-sm text-red-500">{authenticationError}</p>
          )}

          <Button type="submit" className="mt-3 w-full" disabled={isSubmitting}>
            {isSubmitting ? <Loader /> : 'Login'}
          </Button>

          <p className="h- pt-10 text-center">
            {isSignUp ? 'Already have an account?' : "Don't have an account?"}{' '}
            <Link
              href={isSignUp ? ROUTES.LOGIN_URL : ROUTES.SIGNIN_URL}
              className="underline"
            >
              {isSignUp ? 'Login now' : 'Sign up now'}
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default AuthenticationForm;
