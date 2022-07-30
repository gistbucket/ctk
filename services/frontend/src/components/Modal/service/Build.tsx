import { styled } from "@mui/joy";
import TextField from "../../global/FormElements/TextField";
import Records from "../../Records";

const Root = styled("div")`
  display: flex;
  flex-direction: column;
  row-gap: ${({ theme }) => theme.spacing(1)};
`;

const Build = () => {
  return (
    <Root>
      <TextField label="Context" name="build.context" required={true} />

      <TextField label="Dockerfile" name="build.dockerfile" />

      <TextField label="Stage" name="build.stage" />

      <TextField label="Isolation" name="build.isolation" />

      <TextField label="Shared memory size" name="build.sharedMemorySize" />

      <Records
        name="build.arguments"
        title="Arguments"
        referred="argument"
        fields={(index: number) => [
          {
            name: `build.arguments[${index}].key`,
            placeholder: "Key",
            required: true,
            type: "text"
          },
          {
            name: `build.arguments[${index}].value`,
            placeholder: "Value",
            type: "text"
          }
        ]}
        newValue={{
          key: "",
          value: ""
        }}
      />

      <Records
        name="build.labels"
        title="Labels"
        referred="label"
        fields={(index: number) => [
          {
            name: `build.labels[${index}].key`,
            placeholder: "Key",
            required: true,
            type: "text"
          },
          {
            name: `build.labels[${index}].value`,
            placeholder: "Value",
            type: "text"
          }
        ]}
        newValue={{ key: "", value: "" }}
      />

      <Records
        name="build.sshAuthentications"
        title="SSH authentications"
        referred="SSH authentication"
        fields={(index: number) => [
          {
            name: `build.sshAuthentications[${index}].id`,
            placeholder: "ID",
            required: true,
            type: "text"
          },
          {
            name: `build.sshAuthentications[${index}].path`,
            placeholder: "Path",
            type: "text"
          }
        ]}
        newValue={{
          id: "",
          path: ""
        }}
      />

      <Records
        name="build.cacheFrom"
        title="Cache from"
        referred="item"
        fields={(index: number) => [
          {
            name: `build.cacheFrom[${index}]`,
            placeholder: "Location",
            required: true,
            type: "text"
          }
        ]}
        newValue={""}
      />

      <Records
        name="build.cacheTo"
        title="Cache to"
        referred="item"
        fields={(index: number) => [
          {
            name: `build.cacheTo[${index}]`,
            placeholder: "Location",
            required: true,
            type: "text"
          }
        ]}
        newValue={""}
      />

      <Records
        name="build.extraHosts"
        title="Extra hosts"
        referred="extra host"
        fields={(index: number) => [
          {
            name: `build.extraHosts[${index}].hostName`,
            placeholder: "Host name",
            required: true,
            type: "text"
          },
          {
            name: `build.extraHosts[${index}].ipAddress`,
            placeholder: "IP address",
            required: true,
            type: "text"
          }
        ]}
        newValue={{
          hostName: "",
          ipAddress: ""
        }}
      />
    </Root>
  );
};

export default Build;
