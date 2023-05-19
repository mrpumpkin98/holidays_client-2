import { useRouter } from "next/router";
import ClassWrite from "../../../../src/components/units/classPage/write/classWrite.index";
import { useQuery } from "@apollo/client";
import { FECTCH_CLASS_DETAIL } from "../../../../src/components/commons/hooks/useQueries/class/useQueryFetchClassDetail";
import { IQuery } from "../../../../src/commons/types/generated/types";

export default function ClassEditPage() {
  const router = useRouter();

  const { data } = useQuery<IQuery>(FECTCH_CLASS_DETAIL, {
    variables: { class_id: router.query.class_id },
  });
  console.log(data);

  return <ClassWrite isEdit={true} data={data} />;
}
