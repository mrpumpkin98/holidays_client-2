import { gql, useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import React from "react";
import { useAuth01 } from "../../../hooks/useAuths/useAuth01";
import { UseQueryFetchLoginUser } from "../../../hooks/useQueries/user/UseQueryFetchLoginUser";
import Head from "next/head";
import * as S from "./modal.styles";

export const CREATE_CLASS_AD = gql`
  mutation createClassAd($createClassAdInput: CreateClassAdInput!) {
    createClassAd(createClassAdInput: $createClassAdInput) {
      amount
    }
  }
`;

declare const window: typeof globalThis & {
  IMP: any;
};

interface ModalProps {
  onClose: () => void;
}

const PayModal: React.FC<ModalProps> = ({ onClose, children }) => {
  useAuth01();
  const router = useRouter();

  const [createClassAd] = useMutation(CREATE_CLASS_AD);
  const { data } = UseQueryFetchLoginUser();

  const onClickGeneralPay = () => {
    // 일반결제 (이니시스 or 나이스)
    console.log(data);
    if (typeof window.IMP === "undefined") return console.log("중지");
    const IMP = window.IMP;

    IMP.init("imp70556024");

    IMP.request_pay(
      {
        pg: "html5_inicis",
        pay_method: "card",
        name: "프리미엄 광고료 결제",
        amount: 15000,
        buyer_email: data?.fetchLoginUser.email,
        buyer_name: data?.fetchLoginUser.name,
        buyer_tel: data?.fetchLoginUser.phone ?? "010-0000-0000",
        buyer_addr: "서울시 강남구 봉은사로",
        buyer_postcode: "110-111",
        m_redirect_url: "http://localhost:3000/mainPage/",
      },
      (rsp: any) => {
        if (rsp.success) {
          try {
            void createClassAd({
              variables: {
                createClassAdInput: {
                  imp_uid: rsp.imp_uid,
                  amount: 15000, // Replace with your desired amount
                  method: "card", // Replace with your desired payment method
                  class_id: "your_class_id", // Replace with your desired class ID
                },
              },
            });
            router.push(`/mainPage`);
          } catch (error) {
            if (error instanceof Error) {
              console.log(error.message);
              alert("결제에 실패했습니다.");
            }
          }
        }
      }
    );
  };

  const onClickKakaoPay = () => {
    // 간편결제 (카카오페이)
    if (typeof window.IMP === "undefined") return console.log("중지");

    const IMP = window.IMP;

    IMP.request_pay(
      {
        // param
        pg: "kakaopay",
        pay_method: "card",
        name: "프리미엄 광고 결제",
        amount: 15000, // 동적으로 바뀐 amount 값 사용
        buyer_email: data.fetchLoginUser.email,
        buyer_name: data.fetchLoginUser.name,
        buyer_tel: "010-4242-4242",
        buyer_addr: "서울특별시 강남구 신사동",
        buyer_postcode: "01181",
        m_redirect_url: "localhost:3000/mainPage",
      },
      async (rsp: any): Promise<void> => {
        // callback
        if (rsp.success === true) {
          void createClassAd({
            variables: {
              createClassAdInput: {
                imp_uid: rsp.imp_uid,
                amount: 15000,
                method: "card",
                class_id: "8b74e352-9c85-4f3f-ad83-664c7ef202dd",
              },
            },
          });
          router.push(`/mainPage`);
        } else {
          // 결제 실패 시 로직
          alert("결제가 취소되었습니다");
        }
      }
    );
  };

  return (
    <S.ModalWrapper>
      {children}
      <Head>
        <script src="https://cdn.iamport.kr/v1/iamport.js"></script>
      </Head>
      <S.Wrapper>
        <S.Header>결제수단 선택</S.Header>
        <S.DivideLine />
        <S.PaymentWrapper>
          <S.PaymentBtn onClick={onClickGeneralPay}>일반결제</S.PaymentBtn>
          <S.PaymentBtn onClick={onClickKakaoPay}>카카오페이</S.PaymentBtn>
        </S.PaymentWrapper>
        <S.DivideLine />
        <S.Button className="Cancel" onClick={onClose}>
          취소
        </S.Button>
      </S.Wrapper>
    </S.ModalWrapper>
  );
};

export default PayModal;
