import { describe, expect, it } from "vitest";
import { chuKyTaoLink, chuoiWebhook, kiemChuKyWebhook, payosEnv } from "../lib/thanh-toan/payos";

// Giá trị kỳ vọng tính độc lập bằng Python hmac/hashlib
describe("payOS", () => {
  it("chữ ký tạo link theo chuỗi sắp alphabet", () => {
    expect(chuKyTaoLink({ amount: 99000, cancelUrl: "https://a.vn/huy", description: "LYSO 1T", orderCode: 1731220000123, returnUrl: "https://a.vn/ok" }, "k123")).toBe("020c32ccc0674d5023eccbdfd2fd6251c5a547a91aa5d582c11401c9e457de91");
  });
  it("webhook: sắp key, null thành rỗng, kiểm chữ ký", () => {
    const data = { orderCode: 1731220000123, amount: 99000, description: "LYSO 1T", code: "00", accountNumber: "12345", counterAccountName: null };
    expect(chuoiWebhook(data)).toBe("accountNumber=12345&amount=99000&code=00&counterAccountName=&description=LYSO 1T&orderCode=1731220000123");
    expect(kiemChuKyWebhook(data, "c05302824cf8d5730b49cc7b3993ed8f1d5c4f5b4433d6e2b6c852cafce95447", "k123")).toBe(true);
    expect(kiemChuKyWebhook({ ...data, amount: 1 }, "c05302824cf8d5730b49cc7b3993ed8f1d5c4f5b4433d6e2b6c852cafce95447", "k123")).toBe(false);
    expect(kiemChuKyWebhook(data, "", "k123")).toBe(false);
  });
  it("giai đoạn 1: thanh toán tắt", () => {
    expect(payosEnv()).toBeNull();
  });
});
