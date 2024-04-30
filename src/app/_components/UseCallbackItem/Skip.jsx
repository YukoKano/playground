"use client";

import { useCallback } from "react";
import { memo } from "react";

const ShippingForm = memo(function ShippingForm({ onSubmit }) {}); // arrow関数でもOK?
// すべての props が前回のレンダー時と同じ場合、ShippingForm は再レンダーをスキップするようになります

export const Skip = ({ productId, referrer, theme }) => {
  const handleSubmit = useCallback(
    (orderDetails) => {
      post("/product/" + productId + "/buy", {
        referrer,
        orderDetails,
      });
    },
    [productId, referrer]
  );
  //useCallback は依存配列が変更されるまでの再レンダー間で関数をキャッシュします

  return (
    <div className={theme}>
      <ShippingForm onSubmit={handleSubmit} />
    </div>
  );
};
