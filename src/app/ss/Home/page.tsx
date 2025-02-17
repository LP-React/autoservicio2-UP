import { Banner } from "../../../components/Banner";
import { StudentBanner } from "../../../components/StudentBanner";

export default function Home() {
  return (
    <div className=" bg-gradient-to-b from-[#e1ecff] to-[#fff] w-full ml-4 pl-8 pt-6">
      <Banner />
      <StudentBanner />
    </div>
  );
}
