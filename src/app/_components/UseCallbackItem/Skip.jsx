"use client";

import { useCallback, useState } from "react";
import { memo } from "react";

// すべての props が前回のレンダー時と同じ場合、ShippingForm は再レンダーをスキップするようになります
const ShippingForm = memo(function ShippingForm({ onSubmit }) {
  // arrow関数でもOK?
  const [count, setCount] = useState(0);
  console.log("[ARTIFICIALLY SLOW] Rendering <ShippingForm />");

  let startTime = performance.now(); // performanceってなんだ
  while (performance.now() - startTime < 500) {
    // Do nothing for 500 ms to emulate extremely slow code
  }

  function handleSubmit(e) {
    e.preventDefault();
    const formData = new formData(e.target);
    const orderDetails = {
      ...Object.fromEntries(formData),
      count,
    };
    onSubmit(orderDetails); // これなんだろう
  }

  return (
    <form onSubmit={handleSubmit}>
      <p>
        <b>
          Note: <code>ShippingForm</code> is artificially slowed down!
        </b>
      </p>
      <label>
        Number of items:
        <button type="button" onClick={() => setCount(count - 1)}>
          –
        </button>
        {count}
        <button type="button" onClick={() => setCount(count + 1)}>
          +
        </button>
      </label>
      <label>
        Street:
        <input name="street" />
      </label>
      <label>
        City:
        <input name="city" />
      </label>
      <label>
        Postal code:
        <input name="zipCode" />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
});

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

function post(url, data) {
  // Imagine this sends a request...
  console.log("POST /" + url);
  console.log(data);
}
