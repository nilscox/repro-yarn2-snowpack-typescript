module.exports = {
  mount: {
    public: { url: '/', static: true },
    src: '/dist',
  },
  packageOptions: {
    rollup: {
      plugins: [require('rollup-plugin-pnp-resolve')()],
    },
  },
};
