"use client";

import { BottomButton } from "@/components/Button";
import Typography from "@/components/Typography";
import styled from "@emotion/styled";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useTranslation } from "react-i18next";

const WaitPage = () => {
  const router = useRouter();
  const { t, i18n } = useTranslation();
  return (
    <Container>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
          flex: 1,
          flexDirection: "column",
          gap: "6px",
        }}
      >
        <Image
          src="/images/svgs/heart.svg"
          alt={t("service_name")}
          width={100}
          height={85}
          style={{
            marginBottom: "8px",
          }}
        />
        <Typography type="h3">{t("waiting_text")}</Typography>
        <Typography type="subtitle1" textAlign="center">
          {i18n.language === "ko" ? (
            <>
              <span
                style={{
                  fontWeight: "bold",
                }}
              >
                {t("intro_negative_button")}
              </span>
              {t("preparing_text")}
            </>
          ) : (
            t("preparing_text")
          )}
          <br />
          {t("asap_text")}
        </Typography>
      </div>
      <Flex flexDirection="column">
        <BottomButton
          onClick={() => {
            // /flow로 이동
            router.push("/flow");
          }}
          label={t("waiting_button_text")}
        />
      </Flex>
    </Container>
  );
};

WaitPage.displayName = "WaitPage";

export default WaitPage;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 56px 16px;
  width: 100%;
  height: 100%;
`;

const Flex = styled.div<{
  flexDirection?: "row" | "column";
}>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  gap: 16px;
  flex-direction: ${(props) => props.flexDirection || "row"};
`;
