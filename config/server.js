module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),
  app: {
    keys: env.array('APP_KEYS',['RjRb69/cBKkHYG+Wmq9l4w==','EJ00yJma0Io18IX7GOuzSA==,DdQz+u7+2ONE2o4SW5oXJw==','w7EN8CZknU8zivLowa/U1w=='])
  },
});
