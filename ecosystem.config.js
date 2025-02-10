module.exports = {
    apps: [
      {
        name: "api-pate-mag",
        script: "./server.ts",
        watch: true,
        ignore_watch: ["node_modules", "logs"],
        // Optionnel : indique le répertoire de travail
        cwd: "/var/www/api/patate-mag",
        env: {
          NODE_ENV: "development",
        },
        env_production: {
          NODE_ENV: "production",
        },
      },
    ],
  };