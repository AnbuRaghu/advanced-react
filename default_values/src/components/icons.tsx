export const Loading = ({ size, color }: { size?: string; color?: string }) => {
  return <span style={{ fontSize: size, color: color }}>⏳</span>;
};

export const Error = () => {
  return <span>❌</span>;
};

export const Warning = () => {
  return <span>⚠️</span>;
};

export const Avatar = () => {
  return <span>😎</span>;
};
