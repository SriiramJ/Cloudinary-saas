import { SignUp } from "@clerk/nextjs";

export default function Page() {
  return (
    <div className="min-h-screen flex justify-center items-center bg-base-200">
      <div className="card w-110 bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="card-title text-center text-3xl">Sign Up</h2>
          {/* Clerk's SignUp component */}
          <SignUp path="/sign-up" routing="path" signInUrl="/sign-in" />
        </div>
      </div>
    </div>
  );
}
