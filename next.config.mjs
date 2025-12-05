import createAnalyzer from "@next/bundle-analyzer"

const withBundledAnalyzer = createAnalyzer({
  enabled : process.env.ANALYZER === 'true'
})

/** @type {import('next').NextConfig} */
const nextConfig = {};

export default withBundledAnalyzer(nextConfig);
