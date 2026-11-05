declare module "qimen-dunjia" {
  export function generateChartByDatetime(s: string, opt?: Record<string, unknown>): unknown;
  export function chartToObject(c: unknown): Record<string, unknown>;
}
