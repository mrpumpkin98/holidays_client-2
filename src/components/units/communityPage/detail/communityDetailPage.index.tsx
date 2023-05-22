import { useRouter } from "next/router";
import * as S from "./communityDetailPage.styles";

export default function communityDetailPage() {
  const router = useRouter();

  return (
    <>
      <S.Wrapper>
        <S.Title>전국여행/맛집탐방 유튜브 촬영/편집/업로드 하실 남성분</S.Title>
        <S.UserTie>
          <S.UserName>이지훈</S.UserName>
          <S.Time>2023.05.23</S.Time>
        </S.UserTie>
        <S.Line />
        <S.Contents>
          안녕하세요, 한 회사 대표님의 수행비서입니다. 이제 은퇴하시는 한 기업의
          50대 대표님과 아내분의 전국여행을 따라다니며, 흔적을 남기고자 유튜브를
          시작해보려고합니다. 성격도 매우 자상하시고, 매너도 좋으시고 너무
          좋습니다! 가족같은 분위기로 수행하고 있으며, 인생에서 한번 올까말까 한
          좋은 기회입니다! 언제든지 연락주시면 상세히 설명해드리겠습니다. 추후
          면접진행도 있을 예정이며, 포트폴리오 있으신분 준비 해주시면
          감사하겠습니다~! 숙박비,식대,교통비 전액 지원하고, 말 그대로 여행하고
          맛집투어(일반음식~최고급음식 )좋아하시는 분+ 유튜브 촬영/편집/업로드
          가능하신분 찾습니다!! 대체로 2박 3일 진행예정이며, 1일[(2-3편)
          촬영,편집,업로드 작업]당 급여는 협의가능합니다! 무료로 여행과
          맛집투어제공을 목적으로 하시는분 원합니다!!
        </S.Contents>
        <S.Img src="/communityPage/exampleImage1.png"></S.Img>
        <S.Line />
        <S.CommentWrite placeholder="댓글을 입력해 주세요" />
        <S.CommentBox>
          <S.CommentUser>최 팀장</S.CommentUser>
          <S.CommentTime>2023.05.23</S.CommentTime>
          <S.CommentContents>
            그때 댓글에 하시겠다던 분과는 매칭결과가 좋지 못하셨나봅니다. 또
            올리신 걸 보니..
          </S.CommentContents>
        </S.CommentBox>
        <S.Line />
      </S.Wrapper>
    </>
  );
}
