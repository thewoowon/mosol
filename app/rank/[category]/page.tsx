"use client";

import { useRouter } from "next/navigation";

type RankDetailPageProps = {
  params: {
    category: string;
  };
};

const RankDetailPage = ({ params: { category } }: RankDetailPageProps) => {
  const router = useRouter();

  return <div>{category}</div>;
};

RankDetailPage.displayName = "RankDetailPage";

export default RankDetailPage;
