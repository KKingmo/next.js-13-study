type ReadProps = {
  params: {
    id: string;
  };
};

export default function Read(props: ReadProps) {
  const { params } = props;

  return (
    <>
      <h2>Read</h2>
      parameter: {params.id}
    </>
  );
}
