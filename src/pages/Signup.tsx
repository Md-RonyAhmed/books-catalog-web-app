import { cn } from '@/lib/utils';
import logo from '@/assets/images/logo.png';
import { buttonVariants } from '@/components/ui/button';
import { SignUpForm } from '../components/SignUpForm';
import { Link } from 'react-router-dom';
import Footer from '@/layouts/Footer';

export default function Signup() {
  return (
    <>
      <div className="container relative hidden h-screen flex-col items-center justify-center md:grid lg:max-w-none lg:grid-cols-2 lg:px-0">
        <Link
          to="/login"
          className={cn(
            buttonVariants({ variant: 'default', size: 'sm' }),
            'absolute right-4 top-4 md:right-8 md:top-8'
          )}
        >
          Login
        </Link>
        <div className="relative hidden h-full flex-col bg-muted p-10 text-white dark:border-r lg:flex">
          <div
            className="absolute inset-0 bg-cover"
            style={{
              backgroundImage:
                'url(https://img.freepik.com/free-vector/forgot-password-concept-illustration_114360-1123.jpg?w=740&t=st=1689076462~exp=1689077062~hmac=9e18f9401bec5079df62d035d79a0749b3bfb57bc1b92da49465608ccbad9f73)',
            }}
          />
          <div className="relative z-20 flex items-center text-lg font-medium">
            <Link to={'/'}>
              <div className="flex gap-3 justify-center items-center cursor-pointer">
                <img className="h-8" src={logo} alt="log" />
                <h1 className="text-3xl font-semibold text-yellow-400">
                  Lite<span className="text-red-500">rati</span>
                </h1>
              </div>
            </Link>
          </div>
          <div className="relative z-20 mt-auto">
            <blockquote className="space-y-2"></blockquote>
          </div>
        </div>
        <div className="lg:p-8">
          <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
            <SignUpForm />
            <p className="px-8 text-center text-sm text-muted-foreground">
              By clicking continue, you agree to our{' '}
              <Link
                to="/terms"
                className="underline underline-offset-4 hover:text-primary"
              >
                Terms of Service
              </Link>{' '}
              and{' '}
              <Link
                to="/privacy"
                className="underline underline-offset-4 hover:text-primary"
              >
                Privacy Policy
              </Link>
              .
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
