module.exports = {
  apps: [
    {
      name: "admin",
      script: "index.js",
      cwd: "./admin/",
    },
    {
      name: "chambal",
      script: "index.js",
      cwd: "./chambal/",
    },
    {
      name: "api-gateway",
      script: "index.js",
      cwd: "./client/api-gateway/",
    },
    {
      name: "package",
      script: "index.js",
      cwd: "./package/",
    },
    {
      name: "hotel",
      script: "index.js",
      cwd: "./hotel/",
    },
    {
      name: "payment",
      script: "index.js",
      cwd: "./payment/",
    },
    {
      name: "safari",
      script: "index.js",
      cwd: "./safari/",
    },
  ],
}
