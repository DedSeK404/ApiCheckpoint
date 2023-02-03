export const Names = ({ names }) => {
  return <p className={`P${names.id}`}>{names.name}</p>;
};
