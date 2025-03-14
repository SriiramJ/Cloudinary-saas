import { SignIn } from "@clerk/nextjs";

export default function Page() {
  return (
    <div className="min-h-screen flex justify-center items-center bg-base-200">
      <div className="card w-120 bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="card-title text-center text-3xl">Sign In</h2>
          {/* Clerk's SignIn component */}
          <SignIn path="/sign-in" routing="path" signUpUrl="/sign-up" />
        </div>
      </div>
    </div>
  );
}
