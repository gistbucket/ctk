import TextField from "../../global/FormElements/TextField";

const General = () => {
  return (
    <>
      <TextField label="Volume name" name="canvasConfig.node_name" />
      <TextField label="Name" name="volumeConfig.name" />
    </>
  );
};

export default General;
