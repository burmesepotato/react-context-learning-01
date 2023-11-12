import { useUserContext } from "@/contexts";

export default function ProfileAvatar() {
  const user = useUserContext();

  return (
    <div className="border-2 border-[#646cff] w-24 h-24 rounded-full p-0.5">
      <img
        src={user.photo || "https://placehold.co/200/DDDDDD/DDDDDD"}
        alt={user.username}
        className="w-full h-full object-cover rounded-full"
      />
    </div>
  );
}
