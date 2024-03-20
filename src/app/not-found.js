import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center border w-96 mx-auto my-auto">
      <h2 className="font-bold m-2">Sorry, You need to log in to vote!</h2>
      <p m-2 text-center>
        Make sure you are logged in first...
      </p>
      <Link
        className="font-bold text-blue-700 m-2"
        href="api/auth/signin?callbackUrl=http%3A%2F%2Flocalhost%3A3000%2Fpost%2F2"
      >
        Go to log in
      </Link>
    </div>
  );
}
