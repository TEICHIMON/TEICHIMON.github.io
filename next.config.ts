import type { NextConfig } from "next";

const nextConfig : NextConfig = {
    // 启用静态导出
    output: "export",

    // 设置基本路径，这是你GitHub仓库的名称
    basePath: "/你的仓库名称",

    // 禁用服务器端图像优化，因为静态导出不支持动态功能
    images: {
        unoptimized: true,
    },
};

export default nextConfig;

