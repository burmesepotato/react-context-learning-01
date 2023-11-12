import { ProfileAvatar, ProfileInfo } from "@/components";

export default function Dashboard() {
  return (
    <main>
      <div className="flex gap-6 items-center">
        <ProfileAvatar />
        <ProfileInfo />
      </div>
    </main>
  );
}
