import { Montserrat } from "next/font/google";
import { IoMdMail } from "react-icons/io";
import { ImEye } from "react-icons/im";
import { signInAction } from "@/utils/supabase/actions";
import {
  AuthLayout,
  AuthHeader,
  InputField,
  RememberMe,
  AuthFooter,
  SubmitButton,
  Notification,
} from "@/widgets";

const mont = Montserrat({
  subsets: ["latin"],
});

export default function Page() {
  return (
    <AuthLayout>
      <AuthHeader
        appName="THE APP"
        title="Sign In to The App"
        subtitle="Start your journey"
        fontClass={mont.className}
        Noty={Notification}
      />
      <form
        action={signInAction}
        className="space-y-2 px-5 sm:space-y-4 sm:px-[24%]"
      >
        <InputField
          id="email"
          name="email"
          type="email"
          label="E-mail"
          placeholder="test@example.com"
          required
          icon={<IoMdMail color="grey" />}
        />
        <InputField
          id="password"
          name="password"
          type="password"
          label="Password"
          placeholder="• • • • • • • • •"
          required
          icon={<ImEye color="grey" />}
        />
        <RememberMe id="remember" name="remember" label="Remember me" />
        <SubmitButton pendingText="Signing in">Sign in</SubmitButton>
      </form>
      <AuthFooter
        question="Don't you have an account?"
        link1="/sign-up"
        link1Text="Sign up"
        link2="#"
        link2Text="Forgot password?"
      />
    </AuthLayout>
  );
}
