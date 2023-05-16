import ClassDetail from "../../../src/components/units/classPage/detail/classDetail.container";
import ClassQuestion from "../../../src/components/units/classQuestionPage/classQuestion.container";
import ClassReviewList from "../../../src/components/units/classReviewPage/list/classReviewList.container";
import ClassReviewWrite from "../../../src/components/units/classReviewPage/write/classReviewWrite.container";

export default function ClassDetailPage() {
  return (
    <>
      <ClassDetail />
      <ClassReviewWrite />
      <ClassReviewList />
      <ClassQuestion />
    </>
  );
}
