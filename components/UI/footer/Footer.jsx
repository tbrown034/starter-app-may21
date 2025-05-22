import FooterLinks from "./FooterLinks";
import FooterInfo from "./FooterInfo";
import FooterSocials from "./FooterSocials"; // optional

export default function Footer() {
  return (
    <footer className="w-full mt-10 border-t border-gray-200 dark:border-slate-700 pt-6 px-4">
      <div className="flex flex-col items-center gap-4">
        <FooterLinks />
        <FooterSocials /> {/* Optional */}
        <FooterInfo />
      </div>
    </footer>
  );
}
