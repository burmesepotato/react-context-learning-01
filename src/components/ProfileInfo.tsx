import { useUserContext } from "@/contexts";

export default function ProfileInfo() {
  const user = useUserContext();

  return (
    <div className="flex flex-col gap-1">
      <p className="text-xl font-light">@{user.username}</p>
      <p className="text-sm">{user.fullname}</p>
    </div>
  );
}
