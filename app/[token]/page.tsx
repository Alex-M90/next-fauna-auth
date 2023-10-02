import UserDashboard from "./UserDashboard";

type Props = {
  params: {
    token: string;
  };
};

export default function LoginPage({ params }: Props) {
  const token = params.token;
  return (
    <div className="min-h-screen bg-slate-50">
      <UserDashboard />
      <p>Token {token}</p>
    </div>
  );
}
