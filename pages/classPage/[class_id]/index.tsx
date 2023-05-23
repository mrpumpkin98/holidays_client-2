import { UseQueryFetchClassReview } from "../../../src/components/commons/hooks/useQueries/class/useQueryFetchClassReview";
import ClassDetail from "../../../src/components/units/classPage/detail/classDetail.index";
import ClassQuestionUI from "../../../src/components/units/classQuestionPage/classQuestion.index";
import ClassReviewList from "../../../src/components/units/classReviewPage/list/classReviewList.index";
import ClassReviewWrite from "../../../src/components/units/classReviewPage/write/classReviewWrite.index";

export default function ClassDetailPage() {
  const { data } = UseQueryFetchClassReview();
  console.log(data);

  return (
    <>
      <ClassDetail />
      <ClassReviewWrite isEdit={false} />
      <ClassReviewList data={data} />
      <ClassQuestionUI />
    </>
  );
}
