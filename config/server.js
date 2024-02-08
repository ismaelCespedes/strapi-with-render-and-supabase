module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),
  app: {
    keys: env.array('APP_KEYS', ['DgrwtKRgNICiu7bQZD027w==','1oan4+MKkPqXPSJu79zUZQ==','QDZzC/VIADPUVQV84qlbnw==','XF/nsMN2HI06SH/gb2xazw==']),
  },
  webhooks: {
    populateRelations: env.bool('WEBHOOKS_POPULATE_RELATIONS', false),
  },
});
