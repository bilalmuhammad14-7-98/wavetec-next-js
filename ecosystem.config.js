module.exports = {
  apps: [
    {
      name: 'wavetec-website',
      script: 'npm',
      args: 'start',
      env: {
        PORT: 8083,
        NODE_ENV: 'production',
      },
    },
  ],
};
