import { SlowComponent } from "./components/slow-component";
import {
  AdditionalComplexThings,
  BlaBla,
  ScrollableContainer,
} from "./components/dummy-components";

export default function App() {
  return (
    <ScrollableContainer>
      {/* a dynamic block */}
      <SlowComponent />
      <BlaBla />
      <AdditionalComplexThings />
    </ScrollableContainer>
  );
}
