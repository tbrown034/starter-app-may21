import ProfileButton from "@/components/buttons/ProfileButton";
import SignInButton from "@/components/buttons/SignInButton";
import SignOutButton from "@/components/buttons/SignOutButton";

export default function HeroCTA() {
  return (
    <div>
      <div>
        <h3>Profile</h3>
        <div>
          <SignInButton /> <SignOutButton /> <ProfileButton />
        </div>
      </div>
      <div>
        <h3>Discover</h3>
      </div>
    </div>
  );
}
