import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin("./src/shared/localization/request.ts");

const nextConfig = {};

export default withNextIntl(nextConfig);
