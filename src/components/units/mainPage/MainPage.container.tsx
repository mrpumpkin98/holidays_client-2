import { useRouter } from "next/router";
import MainPageUI from "./MainPage.presenter";

export default function MainPageContainer(): JSX.Element {
  const router = useRouter();

  const onClickEducation = (): void => {
    router.push(`/교육`);
  };
  const onClickLeisure = (): void => {
    router.push(`/여가`);
  };
  const onClickMagazine = (): void => {
    router.push(`/magazine`);
  };
  const onClickCooking = (): void => {
    router.push(`/class/cooking`);
  };
  const onClickWorkout = (): void => {
    router.push(`/class/workout`);
  };
  const onClickMainClass = (): void => {
    router.push(`/classList`);
  };
  const onClickMainMagazine = (): void => {
    router.push(`/magazine`);
  };
  const onClickMainCommunity = (): void => {
    router.push(`/community`);
  };

  return (
    <MainPageUI
      onClickEducation={onClickEducation}
      onClickLeisure={onClickLeisure}
      onClickMagazine={onClickMagazine}
      onClickCooking={onClickCooking}
      onClickWorkout={onClickWorkout}
      onClickMainClass={onClickMainClass}
      onClickMainMagazine={onClickMainMagazine}
      onClickMainCommunity={onClickMainCommunity}
    />
  );
}
