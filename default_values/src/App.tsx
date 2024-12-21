import Button from "./components/button";
import { Loading, Warning } from "./components/icons";

export default function App() {
  return (
    <>
      <Button type="primary" icon={<Loading color="white" />} />
      <Button type="secondary" icon={<Loading />} />
      <Button icon={<Loading />} />
    </>
  );
}
