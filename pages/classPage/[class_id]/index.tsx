import ClassDetail from "../../../src/components/units/classPage/detail/classDetail.index";
import ClassQuestionUI from "../../../src/components/units/classQuestionPage/classQuestion.index";
import ClassReviewList from "../../../src/components/units/classReviewPage/list/classReviewList.container";
import ClassReviewWrite from "../../../src/components/units/classReviewPage/write/classReviewWrite.index";

export default function ClassDetailPage() {
  return (
    <>
      <ClassDetail />
      <ClassReviewWrite />
      <ClassReviewList />
      <ClassQuestionUI />
    </>
  );
}
