import { Montserrat } from "next/font/google";
import { FaUserAlt } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { ImEye } from "react-icons/im";
import { signUpAction } from "@/utils/supabase/actions";
import {
  AuthLayout,
  AuthHeader,
  RememberMe,
  SubmitButton,
  AuthFooter,
  InputField,
  Notification,
} from "@/widgets";

const mont = Montserrat({
  subsets: ["latin"],
});

export default async function Page() {
  return (
    <AuthLayout>
      <AuthHeader
        appName="THE APP"
        title="Sign Up to The App"
        subtitle="Start your journey"
        fontClass={mont.className}
        Noty={Notification}
      />
      <form
        action={signUpAction}
        className="space-y-2 px-5 sm:space-y-4 sm:px-[24%]"
      >
        <InputField
          id="username"
          name="username"
          type="text"
          label="Username"
          placeholder="Alexander"
          required
          icon={<FaUserAlt color="grey" />}
        />
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
        <SubmitButton pendingText="Signing up">Sign up</SubmitButton>
      </form>
      <AuthFooter
        question="Already have an account?"
        link1="/sign-in"
        link1Text="Sign in"
        link2="#"
        link2Text="Forgot password?"
      />
    </AuthLayout>
  );
}
