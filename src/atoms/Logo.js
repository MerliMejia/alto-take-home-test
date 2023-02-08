const { default: Image } = require('next/image');

const Logo = () => (
  <Image width={150} height={50} src="/next.svg" alt="Page logo" />
);

export default Logo;
